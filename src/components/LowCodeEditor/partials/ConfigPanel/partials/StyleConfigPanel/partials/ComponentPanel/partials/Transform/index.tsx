// @ts-nocheck
import React from 'react';
import { Input, InputNumber } from 'antd';
import { transformConfig, originConfig } from './helper';
import styles from './index.module.less';

export const Transform = ({
  store,
  transform: { scaleX = 1, scaleY = 1, rotate = 0 } = {},
  transformOrigin: { left = '50%', top = '50%' } = {},
}) => {
  return (
    <div className={styles.trans_form}>
      <h4 className={styles.title}>变形</h4>
      <div className={styles.origin}>
        <span className={styles.label}>原点:</span>
        {originConfig(store, left, top).map(({ value, icon, onChange, onBlur }, index) => (
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
        {transformConfig(store, scaleX, scaleY, rotate).map(
          ({ value, step, formatter, icon, onChange, onBlur }, index) => (
            <InputNumber
              key={index}
              className={styles.input}
              size="small"
              step={step}
              prefix={icon()}
              formatter={(value) => (formatter ? `${value}°` : value)}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
          )
        )}
      </div>
    </div>
  );
};
