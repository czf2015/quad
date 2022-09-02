// @ts-nocheck
import React from 'react';
import { Input, InputNumber } from 'antd';
import { transformConfig, originConfig } from './helper';
import styles from './index.module.less';

export const Transform = ({ store }) => {
  console.log(store('transform'));
  return (
    <div className={styles.trans_form}>
      <h4 className={styles.title}>变形</h4>
      <div className={styles.origin}>
        <span className={styles.label}>原点:</span>
        {originConfig(store).map(({ value, icon, onChange, onBlur }, index) => (
          <Input
            key={index}
            className={styles.input}
            size="small"
            bordered={false}
            value={value}
            prefix={icon()}
            onChange={onChange}
            onBlur={onBlur}
          />
        ))}
      </div>
      <div className={styles.container}>
        {transformConfig(store).map(({ value, step, icon, onChange, onBlur }, index) => (
          <InputNumber
            key={index}
            className={styles.input}
            size="small"
            step={step}
            prefix={icon()}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        ))}
      </div>
    </div>
  );
};
