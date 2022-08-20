import React from 'react'
import { InputNumber } from 'antd'
import styles from './index.module.less'

export default ({ value, onChange, ...attrs }) => {
  return (
    <InputNumber className={styles.input_digital} value={value} onChange={onChange} {...attrs} />
  )
}