// @ts-nocheck
import React from 'react';
import { Divider } from 'antd';
import { Box, BoxShadow, Transform, Text, BoxModel } from './partials';
import Fill from '../common/Fill';
import { useStore } from '@/hooks';

export default ({ widgetStyle }) => {
  const store = useStore({
    ...widgetStyle,
  });

  return (
    <div>
      <BoxModel store={store} />
      <Divider />
      <Transform store={store} />
      <Divider />
      <Text store={store} />
      <Divider />
      <Fill store={store} />
      <Divider />
      <BoxShadow store={store} />
    </div>
  );
};
