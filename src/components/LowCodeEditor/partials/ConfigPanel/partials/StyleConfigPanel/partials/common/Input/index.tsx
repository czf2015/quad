// @ts-nocheck
import React from 'react';
import { Input as AntInput } from 'antd';
import { useInputValue } from '@/hooks';
import styles from './index.module.less';

export const Input = ({ width = 85, value, handleBur }) => {
  const { inputValue, handleInputChange } = useInputValue(value);
  return (
    <AntInput
      className={styles.input}
      style={{ width }}
      size="small"
      value={inputValue}
      onChange={handleInputChange}
      onBlur={handleBur}
    />
  );
};
