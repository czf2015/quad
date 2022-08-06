// @ts-nocheck
import React, { useState } from 'react'
import { Input, InputNumber, Switch, Select, Rate, DatePicker, TimePicker } from '@/plugins/ui'
import Upload from '@/components/Form/partials/Upload'
import Tags from '@/components/Form/partials/Tags'
import { renderTags } from '@/components/DataTable/render'
import { Moment } from '@/plugins/moment'


export const EditableCell = ({ type = 'TEXT', value = '', options = [], action, mode = 'multiple', allowClear }) => {
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
    case 'TEXT':
      return editMode == 1 ? <Input value={inputValue} onChange={handleChange} onBlur={handleBlur} /> : <div onClick={edit}>{inputValue}</div>
    case 'NUMBER':
      return editMode == 1 ? <InputNumber value={inputValue} onChange={setInputValue} onBlur={handleBlur} /> : <div onClick={edit}>{inputValue}</div>
    case 'SELECT':
      return editMode == 1 ? <Select mode={mode} options={options} value={inputValue} onChange={setInputValue} onBlur={handleBlur} /> : <div onClick={edit}>{renderTags(inputValue, options)}</div>
    case 'DATE':
      return editMode == 1 ? <DatePicker value={Moment.normalize(inputValue)} onChange={(date, dateString) => {
        setInputValue(dateString)
      }} onBlur={handleBlur} allowClear={false} /> : <div onClick={edit}>{inputValue}</div>
    case 'TIME':
      return editMode == 1 ? <TimePicker value={Moment.normalize(inputValue, 'HH:mm:ss')} onChange={(time: moment, timeString: string) => {
        setInputValue(timeString)
      }} minuteStep={15} secondStep={10} onBlur={handleBlur} allowClear={false} /> : <div onClick={edit}>{inputValue}</div>;
    case 'ONOFF':
      return <Switch checked={inputValue} onChange={setInputValue} onBlur={handleBlur} />
    case 'TAGS':
      return <Tags checked={inputValue} options={options} onChange={setInputValue} />
    case 'RATE':
      return <Rate value={inputValue} onChange={setInputValue} allowClear={allowClear} />
    case 'ATTACHMENT':
      return <Upload action={action} fileList={inputValue} />
    default:
      break
  }
}