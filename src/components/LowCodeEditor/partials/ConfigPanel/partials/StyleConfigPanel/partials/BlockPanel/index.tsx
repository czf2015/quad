// @ts-nocheck
import React from "react";
import { Divider } from 'antd';
import Constraints from "./Constraints";
import Layer from "./Layer";
import Fill from "./Fill";
import Stroke from "./Stroke";
import { useStore } from "@/hooks";

// 区块样式配置面板
const BlockPanel = ({ blockConfig }) => {
  const {
    constraintsSource: { hor, ver },
    layerSource: { overflow, opacity, hidden, z },
    fill,
    stroke: { style, color, width }
  } = blockConfig;
  const store = useStore({
    hor,
    ver,
    overflow,
    opacity,
    hidden,
    z,
    fill,
    style, 
    color, 
    width
  });
  return (
    <>
      <Constraints store={store} />
      <Divider/>
      <Layer store={store} />
      <Divider/>
      <Fill store={store} />
      <Divider/>
      <Stroke store={store} />
    </>
  );
};

export default BlockPanel;
