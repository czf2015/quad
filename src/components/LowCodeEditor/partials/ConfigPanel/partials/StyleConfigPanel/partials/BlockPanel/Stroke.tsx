// @ts-nocheck
import React from 'react';
import { InputNumber, Radio, Tooltip } from 'antd';
import { ColorSelect } from '../common';
import styles from './index.module.less';

export default ({ store }) => {
  const handleColorChange = (value) => {
    store('color', value);
  };

  const handleWidthChange = (e) => {
    store('width', e.target.value);
  };

  const handleStyleChange = (e) => {
    store('style', e.target.value);
  };

  return (
    <div className={styles.stroke}>
      <h4>边线</h4>
      <div className={styles.content}>
        <ColorSelect bgColor={store('color')} handleColorChange={handleColorChange} />
        <Tooltip title="边线宽度">
          <InputNumber defaultValue={store('width')} onBlur={handleWidthChange} />
        </Tooltip>
      </div>
      <Radio.Group onChange={handleStyleChange} value={store('style')} className={styles.radio}>
        <Radio value="none">none</Radio>
        <Radio value="solid">solid</Radio>
        <Radio value="dashed">dashed</Radio>
      </Radio.Group>
    </div>
  );
};