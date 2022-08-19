// @ts-nocheck
import React, { useState } from 'react';
import { Input, InputNumber } from 'antd';
import { ChromePicker } from 'react-color';
import { useInputValue } from '@/hooks';
import styles from './index.module.less';

export const CustomColorPicker = () => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker(true);
  };
  return (
    <div>
      <div style={styles.swatch} onClick={handleClick}>
        <div style={styles.color} />
      </div>
      {displayColorPicker && (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={this.handleClose} />
          <ChromePicker color={this.state.color} onChange={this.handleChange} />
        </div>
      )}
    </div>
  );
};

export const ColorPicker = ({ bgColor, disabled, number, handleColorChange, handleBlur }) => {
  const { inputValue, handleInputChange, setResetInput } = useInputValue(bgColor);
  const isFitColorRule = /^#[0-9A-F]{6}$/i;
  const handleChange = (color) => {
    console.log(color);
    if (isFitColorRule.test(color.hex)) {
      handleColorChange(color.hex.toUpperCase());
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
      {/* <ChromePicker
        className={styles.color_input}
        color={bgColor}
        disabled={disabled}
        onChangeComplete={handleChange}
      /> */}
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
