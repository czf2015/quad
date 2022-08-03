import React from 'react'
import { Form } from '@/plugins/ui'
import FormList from '@/components/Form/partials/List'
import TabsPanel from '@/components/TabsPanel'
import { tabList } from './config'

export const InteractConfigPanel = ({ content: initialValues }) => {
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
    >
      <TabsPanel tabs={tabs} defaultActiveKey="handlers" />
    </Form>
  )
}