// @ts-nocheck
import React from 'react';
import { Divider } from 'antd';
import Constraints from './Constraints';
import Layer from './Layer';
// import Fill from './Fill';
import Fill from '../common/Fill';
import { BgImage } from '@/components/ColorGradient/partials';
import Stroke from './Stroke';
import { useStore } from '@/hooks';

// 区块样式配置面板
const BlockPanel = ({ blockStyle }) => {
  const { constraints, fill, overflow, opacity, z, hidden } = blockStyle;
  const store = useStore({
    constraints,
    fill,
    overflow,
    opacity,
    z,
    hidden,
  });
  return (
    <>
      <Constraints store={store} />
      <Divider />
      <BgImage store={store} />
      <Divider />
      <Layer store={store} />
      <Divider />
      <Fill store={store} />
    </>
  );
};

export default BlockPanel;
