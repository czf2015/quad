// @ts-nocheck
import React from 'react';
import { Divider } from 'antd';
import Constraints from './Constraints';
import Layer from './Layer';
import Fill from '../common/Fill';
import { useStore } from '@/hooks';
import { blockStyle } from '@/mock/styleConfig';

// 区块样式配置面板
export default ({ styleConfig = blockStyle }) => {
  const store = useStore(styleConfig);

  return (
    <>
      <Constraints store={store} />
      <Divider />
      <Layer store={store} />
      <Divider />
      <Fill store={store} />
    </>
  );
};
