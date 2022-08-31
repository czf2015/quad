// @ts-nocheck
import React, { useState } from 'react';
import { Select, InputNumber as Number } from 'antd';
import { CustomColorPicker } from '../../../../../common';
import styles from './index.module.less';

const options = [
  { label: 'inset', value: 'inset' },
  { label: 'outer', value: '' },
];

const InputNumber = ({ value, onChange }) => (
  <Number className={styles.input_number} size="small" value={value} onChange={onChange} />
);

export default ({ store, index }) => {
  const boxShadows = store('boxShadow');
  const item = store?.('boxShadow')?.[index];

  const changeData = (key, value) => {
    boxShadows.splice(index, 1, { ...item, [key]: value });
    store('boxShadow', boxShadows);
  };

  const onColorChange = (color) => {
    changeData('color', color?.hex);
  };

  const handleTypeChange = (value) => {
    changeData('type', value);
  };

  const handleBlurChange = (value) => {
    changeData('blur', value);
  };

  const handleXChange = (value) => {
    changeData('offsetX', value);
  };

  const handleYChange = (value) => {
    changeData('offsetY', value);
  };

  const handleSpreadChange = (value) => {
    changeData('spread', value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.item} style={{ marginLeft: 23 }}>
          <span>颜色:</span>
          <CustomColorPicker color={item?.color} width={40} onColorChange={onColorChange} />
        </div>
        <div className={styles.item}>
          <span>类型:</span>
          <Select
            className={styles.select}
            size="small"
            options={options}
            value={item?.type}
            onChange={handleTypeChange}
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.item} style={{ marginLeft: 23 }}>
          <span>模糊:</span>
          <InputNumber value={item?.blur} onChange={handleBlurChange} />
        </div>
        <div className={styles.item}>
          <span>延伸:</span>
          <InputNumber value={item?.spread} onChange={handleSpreadChange} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.item}>
          <span>水平偏移:</span>
          <InputNumber value={item?.offsetX} onChange={handleXChange} />
        </div>
        <div className={styles.item}>
          <span>垂直偏移:</span>
          <InputNumber value={item?.offsetY} onChange={handleYChange} />
        </div>
      </div>
    </div>
  );
};
