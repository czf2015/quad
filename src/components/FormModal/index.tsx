import React from 'react'
import { Modal } from '@/plugins/ui'
import Form from '@/components/Form'

export default ({ title, value, visible, onOk, onCancel, width = 720, bodyStyle = { height: 640, overflow: 'auto' }, destroyOnClose = true, children }) => {
  return (
    <Modal title={title} visible={visible} onOk={onOk} onCancel={onCancel} width={width} bodyStyle={bodyStyle} destroyOnClose={destroyOnClose}>
      <Form initialValues={value} children={children} wrapperCol={{ span: 16 }} labelCol={{ span: 5 }} />
    </Modal>
  )
}