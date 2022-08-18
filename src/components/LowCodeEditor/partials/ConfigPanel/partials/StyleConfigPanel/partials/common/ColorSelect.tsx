// @ts-nocheck
import React from 'react';
import { Input, InputNumber } from 'antd';
import { useInputValue } from '@/hooks';
import styles from './index.module.less';

export const ColorSelect = ({ bgColor, disabled, number, handleColorChange, handleBlur }) => {
  const { inputValue, handleInputChange, setResetInput } = useInputValue(bgColor);
  const isFitColorRule = /^#[0-9A-F]{6}$/i;
  const handleChange = (e) => {
    if (isFitColorRule.test(e.target.value)) {
      handleColorChange(e.target.value.toUpperCase());
    } else {
      alert('输入不符合16进制颜色值规则');
      setResetInput((prev) => prev + 1);
    }
  };

  const onBlur = (e) => {
    handleBlur(e.target.value);
  };

  return (
    <div className={styles.input_group}>
      <Input
        className={styles.color_input}
        type="color"
        value={bgColor}
        disabled={disabled}
        onChange={handleChange}
      />
      <Input
        className={styles.value_input}
        value={inputValue}
        disabled={disabled}
        onChange={handleInputChange}
        onBlur={handleChange}
      />
      <InputNumber
        className={styles.number_input}
        max={100}
        min={0}
        defaultValue={number}
        disabled={disabled}
        onBlur={onBlur}
      />
    </div>
  );
};
