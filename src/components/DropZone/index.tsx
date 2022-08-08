import React, { useState } from 'react';
import { Block } from '@/components/LowCodeEditor/partials/DisplayViewer/partials';
import { InboxOutlined } from '@ant-design/icons';

export default ({ pid, id, editable = true, store, handleDrop = console.log, style, children = <InboxOutlined />, ...attrs }) => {
  return <Block {...attrs} id={id} editable={editable} store={store} handleDrop={handleDrop} style={style}>{children}</Block>
}