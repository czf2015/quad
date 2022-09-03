// @ts-nocheck
import React from 'react';
import { Input } from 'antd';
import { useInputValue } from '@/hooks';
import styles from './index.module.less';

export default ({ store, store_name, icon }) => {
  const { inputValue, handleInputChange } = useInputValue(store(store_name));
  const handleBlur = (e) => {
    store(store_name, e.target.value);
  };
  return (
    <div className={styles.container}>
      <Input
        className={styles.input}
        size="small"
        prefix={icon()}
        bordered={false}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
    </div>
  );
};
