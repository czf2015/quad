// @ts-nocheck
import React from "react";
import { blockStyle, widgetStyle } from "@/mock/styleConfig";
import { convertToComponentStyle } from "@/components/ColorGradient/helpers";
// import BlockPanel from './partials/BlockPanel';
import ComponentPanel from "./partials/ComponentPanel";
import styles from "./index.module.less";

// 样式配置面板
export const StyleConfigPanel = ({ id, styleConfig, updateEntity }) => {
  // console.log(convertToComponentStyle(widgetStyle));
  return (
    <div id="style-config-panel" className={`${styles.container} quad-scrollbar`}>
      {/* <BlockPanel styleConfig={styleConfig} /> */}
      <ComponentPanel id={id} styleConfig={styleConfig} updateEntity={updateEntity} />
    </div>
  );
};
