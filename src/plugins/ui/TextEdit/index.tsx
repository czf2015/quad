import React, { useState, useEffect, useRef } from 'react'
import { Input } from 'antd'
import { useToggle } from '@/hooks'
import { EditOutlined, EnterOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export const TextEdit = ({ text }) => {
  const ref = useRef()
  const [inputValue, setInputValue] = useState(text)
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
    <>
      <Input size="small" ref={ref} style={{ width: 160, display: contentEditable ? '' : 'none', border: 'none', outline: '1px solid #40a9ff' }} value={inputValue} onChange={handleChange} onBlur={handleBlur} allowClear />
      <div style={{ display: contentEditable ? 'none' : 'inline-block' }} >
        <span>{inputValue}</span>
        <EditOutlined className={styles.edit_btn} onClick={handleEdit} />
      </div>
    </ >
  )
}