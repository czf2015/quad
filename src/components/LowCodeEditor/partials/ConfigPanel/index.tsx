// @ts-nocheck
import React from 'react'
import styles from './index.module.less'

export const ConfigPanel = ({ name, id, pid, title = 'ConfigPanel',}) => {
  return (
    <div className={styles.panel}>{title}</div>
  )
}