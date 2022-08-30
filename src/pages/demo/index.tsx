// @ts-nocheck
import React from 'react';
import DragZone from '@/layouts/DragZone';
import { StyleConfigPanel } from '@/components/LowCodeEditor/partials/ConfigPanel/partials';
// import Demo from '@/components/DragWrapper'

const props = {};

export default () => {
  // return <Demo {...props} />
  // return <DragZone />
  return (
    <div style={{ width: 320, outline: '1px solid #ccc', margin: '100px 0px 0px 400px' }}>
      <StyleConfigPanel />
    </div>
  );
};
