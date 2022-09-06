// @ts-nocheck
import React from 'react';
import { Tooltip } from 'antd';
import { BorderOuterOutlined } from '@ant-design/icons';
import { Partials } from './partials';
import styles from './index.module.less';

export default ({ store, sizeConfig, width, height }) => {
  return (
    <div className={styles.wh}>
      <Tooltip title="宽高">
        <BorderOuterOutlined className={styles.icon} />
      </Tooltip>
      {sizeConfig(width, height).map((item, index) => (
        <Partials key={index} store={store} {...item} />
      ))}
    </div>
  );
};
