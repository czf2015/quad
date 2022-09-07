// @ts-nocheck
import React from 'react';
import { Input, Select } from 'antd';
import { useInputValue } from '@/hooks';
import { CustomColorPicker } from '../../../../../common';
import styles from './index.module.less';

const options = [
  {
    label: '实线',
    value: 'solid',
  },
  {
    label: '虚线',
    value: 'dashed',
  },
];

export default ({ store, stroke, index, type, thickness, color, isMore, icon }) => {
  const { inputValue, handleInputChange } = useInputValue(thickness);
  let Icon = icon;

  const changeData = (key, value) => {
    stroke.splice(index, 1, { ...stroke?.[index], [key]: value });
    store('stroke', stroke);
  };

  const fillData = (key, value) => {
    const createArr = Array(4).fill({ ...{ thickness, color, type }, [key]: value });
    store('stroke', createArr);
  };

  const handleSelectChange = (value) => {
    if (isMore) {
      changeData('type', value);
    } else {
      fillData('type', value);
    }
  };

  const handleInputBlur = (e) => {
    if (isMore) {
      changeData('thickness', e.target.value);
    } else {
      fillData('thickness', e.target.value);
    }
  };

  const handleColorChange = (value) => {
    if (isMore) {
      changeData('color', value?.hex);
    } else {
      fillData('color', value?.hex);
    }
  };

  return (
    <div className={styles.container}>
      <Icon />
      <div className={styles.content}>
        <CustomColorPicker color={color} width={35} height={20} onColorChange={handleColorChange} />
        <Input
          className={styles.input}
          size="small"
          bordered={false}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        <Select
          className={styles.input}
          size="small"
          bordered={false}
          options={options}
          value={type}
          onChange={handleSelectChange}
        />
      </div>
    </div>
  );
};
