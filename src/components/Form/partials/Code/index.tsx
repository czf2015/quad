// @ts-nocheck
import React, { useState } from 'react'
import { Input, Code } from '@/plugins/ui'

export default ({ value }) => {
  const [inputValue, setInputValue] = useState(value)

  const handleChange = (editor: any, data: any, value: string) => {
    setInputValue(value)
  }

  return (
    <div>
      <Input value={inputValue} style={{ display: 'none' }} />
      <Code
        value={inputValue}
        height='150px'
        // 设置尺寸
        onChange={handleChange}
        onBeforeChange={(editor: any, data: any, value: string) => { }}
      />
    </div>
  )
}