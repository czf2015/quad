import React from 'react'
import { Form, Button, message } from '@/plugins/ui'
import FormList from '@/components/Form/partials/List'
import TabsPanel from '@/components/TabsPanel'
import { tabList } from './config'

export const InteractConfigPanel = ({ id, updateEntity, ...interact }) => {
  const handleSubmit = (values) => {
    console.log({ id, values })
    updateEntity(id, values)
    message.success('已提交变更！')
  }

  const tabs = tabList.map(({ key, tab, schema }) => {
    return {
      tab,
      key,
      content: (
        <Form
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