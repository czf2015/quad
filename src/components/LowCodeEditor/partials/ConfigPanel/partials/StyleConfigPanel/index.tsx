// @ts-nocheck
import React from 'react';
import { blockStyle, widgetStyle } from '@/mock/styleConfig';
import BlockPanel from './partials/BlockPanel';
import ComponentPanel from './partials/ComponentPanel';
import styles from './index.module.less';

// 样式配置面板
export const StyleConfigPanel = () => {
  return (
    <div id="style-config-panel" className={styles.container}>
      {/* <BlockPanel blockStyle={blockStyle} /> */}
      <ComponentPanel widgetStyle={widgetStyle} />
    </div>
  );
};
