import React from 'react'
import { Form } from '@/plugins/ui'
import TabsPanel from '@/components/TabsPanel'
import FormList from '@/components/Form/partials/List'
import { tabList } from './config'

export const InteractConfigPanel = ({ initialValues }) => {
  const tabs = tabList.map(({ key, tab, list }) => {
    return {
      tab,
      key,
      content: <FormList name={key} list={list} />
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