// @ts-nocheck
import React from 'react';
import { Divider } from 'antd';
import Constraints from './Constraints';
import Layer from './Layer';
import Fill from '../common/Fill';
import { useStore } from '@/hooks';
// import styles from './index.module.less'

// 区块样式配置面板
export default ({ id, styleConfig, updateEntity }) => {
  const updateStyleConfig = (styleConfig) => {
    updateEntity(id, { styleConfig })
  }
  const store = useStore(styleConfig, updateStyleConfig);

  return (
    <div /* className={`${styles.block_style_config} quad-card`} */>
      <Constraints store={store} {...styleConfig} />
      <Divider />
      <Layer store={store} {...styleConfig} />
      <Divider />
      <Fill store={store} {...styleConfig} />
    </div>
  );
};
