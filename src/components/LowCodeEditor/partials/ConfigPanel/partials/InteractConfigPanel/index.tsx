import React from 'react'
import { Form, Button, message } from '@/plugins/ui'
import FormList from '@/components/Form/partials/List'
import TabsPanel from '@/components/TabsPanel'

export const InteractConfigPanel = ({ id, updateEntity, meta = { }, ...interact }) => {
  const handleSubmit = (values) => {
    updateEntity(id, values)
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
          options: meta?.binds || [],
          rules: [{ required: true, message: "请选择绑定对象！" }],
          type: "Select",
          placeholder: "请选择绑定对象",
        },
        {
          name: "event",
          label: "事件类型",
          type: "Select",
          options: [
            { label: "单击", value: "click" },
            { label: "右键", value: "contextmenu" },
            { label: "鼠标移入", value: "mouseenter" },
            { label: "鼠标移出", value: "mouseleave" },
            { label: "鼠标悬动", value: "mouseover" },
          ],
        },
        {
          name: "type",
          label: "消息类型",
          type: "Text",
          rules: [{ required: true, message: "请输入消息类型！" }],
          options: [
            { label: "OPEN_MODAL", value: "OPEN_MODAL" },
            { label: "OPEN_DRAWER", value: "OPEN_DRAWER" },
            { label: "MESSAGE", value: "MESSAGE" },
          ],
          placeholder: '请输入消息类型！'
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
          rules: [{ required: true, message: "请输入消息类型！" }],
          type: "Input",
          placeholder: "请输入消息类型",
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