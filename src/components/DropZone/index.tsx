import React from 'react';
import { Block } from '@/components/LowCodeEditor/partials/DisplayViewer/partials';
import { InboxOutlined } from '@ant-design/icons';

export default ({ editable = true, handleDrop = console.log, children = <InboxOutlined />, ...attrs }) => {
  return <Block {...attrs} editable={editable} handleDrop={handleDrop}>{children}</Block>
}