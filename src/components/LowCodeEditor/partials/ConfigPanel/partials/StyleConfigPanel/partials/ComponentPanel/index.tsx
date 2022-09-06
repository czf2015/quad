// @ts-nocheck
import React from 'react';
import { Divider } from 'antd';
import { Stroke, BoxShadow, Transform, Text, BoxModel } from './partials';
import Fill from '../common/Fill';
import { useStore } from '@/hooks';

export default ({ id, styleConfig, updateEntity }) => {
  const updateStyleConfig = (styleConfig) => {
    updateEntity(id, { styleConfig });
  };
  const store = useStore(styleConfig, updateStyleConfig);

  return (
    <div>
      <BoxModel store={store} {...styleConfig} />
      <Divider />
      <Transform store={store} />
      <Divider />
      <Text store={store} {...styleConfig} />
      <Divider />
      <Stroke store={store} {...styleConfig} />
      <Divider />
      <Fill store={store} {...styleConfig} />
      <Divider />
      <BoxShadow store={store} {...styleConfig} />
    </div>
  );
};
