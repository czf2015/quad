import React, { useState, useEffect, useRef } from 'react'
import { Input, Form } from 'antd'
import { useToggle } from '@/hooks'
import { EditOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export default ({ name = 'title', value, ...attrs }) => {
  const ref = useRef()
  const [inputValue, setInputValue] = useState(value)
  const [contentEditable, setContentEditable] = useToggle(false)

  const handleEdit = () => {
    setContentEditable(true)
  }
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  const handleBlur = (e) => {
    setContentEditable(false)
  }

  useEffect(() => {
    if (contentEditable) {
      ref.current.focus()
    }
  }, [contentEditable])

  return (
    <Form.Item className={styles.input_edit} name={name} {...attrs}>
      <Input size="small" ref={ref} style={{ width: 160, display: contentEditable ? '' : 'none', border: 'none', outline: '1px solid #40a9ff' }} value={inputValue} onChange={handleChange} onBlur={handleBlur} allowClear />
      <div style={{ display: contentEditable ? 'none' : 'inline-block' }} >
        <span>{inputValue}</span>
        <EditOutlined className={styles.edit_btn} onClick={handleEdit} />
      </div>
    </Form.Item>
  )
}