import React from 'react'
import Form from '@/components/Form'

export const DataConfigPanel = ({ id, content }) => {
  return <Form initialValues={content} />
}