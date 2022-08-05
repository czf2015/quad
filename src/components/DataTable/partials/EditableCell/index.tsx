// @ts-nocheck
import React, { useState } from 'react'
import { Input, InputNumber, Switch, Select, Rate, DatePicker, TimePicker } from '@/plugins/ui'
import Upload from '@/components/Form/partials/Upload'
import Tags from '@/components/Form/partials/Tags'
// import { renderTags } from '@/components/DataTable/render'


export const EditableCell = ({ type = 'string', value = '', options = [], action, mode = 'multiple', allowClear }) => {
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
      return editMode == 1 ? <Input value={inputValue} onChange={handleChange} onBlur={handleBlur} /> : <div onClick={edit}>{inputValue}</div>
    case 'number':
      return editMode == 1 ? <InputNumber value={inputValue} onChange={handleChange} onBlur={handleBlur} /> : <div onClick={edit}>{inputValue}</div>
    case 'select':
      return editMode == 1 ? <Select mode={mode} options={options} value={inputValue} onChange={handleChange} onBlur={handleBlur} /> : <div onClick={edit}>{inputValue}</div>
    case 'date':
      return editMode == 1 ? <DatePicker value={inputValue} onChange={(date, dateString) => {
        console.log(date, dateString);
        setInputValue(date)
      }} onBlur={handleBlur} /> : <div onClick={edit}>{inputValue}</div>
    case 'time':
      return editMode == 1 ? <TimePicker value={inputValue} onChange={(time: moment, timeString: string) => {
        console.log(time, timeString);
        setInputValue(time)
      }} minuteStep={15} secondStep={10} onBlur={handleBlur} /> : <div onClick={edit}>{inputValue}</div>;
    case 'boolean':
      return <Switch checked={inputValue} onChange={handleChange} onBlur={handleBlur} />
    case 'tags':
      // return editMode == 1 ? <Select mode="tags" options={options} value={inputValue} onChange={handleChange} onBlur={handleBlur} /> : <div onClick={edit}>{renderTags(value)}</div>
      return <Tags checked={inputValue} options={options} onChange={setInputValue} />
    case 'rating':
      return <Rate value={inputValue} onChange={setInputValue} allowClear={allowClear} />
    case 'file':
      return <Upload action={action} fileList={inputValue} />
    default:
      break
  }
}