import React, { useState, useEffect, useRef } from 'react'
import { Input } from 'antd'
import { useToggle } from '@/hooks'
import { EditOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export default ({ value, onChange, style, disabled, }) => {
  const ref = useRef()
  const [inputValue, setInputValue] = useState(value)
  const [editable, toggleEditable] = useToggle(false)

  const handleChange = (e) => {
    const newVal = e.target.value
    setInputValue(newVal)
    onChange?.(newVal)
  }

  useEffect(() => {
    if (editable) {
      ref.current.focus()
    }
  }, [editable])

  return (
    <div className={`${styles.text_wrapper} ${editable ? styles.editable : ''} ${disabled ? styles.disabled : ''}`} style={style}>
      <Input size="small" ref={ref} className={styles.input} value={inputValue} onChange={handleChange} onBlur={toggleEditable} allowClear />
      <div className={styles.text}>
        <span>{inputValue}</span>
        <EditOutlined className={styles.edit_btn} onClick={toggleEditable} />
      </div>
    </div>
  )
}