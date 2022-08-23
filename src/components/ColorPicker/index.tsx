import React, { useEffect, useState } from 'react'
import { Input } from '@/plugins/ui'
import { ChromePicker as ColorPicker } from 'react-color'
import { useVisible, usePropsState } from '@/hooks'
import styles from './index.module.less'

export default ({ value = 'blue', onChange }) => {
  const { visible, open, close } = useVisible(false)

  const [color, setColor] = usePropsState(value)
  const handleChange = (e) => {
    setColor(e.target.value)
  }
  const handleBlur = (e) => {
    onChange?.(e.target.value)
  }
  const handleColorChange = ({ hex }) => {
    onChange?.(hex)
    setColor(hex)
  }

  return (
    <div className={styles.color_picker}>
      <span className={styles.effect} style={{ background: color }} onClick={open}></span>
      <Input className={styles.input} value={color} onChange={handleChange} onBlur={handleBlur} size="small" />

      <div className={styles.popover} style={{ display: visible ? 'block' : 'none' }}>
        <div className={styles.cover} onClick={close} />
        <ColorPicker color={color} onChange={handleColorChange} />
      </div>
    </div>
  )
}