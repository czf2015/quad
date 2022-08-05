// @ts-nocheck
import React, { useState } from 'react'
import { Code, Form } from '@/plugins/ui'

export default ({ name, value, }) => {
  const form = Form.useFormInstance()
  const [inputValue, setInputValue] = useState(value)

  const handleChange = (editor: any, data: any, value: string) => {
    setInputValue(value)
    form?.setFieldsValue?.({ [name]: value })
  }

  return (
    <Code
      value={inputValue}
      onChange={handleChange}
      height='150px'
    />
  )
}