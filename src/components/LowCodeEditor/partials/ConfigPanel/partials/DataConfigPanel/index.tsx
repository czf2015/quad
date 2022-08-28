import React from 'react'
import { message } from '@/plugins/ui'
import Form from '@/components/Form'
import { formProps } from './config'

export const DataConfigPanel = ({ id, dataSource: initialValues, updateEntity }) => {
  const handleSubmit = (dataSource) => {
    updateEntity(id, { dataSource })
    message.success('已提交变更！')
  }
  return (
    <Form
      initialValues={initialValues}
      bodyStyle={{ padding: '0 8px'}}
      {...formProps}
      onFinish={handleSubmit}
    />
  )
}