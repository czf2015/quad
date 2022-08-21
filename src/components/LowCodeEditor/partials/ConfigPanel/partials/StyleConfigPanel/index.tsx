// @ts-nocheck
import React from 'react';
import { blockStyle } from '@/mock/styleConfig';
import BlockPanel from './partials/BlockPanel';
import styles from './index.module.less';


// 样式配置面板
export const StyleConfigPanel = () => {
  return (
    <div id="style-config-panel" className={styles.container}>
      <BlockPanel blockStyle={blockStyle} />
    </div>
  );
};
