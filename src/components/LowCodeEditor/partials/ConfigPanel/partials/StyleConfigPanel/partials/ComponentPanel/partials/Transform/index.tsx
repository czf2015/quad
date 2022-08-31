// @ts-nocheck
import React from 'react';
import { InputNumber } from 'antd';
import { BorderTopOutlined, BorderLeftOutlined } from '@ant-design/icons';
import styles from './index.module.less';

export const Transform = ({ store }) => {
  const transformConfig = [
    { label: '水平缩放', value: store('transform')?.scaleX, store_name: 'scaleX' },
    { label: '垂直缩放', value: store('transform')?.scaleY, store_name: 'scaleY' },
    { label: '旋转角度', value: store('transform')?.rotate, store_name: 'rotate' },
  ];
  const originConfig = [
    {
      value: store('transformOrigin')?.top,
      Icon: BorderTopOutlined,
      store_name: 'top',
    },
    {
      value: store('transformOrigin')?.left,
      Icon: BorderLeftOutlined,
      store_name: 'left',
    },
  ];
  const handleChange = (value, store_name, parent_store_name) => {
    if (value) {
      store(parent_store_name, { [store_name]: value });
    } else {
      store(parent_store_name, { [store_name]: 0 });
    }
  };

  console.log(store('transform'));
  console.log(store('transformOrigin'));
  return (
    <div className={styles.trans_form}>
      <h4 className={styles.title}>变形</h4>
      <div className={styles.container}>
        {transformConfig.map(({ label, value, store_name }, index) => (
          <div className={styles.item} key={index}>
            <span className={styles.label}>{label}:</span>
            <InputNumber
              className={styles.input}
              size="small"
              controls={false}
              value={value}
              onChange={(value) => {
                handleChange(value, store_name, 'transform');
              }}
            />
          </div>
        ))}
      </div>
      <div className={styles.origin}>
        <span className={styles.label}>变形原点:</span>
        {originConfig.map(({ value, Icon, store_name }, index) => (
          <InputNumber
            key={index}
            className={styles.input}
            size="small"
            value={value}
            prefix={<Icon />}
            onChange={(value) => {
              handleChange(value, store_name, 'transformOrigin');
            }}
          />
        ))}
      </div>
    </div>
  );
};
