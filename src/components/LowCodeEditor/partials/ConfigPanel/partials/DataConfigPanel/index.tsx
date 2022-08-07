import React from 'react'
import { message } from '@/plugins/ui'
import Form from '@/components/Form'
import { formProps } from './config'

const mock = {
  type: 0,
  method: 'post',
  url: "/api/mock",
  params: {
    offset: 0,
    limit: 10,
  },
  data: `{
  "title": "标题",
  "description": "描述",
  "params": {
    "id": 1
  }
}`,
  preprocess: "(res) => {\n  console.log(res)\n  return res.data\n}",
}

export const DataConfigPanel = ({ id, data: initialValues = mock, updateEntity }) => {
  const handleSubmit = (data) => {
    console.log(data)
    updateEntity(id, { data })
    message.success('已提交变更！')
  }
  return (
    <Form
      initialValues={initialValues}
      {...formProps}
      onFinish={handleSubmit}
    />
  )
}