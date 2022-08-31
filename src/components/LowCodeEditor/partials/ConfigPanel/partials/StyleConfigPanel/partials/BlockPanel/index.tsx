// @ts-nocheck
import React from 'react';
import { Divider } from 'antd';
import Constraints from './Constraints';
import Layer from './Layer';
import Fill from '../common/Fill';
import { useStore } from '@/hooks';
import { stopPropagation } from '@/utils/dom';
import styles from './index.module.less'

// 区块样式配置面板
export default ({ id, styleConfig, updateEntity }) => {
  const updateStyleConfig = (styleConfig) => {
    updateEntity(id, { styleConfig })
  }
  const store = useStore(styleConfig, updateStyleConfig);

  return (
    <div className={styles.block_style_config}>
      <Constraints store={store} />
      <Divider />
      <Layer store={store} />
      <Divider />
      <Fill store={store} />
    </div>
  );
};
