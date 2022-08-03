// @ts-nocheck
import React from 'react'
import { useResponsive } from '@/hooks'
import styles from './index.module.less'

export default ({ slots: { header, main, footer }, zoom }) => {
  // const ref = useResponsive({ width: 1920, height: 1080 }, false)

  return (
    <div className={styles.layout}/*  ref={ref} */>
      <div className={styles.header}>{header}</div>
      <div className={styles.main}>
        <div className={styles.left}>{main.left}</div>
        <div className={styles.content} style={{ transform: `scale(${zoom})`, width: 1440 / zoom, height: `calc(100% / ${zoom})` }}>{main.content}</div>
        <div className={styles.right}>{main.right}</div>
      </div>
      {/* <div className={styles.footer}>{footer}</div> */}
    </div>
  )
}