import React from 'react'
import { Form, Button, message } from '@/plugins/ui'
import FormList from '@/components/Form/partials/List'
import TabsPanel from '@/components/TabsPanel'
import { tabList } from './config'

const interact = {
  binds: [
    {
      title: "",
      target: "", //
      event: "onClick", // 下拉
      // id: "", // 组件id, 自动获取
      type: undefined, // 下拉选择
      // payload: '', // 自动获取
      description: "", // ...
      enable: true,
    },
  ],
  handlers: [
    {
      title: "",
      id: "", // 非必填
      type: "",
      enable: false,
      handle: `(params) => {
        console.log(params)
      }`,
    },
  ],
}

export const InteractConfigPanel = ({  id, interact: initialValues = interact, updateEntity }) => {
  const handleSubmit = (interact) => {
    console.log(interact)
    updateEntity(id, { interact })
    message.success('已提交变更！')
  }

  const tabs = tabList.map(({ key, tab, schema }) => {
    return {
      tab,
      key,
      content: <FormList name={key} list={schema} />
    }
  })

  return (
    <Form
      initialValues={initialValues}
      layout="vertical"
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24
      }}
      onFinish={handleSubmit}
    >
      <TabsPanel tabs={tabs} defaultActiveKey="handlers">
        <Form.Item wrapperCol={{ span: 6, offset: 18 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </TabsPanel>
    </Form>
  )
}