// @ts-nocheck
import React, { useState } from 'react';
import { Input, InputNumber } from 'antd';
import { ChromePicker } from 'react-color';
import { useInputValue } from '@/hooks';
import styles from './index.module.less';

export const CustomColorPicker = ({ color, onColorChange, width, height = 15 }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker(true);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };
  return (
    <div className={styles.color_picker}>
      <div className={styles.swatch} onClick={handleClick}>
        <div className={styles.color} style={{ backgroundColor: color, width, height }} />
      </div>
      {displayColorPicker && (
        <div className={styles.popover}>
          <div className={styles.cover} onClick={handleClose} />
          <ChromePicker color={color} onChange={onColorChange} />
        </div>
      )}
    </div>
  );
};

export const ColorPicker = ({ bgColor, disabled, handleColorChange }) => {
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

  return (
    <div className={styles.input_group}>
      <CustomColorPicker color={bgColor} />
      {/* <Input
        className={styles.color_input}
        type="color"
        value={bgColor}
        disabled={disabled}
        onChange={handleChange}
      /> */}
      <Input
        className={styles.value_input}
        bordered={false}
        value={inputValue}
        disabled={disabled}
        onChange={handleInputChange}
        onBlur={handleChange}
      />
    </div>
  );
};
