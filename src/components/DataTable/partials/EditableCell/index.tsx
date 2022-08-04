import React, { useState } from 'react'
import { Input, InputNumber } from '@/plugins/ui'

export const EditableCell = ({ type = 'string', value, }) => {
  const [editMode, setEditMode] = useState(0)
  const edit = () => {
    setEditMode(1)
  }

  const [inputValue, setInputValue] = useState(value)
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  const handleBlur = () => {
    setEditMode(0)
  }

  switch (type) {
    case 'string':
      return editMode == 1 ? <Input value={inputValue} onChange={handleChange} onBlur={handleBlur} /> : <span onClick={edit}>{value}</span>
    case 'number':
      return editMode == 1 ? <InputNumber value={inputValue} onChange={handleChange} onBlur={handleBlur} /> : <span onClick={edit}>{value}</span>
  }
}