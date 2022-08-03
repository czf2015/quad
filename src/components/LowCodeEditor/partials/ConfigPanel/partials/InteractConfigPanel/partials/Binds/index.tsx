import React from 'react'
import { Form, Input, Select } from '@/plugins/ui'
import FormCards from '@/components/Form/partials/Cards'

export const Binds = ({ initialValues = { id: 3, type: 'SELECT_TIME', handle: `(payload) => console.log(payload)` }, }) => {
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
        <Form.Item label="绑定对象：">
          <Select name="target" size="small" />
        </Form.Item>
        <Form.Item label="事件类型：">
          <Select name="event" options={[{ label: '单击', value: 'onClick' }]} size="small" />
        </Form.Item>
        <Form.Item label="消息类型：" required>
          <Select mode="tags" options={[{ label: '打开弹窗', value: 'OPEN_DRAWER' }]} name="type" required size="small" />
        </Form.Item>
        <Form.Item label="描述说明：">
          <Input.TextArea name="description" size="small" />
        </Form.Item>
      </Form>
    </FormCards>
  )
}