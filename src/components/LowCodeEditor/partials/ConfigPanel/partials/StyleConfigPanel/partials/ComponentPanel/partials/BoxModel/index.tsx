// @ts-nocheck
import React from 'react';
import { Tooltip } from 'antd';
import { BorderOuterOutlined } from '@ant-design/icons';
import CustomInput from './partials/CustomInput';
import BoxSize from './partials/BoxSize';
import { splitsConfig, sizeConfig } from './helper';
import styles from './index.module.less';

export const BoxModel = ({ store,width=200,height=200,margin=['0px','0px','0px','0px'],padding=['0px','0px','0px','0px'],borderRadius=['0px','0px','0px','0px'] }) => {
  return (
    <div className={styles.box}>
      <h4 className={styles.title}>盒子</h4>
      <div className={styles.wh}>
        <Tooltip title="宽高">
          <BorderOuterOutlined style={{ fontSize: 16, color: '#8a8a8a' }} />
        </Tooltip>
        {sizeConfig(width,height).map((item, index) => (
          <BoxSize key={index} store={store} {...item} />
        ))}
      </div>
      {splitsConfig(margin,padding,borderRadius)?.map((item, index) => (
        <CustomInput key={index} store={store} {...item} />
      ))}
    </div>
  );
};
