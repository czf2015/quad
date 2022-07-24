// @ts-nocheck
import React from 'react'
import styles from './index.module.less'

export default ({ slots: { header, main, footer } }) => {
  const { left, content, right } = main
  return (
    <div className={styles.layout}>
      <div className={styles.header}>{header}</div>
      <div className={styles.main}>
        <div className={styles.left}>{left}</div>
        <div className={styles.content}>{content}</div>
        <div className={styles.right}>{right}</div>
      </div>
      <div className={styles.footer}>{footer}</div>
    </div>
  )
}