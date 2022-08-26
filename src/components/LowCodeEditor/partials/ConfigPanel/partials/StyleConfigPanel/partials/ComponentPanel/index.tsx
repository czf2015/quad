// @ts-nocheck
import React from 'react';
import { Box, BoxShadow, BorderRadius, Transform, Text } from './partials';
import { useStore } from '@/hooks';

export default ({ widgetStyle }) => {
  const store = useStore({
    ...widgetStyle,
  });

  return (
    <div>
      <Box store={store} />
      <Text store={store} />
    </div>
  );
};
