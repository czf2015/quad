// @ts-nocheck
import React from 'react';
import { Select, Tooltip } from '@/plugins/ui';
import { constraintsConfig } from './config';
import { handleOption, handleDiagramsConfig } from './helpers';
import styles from './index.module.less';

const AlignSelect = ({ store }) => {
  const { horizontal, vertical } = constraintsConfig;

  const handleHorChange = (value) => {
    store('constraints', { horizontal: value });
  };

  const handleVerChange = (value) => {
    store('constraints', { vertical: value });
  };

  return (
    <div>
      <div className={styles.selectWrap}>
        {horizontal.icon()}
        <Tooltip placement="top" title={horizontal.tooltip}>
          <Select
            options={handleOption(horizontal.options)}
            value={store('constraints')?.horizontal}
            onChange={handleHorChange}
          />
        </Tooltip>
      </div>
      <div className={styles.selectWrap}>
        {vertical.icon()}
        <Tooltip placement="top" title={vertical.tooltip}>
          <Select
            options={handleOption(vertical.options)}
            value={store('constraints')?.vertical}
            onChange={handleVerChange}
          />
        </Tooltip>
      </div>
    </div>
  );
};

const AlignDiagrams = ({ store }) => {
  return (
    <div className={styles.diagrams}>
      <div className={styles.rect}>
        {handleDiagramsConfig(styles, store('constraints')?.horizontal, store('constraints')?.vertical, store).map(
          ({ className, style, method }, index) => (
            <div key={index} className={className} style={style} onClick={method} />
          )
        )}
      </div>
    </div>
  );
};

export default ({ store }) => {
  return (
    <div className={styles.constraints}>
      <h4>对齐方式</h4>
      <div className={styles.content}>
        <AlignDiagrams store={store} />
        <AlignSelect store={store} />
      </div>
    </div>
  );
};
