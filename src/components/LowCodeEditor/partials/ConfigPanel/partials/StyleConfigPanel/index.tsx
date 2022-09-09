// @ts-nocheck
import React from "react";
import ComponentPanel from "./partials/ComponentPanel";
import styles from "./index.module.less";

// 样式配置面板
export const StyleConfigPanel = ({ id, style, styleConfig = { width: style?.width || 400, height: style?.height || 300 }, updateEntity }) => {
  return (
    <div id="style-config-panel" className={`${styles.container} quad-scrollbar`}>
      <ComponentPanel id={id} styleConfig={styleConfig} updateEntity={updateEntity} />
    </div>
  );
};
