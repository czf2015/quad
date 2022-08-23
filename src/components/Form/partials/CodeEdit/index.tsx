// @ts-nocheck
import React, { useRef } from 'react'
import { Code } from '@/plugins/ui'

export default ({ value, onChange }) => {
  const inputValueRef = useRef(value)
  const handleChange = (editor: any, data: any, value: string) => {
    inputValueRef.current = value
  }
  const handleBlur = (editor: any, data: any, value: string) => {
    onChange?.(inputValueRef.current)
  }

  return (
    <Code
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      height='150px'
    />
  )
}