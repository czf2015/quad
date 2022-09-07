// @ts-nocheck
import React from 'react';
import { Select, InputNumber, Tooltip } from 'antd';
import { Eyes } from '../common';
import { opacityIcon, zIcon } from '../../icons';
import { OVERFLOW_OPTIONS } from './config';
import styles from './index.module.less';

export default ({ store }) => {
  const handleEyes = () => {
    store('hidden', !store('hidden'));
  };

  const handleOverflow = (value) => {
    store('overflow', value);
  };

  const handleZIndexBlur = (e) => {
    store('z', e.target.value);
  };

  const handleOpacityBlur = (e) => {
    store('opacity', e.target.value);
  };

  return (
    <div className={styles.layer}>
      <h4 className={styles.title}>图层</h4>
      <div className={styles.content}>
        <Tooltip title="溢出">
          <Select
            value={store('overflow') || 'hidden'}
            className={styles.item}
            options={OVERFLOW_OPTIONS}
            onChange={handleOverflow}
            size="small"
          />
        </Tooltip>
        <Tooltip title="透明度">
          <InputNumber
            className={`${styles.item} ${styles.percent}`}
            max={100}
            min={0}
            controls={false}
            defaultValue={store('opacity') || 100}
            prefix={opacityIcon()}
            onBlur={handleOpacityBlur}
            size="small"
          />
        </Tooltip>
        <Tooltip title="z-index">
          <InputNumber
            className={styles.item}
            defaultValue={store('z') || 10}
            onBlur={handleZIndexBlur}
            min={1}
            prefix={zIcon()}
            size="small"
          />
        </Tooltip>
        <Eyes hidden={store('hidden')} handleEyes={handleEyes} />
      </div>
    </div>
  );
};
