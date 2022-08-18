import React from 'react'
import { Form, Button, message } from '@/plugins/ui'
import FormList from '@/components/Form/partials/List'
import TabsPanel from '@/components/TabsPanel'
import { EVENT_OPTIONS, MESSAGE_OPTIONS } from '@/constants/OPTIONS'

export const InteractConfigPanel = ({ id, updateEntity, meta = {}, ...interact }) => {
  const handleSubmit = (values) => {
    updateEntity(id, values)
    console.log(values)
    message.success('已提交变更！')
  }

  const tabList = [
    {
      tab: "事件绑定",
      key: "binds",
      schema: [
        {
          name: "target",
          label: "绑定对象",
          options: meta?.binds,
          type: "Select",
          placeholder: "请选择绑定对象",
          rules: [{ required: true, message: "请选择绑定对象！" }],
        },
        {
          name: "event",
          label: "事件类型",
          type: "Select",
          options: EVENT_OPTIONS,
          rules: [{ required: true, message: "请选择事件类型！" }],
        },
        {
          name: "type",
          label: "消息类型",
          type: "Text",
          options: MESSAGE_OPTIONS,
          placeholder: '请输入消息类型！',
          rules: [{ required: true, message: "请输入消息类型！" }],
        },
        {
          name: "description",
          label: "描述说明",
          type: "TextArea",
        },
      ],
    },
    {
      tab: "事件处理",
      key: "handlers",
      schema: [
        {
          name: "type",
          label: "消息类型",
          type: "Text",
          options: MESSAGE_OPTIONS,
          placeholder: "请输入消息类型",
          rules: [{ required: true, message: "请输入消息类型！" }],
        },
        {
          name: "id",
          label: "消息来源组件id",
          type: "Input",
        },
        {
          name: "handle",
          label: "处理函数",
          type: "Code",
        },
      ],
    },
  ]

  const tabs = tabList.map(({ key, tab, schema }) => {
    return {
      tab,
      key,
      content: (
        <Form
          name={key}
          initialValues={{ [key]: interact[key] }}
          layout="vertical"
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24
          }}
          onFinish={handleSubmit}
        >
          <FormList name={key} list={schema} />
          <Form.Item wrapperCol={{ span: 6, offset: 18 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )
    }
  })

  return <TabsPanel tabs={tabs} defaultActiveKey="binds" />
}