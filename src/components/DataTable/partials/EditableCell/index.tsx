import React, { useState } from 'react'
import { Input, InputNumber, Switch, Select } from '@/plugins/ui'
import Upload from '@/components/Form/partials/Upload'
import { renderTags } from '@/components/DataTable/render'

export const EditableCell = ({ type = 'string', value = '', options = [], action }) => {
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
      return editMode == 1 ? <Input value={inputValue} onChange={handleChange} onBlur={handleBlur} /> : <div onClick={edit}>{value}</div>
    case 'number':
      return editMode == 1 ? <InputNumber value={inputValue} onChange={handleChange} onBlur={handleBlur} /> : <div onClick={edit}>{value}</div>
    case 'boolean':
      return <Switch checked={inputValue} onChange={handleChange} onBlur={handleBlur} />
    case 'tags':
      return editMode == 1 ? <Select options={options} value={inputValue} onChange={handleChange} onBlur={handleBlur} /> : <div onClick={edit}>{value}</div>
    case 'rating':
      return editMode == 1 ? <Select options={options} value={inputValue} onChange={handleChange} onBlur={handleBlur} /> : <div onClick={edit}>{value}</div>
    case 'multiple':
      return editMode == 1 ? <Select options={options} value={inputValue} onChange={handleChange} onBlur={handleBlur} /> : <div onClick={edit}>{value}</div>
    case 'file':
      return <Upload action={action} fileList={value} /> 
  }
}