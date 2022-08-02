import React from 'react'
import { Form, Input, Code, TextEdit } from '@/plugins/ui'
import { DeleteOutlined, HolderOutlined, PlusOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export const Handler = ({ description = '名称', initialValues = { id: 3, type: 'SELECT_TIME', handle: `(payload) => console.log(payload)` } }) => {

  return (
    <div className={styles.handler}>
      <HolderOutlined className={styles.holder_btn} />
      <DeleteOutlined className={styles.delete_btn} />
      <h4 className={styles.title}>
        <TextEdit text={description} />
      </h4>
      <Form
        initialValues={initialValues}
        layout="vertical"
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24
        }}
      >
        <Form.Item label="消息来源组件id：">
          <Input name="id" />
        </Form.Item>
        <Form.Item label="消息类型：" required>
          <Input name="type" />
        </Form.Item>
        <Form.Item label="处理函数：">
          <Code value={initialValues.handle} />
        </Form.Item>
      </Form>
      <PlusOutlined className={styles.add_btn} />
    </div>
  )
}

export const Handlers = () => {
  return (
    <div className={styles.handlers}>
      <PlusOutlined className={styles.add_btn} />
      <Handler />
      <Handler />
      <Handler />
    </div>
  )
}