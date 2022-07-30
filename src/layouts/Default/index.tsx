// @ts-nocheck
import React from 'react'
import { useResponsive } from '@/hooks'
import styles from './index.module.less'

export default ({ slots: { header, main, footer }, zoom }) => {
  const { left, content, right } = main
  // const rootRef = useResponsive({ width: 1920, height: 1080 }, false)

  return (
    <div className={styles.layout}/*  ref={rootRef} */>
      <div className={styles.header}>{header}</div>
      <div className={styles.main}>
        <div className={styles.left}>{left}</div>
        <div className={styles.content} style={{ transform: `scale(${zoom})` }}>{content}</div>
        <div className={styles.right}>{right}</div>
      </div>
      <div className={styles.footer}>{footer}</div>
    </div>
  )
}