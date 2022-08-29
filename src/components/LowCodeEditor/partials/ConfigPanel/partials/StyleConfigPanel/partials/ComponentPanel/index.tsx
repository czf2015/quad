// @ts-nocheck
import React from 'react';
import { Divider } from 'antd';
import { Box, BoxShadow, BorderRadius, Transform, Text } from './partials';
import Fill from '../common/Fill'
import { useStore } from '@/hooks';

export default ({ widgetStyle }) => {
  const store = useStore({
    ...widgetStyle,
  });

  return (
    <div>
      <Box store={store} />
      <Divider />
      <BorderRadius store={store} />
      <Divider />
      <Text store={store} />
      <Divider />
      <Fill store={store} />
      <Divider />
      <Transform store={store} />
    </div>
  );
};
