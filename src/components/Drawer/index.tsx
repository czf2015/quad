import React, { useState } from 'react';
import { Drawer } from 'antd';
import DropZone from '@/components/DropZone';

export default ({
  id,
  pid,
  name,
  title = "Drawer with extra actions",
  blocks = {
    title: 'demo1',
    content: 'demo2',
  },
  slots,
  extra,
  width = 500,
  visible = true,
  placement = 'right',
  getContainer = (triggerNode) => document.getElementById('display_viewer'),
  updateEntity,
  ...attrs
}) => {
  const onClose = () => {
    updateEntity(id, { visible: false })
  };

  return (
    <Drawer
      title={slots.title || <DropZone pid={id} id={blocks.title} title={title} updateEntity={updateEntity} {...attrs} style={{ top: 12, width: width - 96, height: 24 }}>{title}</DropZone>}
      extra={extra}
      visible={visible}
      onClose={onClose}
      width={width}
      placement={placement}
      getContainer={getContainer}
    >
      {slots.content || <DropZone pid={id} id={blocks.content} title={title} updateEntity={updateEntity} {...attrs} style={{ width: width - 48, height: 400 }}>请拖放</DropZone>}
    </Drawer>
  );
};
