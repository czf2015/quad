import React, { useState } from 'react'
import { Input } from 'antd'
import { useToggle } from '@/hooks'
import { EditOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export const TextEdit = ({ text }) => {
  const [inputValue, setInputValue] = useState(text)
  const [contentEditable, setContentEditable] = useToggle(false)

  const handleEdit = (e) => {
    setContentEditable(true)
  }
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  const handlePressEnter = (e) => {
    setContentEditable(false)
  }

  if (contentEditable) {
    return <Input style={{ width: 100 }} value={inputValue} onChange={handleChange} onPressEnter={handlePressEnter} onBlur={handlePressEnter} />
  }

  return (
    <>
      <span>{inputValue}</span>
      <EditOutlined className={styles.edit_btn} onClick={handleEdit} />
    </>
  )
}