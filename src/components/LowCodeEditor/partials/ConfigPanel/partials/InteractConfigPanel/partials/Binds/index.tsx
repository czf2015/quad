import React from 'react'
import { Form, Input, Select, TextEdit } from '@/plugins/ui'
import { DeleteOutlined, HolderOutlined, PlusOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export const Bind = ({ description = '名称' }) => {
  return (
    <div className={styles.handler}>
      <HolderOutlined className={styles.holder_btn} />
      <DeleteOutlined className={styles.delete_btn} />
      <h4 className={styles.title}>
        <TextEdit text={description} />
      </h4>
      <Form
        initialValues={{ id: 3, type: 'SELECT_TIME', handle: `(payload) => console.log(payload)` }}
        layout="vertical"
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24
        }}
      >
        <Form.Item label="绑定对象：">
          <Select name="target" />
        </Form.Item>
        <Form.Item label="事件类型：">
          <Select name="event" />
        </Form.Item>
        <Form.Item label="消息类型：" required>
          <Select name="type" options={[]} required />
        </Form.Item>
        <Form.Item label="描述说明：">
          <Input.TextArea name="description" />
        </Form.Item>
      </Form>
      <PlusOutlined className={styles.add_btn} />
    </div>
  )
}

export const Binds = () => {
  return (
    <div className={styles.handlers}>
      <PlusOutlined className={styles.add_btn} />
      <Bind />
      <Bind />
      <Bind />
    </div>
  )
}