import React from 'react'
import { Modal } from '@/plugins/ui'
import Form from '@/components/Form'

export default ({ title, value, visible, onOk, onCancel, width, bodyStyle = { height: 640, overflow: 'auto' }, children }) => {
  return (
    <Modal title={title} visible={visible} onOk={onOk} onCancel={onCancel} width={width} bodyStyle={bodyStyle}>
      <Form initialValues={value} children={children} />
    </Modal>
  )
}