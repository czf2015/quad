// @ts-nocheck
import React from 'react'
import { Code } from '@/plugins/ui'

export default ({ value, onChange }) => {
  const handleChange = (editor: any, data: any, value: string) => {
    onChange(value)
  }

  return (
    <Code
      value={value}
      onChange={handleChange}
      height='150px'
    />
  )
}