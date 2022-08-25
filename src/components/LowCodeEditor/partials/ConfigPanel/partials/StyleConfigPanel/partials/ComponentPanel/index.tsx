// @ts-nocheck
import React from 'react';
import { Box, BoxShadow, BorderRadius, Transform } from './partials';
import { useStore } from '@/hooks';

export default ({ widgetStyle }) => {
  const store = useStore({
    ...widgetStyle,
  });

  return (
    <div>
      <Box store={store} />
    </div>
  );
};
