import React from 'react'
import { InputNumber } from 'antd'
import styles from './index.module.less'

export default ({ label, value, onChange, ...attrs }) => {
  return (
    <div className={styles.input_digital}>
      <label>{label}</label>
      <InputNumber value={value} onChange={onChange} {...attrs} />
    </div>
  )
}