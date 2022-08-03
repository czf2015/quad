import React from 'react'
import Form from '@/components/Form'
import { formProps } from './config'

export const DataConfigPanel = ({ id, content: initialValues }) => {
  return (
    <Form
      initialValues={initialValues}
      {...formProps}
    />
  )
}