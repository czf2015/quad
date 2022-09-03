// @ts-nocheck
import React from 'react';
import { Tooltip } from 'antd';
import { BorderOuterOutlined } from '@ant-design/icons';
import CustomInput from './partials/CustomInput';
import BoxSize from './partials/BoxSize';
import { splitsConfig, sizeConfig } from './helper';
import styles from './index.module.less';

export const BoxModel = ({ store }) => {
  return (
    <div className={styles.box}>
      <h4 className={styles.title}>盒子</h4>
      <div className={styles.wh}>
        <Tooltip title="宽高">
          <BorderOuterOutlined style={{ fontSize: 16, color: '#8a8a8a' }} />
        </Tooltip>
        {sizeConfig.map((item, index) => (
          <BoxSize key={index} store={store} {...item} />
        ))}
      </div>
      {splitsConfig?.map((item, index) => (
        <CustomInput key={index} store={store} {...item} />
      ))}
    </div>
  );
};
