// @ts-nocheck
import React, { useState } from 'react'
import { Input, InputNumber, Switch, Select, Rate, DatePicker, TimePicker } from '@/plugins/ui'
import Upload from '@/components/Form/partials/Upload/ImageUpload'
import Tags from '@/components/Form/partials/Tags'
import { renderTags } from '@/components/DataTable/render'
import { Moment } from '@/plugins/moment'


export const EditableCell = ({ type = 'Text', value = '', options = [], action, mode = 'multiple', allowClear }) => {
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
    case 'Text':
      return editMode == 1 ? <Input value={inputValue} onChange={handleChange} onBlur={handleBlur} /> : <div onClick={edit}>{inputValue}</div>
    case 'Number':
      return editMode == 1 ? <InputNumber value={inputValue} onChange={setInputValue} onBlur={handleBlur} /> : <div onClick={edit}>{inputValue}</div>
    case 'Select':
      return editMode == 1 ? <Select mode={mode} options={options} value={inputValue} onChange={setInputValue} onBlur={handleBlur} /> : <div onClick={edit}>{renderTags(inputValue, options)}</div>
    case 'Date':
      return editMode == 1 ? <DatePicker value={Moment.normalize(inputValue)} onChange={(date, dateString) => {
        setInputValue(dateString)
      }} onBlur={handleBlur} allowClear={false} /> : <div onClick={edit}>{inputValue}</div>
    case 'Time':
      return editMode == 1 ? <TimePicker value={Moment.normalize(inputValue, 'HH:mm:ss')} onChange={(time: moment, timeString: string) => {
        setInputValue(timeString)
      }} minuteStep={15} secondStep={10} onBlur={handleBlur} allowClear={false} /> : <div onClick={edit}>{inputValue}</div>;
    case 'Switch':
      return <Switch checked={inputValue} onChange={setInputValue} onBlur={handleBlur} />
    case 'Tags':
      return <Tags checked={inputValue} options={options} onChange={setInputValue} />
    case 'Rate':
      return <Rate value={inputValue} onChange={setInputValue} allowClear={allowClear} />
    case 'Attachment':
      return <Upload action={action} fileList={inputValue} />
    default:
      break
  }
}