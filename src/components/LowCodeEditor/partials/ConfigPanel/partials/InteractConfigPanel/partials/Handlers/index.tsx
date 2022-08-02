import React from 'react'
import { Form, Input, Code } from '@/plugins/ui'
import FormCards from '@/components/Form/Cards'


export const Handlers = ({ initialValues = { id: 3, type: 'SELECT_TIME', handle: `(payload) => console.log(payload)` }, }) => {
  return (
    <FormCards>
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
        <Form.Item label="消息类型：" required>
          <Input name="type" />
        </Form.Item>
        <Form.Item label="消息来源组件id：">
          <Input name="id" />
        </Form.Item>
        <Form.Item label="处理函数：">
          <Code value={initialValues.handle} />
        </Form.Item>
      </Form>
    </FormCards>
  )
}