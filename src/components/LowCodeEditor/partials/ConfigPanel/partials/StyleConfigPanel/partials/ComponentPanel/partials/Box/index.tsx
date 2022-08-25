// @ts-nocheck
import React, { useState } from 'react';
import { InputNumber } from 'antd';
import { Input, SplitIcon } from '../../../common';
import { singleMargins } from './config';
import styles from './index.module.less';

const Margins = ({ label, value, handleBlur }) => {
  const [disconnect, setDisconnect] = useState(false);

  const handleDisconnect = () => {
    setDisconnect((pre) => !pre);
  };

  const renderNumberInputs = () => {
    return singleMargins?.map((item, index) => (
      <InputNumber key={index} style={{ width: 40, marginLeft: 8 }} size="small" value={item} />
    ));
  };

  return (
    <div className={styles.item}>
      <div>
        <span>{label}:</span>
        {disconnect ? renderNumberInputs() : <Input width={160} value={value} handleBlur={handleBlur} />}
      </div>
      <SplitIcon disconnect={disconnect} handleDisconnect={handleDisconnect} />
    </div>
  );
};

export const Box = ({ store }) => {
  const margins = [
    {
      label: '内边距',
      value: store('padding'),
      handleBlur: (e) => {
        store('padding', e.target.value);
      },
    },
    {
      label: '外边距',
      value: store('margin'),
      handleBlur: (e) => {
        store('margin', e.target.value);
      },
    },
  ];

  return (
    <div className={styles.box}>
      <h4 className={styles.title}>盒子模型</h4>
      {margins?.map(({ label, value, handleBlur }, index) => (
        <Margins key={index} label={label} value={value} handleBlur={handleBlur} />
      ))}
    </div>
  );
};
