import React from 'react'
import { Modal, Button, Form } from '@/plugins/ui'
import CustomForm from '@/components/Form'

export default ({ title, visible, onOk, onCancel, width = 720, bodyStyle = { height: 640, overflow: 'auto' }, destroyOnClose = true, ...attrs }) => {
  const footer = (
    <Form.Item wrapperCol={{ offset: 16 }} style={{ marginTop: 8 }}>
      <Button onClick={onCancel}>
        取消
      </Button>
      <Button type="primary" htmlType="submit" style={{ marginLeft: 8 }}>
        确认
      </Button>
    </Form.Item>
  )
  
  return (
    <Modal title={title} visible={visible} onCancel={onCancel} width={width} footer={null} destroyOnClose={destroyOnClose} >
      <CustomForm footer={footer} onFinish={onOk} wrapperCol={{ span: 16 }} labelCol={{ span: 5 }} bodyStyle={bodyStyle}  {...attrs} />
    </Modal>
  )
}