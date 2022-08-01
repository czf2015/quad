import React, { useState } from 'react'
import { Form, Switch, Input, Textare, Button } from '@/plugins/ui'
import { useToggle } from '@/hooks'
import styles from './index.module.less'
import { DeleteOutlined, HolderOutlined, DownOutlined, PlusOutlined, MinusCircleOutlined, EditOutlined } from '@ant-design/icons'

export const Handler = ({ description = '名称' }) => {
  const [collapsed, toggleCollapsed] = useToggle(false)
  const [title, setTitle] = useState(description)
  const [contentEditable, setContentEditable] = useToggle(false)
  
  return (
    <div className={styles.handler}>
      <PlusOutlined className={styles.add_btn} />
      <DeleteOutlined className={styles.delete_btn} />
      <h4 className={styles.title}>
        <HolderOutlined className={styles.holder_btn} />
        <span>{title}</span>
        <EditOutlined className={styles.edit_btn} />
        <DownOutlined className={styles.open_btn} rotate={collapsed ? 180 : 0} onClick={toggleCollapsed} />
      </h4>
      <div className={collapsed ? styles.collapsed : ''} style={{ display: collapsed ? 'block' : 'none' }}>
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
          <Form.Item label="消息来源id">
            <Input name="id" />
          </Form.Item>
          <Form.Item label="消息类型" required>
            <Input name="type" />
          </Form.Item>
          <Form.Item label="处理函数">
            <Input.TextArea name="handle" />
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export const Handlers = () => {
  return (
    <div className={styles.handlers}>
      <h3>消息处理：</h3>
      <div>
        <Handler />
        <Handler />
        <Handler />
      </div>
    </div>
  )
}