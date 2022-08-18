import React from 'react';
import { Modal } from 'antd';
import DropZone from '@/components/DropZone';
import styles from './index.module.less'

export default ({
  id,
  pid,
  name,
  title = "Modal",
  blocks = {
    title: 'title',
    content: 'content',
  },
  slots,
  visible = false,
  onOk,
  width = 720,
  bodyStyle = { height: 640, overflow: 'auto' },
  destroyOnClose = true,
  getContainer = (triggerNode) => document.getElementById('display_viewer'),
  updateEntity,
  ...attrs
}) => {
  const onCancel = () => {
    updateEntity(id, { visible: false })
  };

  return (
    <Modal
      wrapClassName={styles.modal_wrapper}
      title={slots.title || <DropZone pid={id} id={blocks.title} title={title} updateEntity={updateEntity} {...attrs} style={{ top: 12, width: width - 96, height: 24 }}>{title}</DropZone>}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      width={width}
      bodyStyle={bodyStyle}
      maskStyle={{ position: 'absolute' }}
      getContainer={getContainer}
      destroyOnClose={destroyOnClose}
    >
      {slots.content || <DropZone pid={id} id={blocks.content} title={title} updateEntity={updateEntity} {...attrs} style={{ width: width - 48, height: 400 }}>请拖放</DropZone>}
    </Modal>
  );
};
