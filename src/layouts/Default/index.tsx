// @ts-nocheck
import React from 'react'
import { /* useResponsive,  */useToggle } from '@/hooks'
import { LeftOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export default ({ slots: { header, main, footer }, zoom, isPreview = true, exit }) => {
  // const ref = useResponsive({ width: 1920, height: 1080 }, false)
  const [leftPanelCollapsed, toggleLeftPanelCollapsed] = useToggle(false)

  return (
    <div className={`${styles.layout} ${isPreview ? styles.preview : ''} ${leftPanelCollapsed ? styles.collapsed : ''}`}/*  ref={ref} */>
      <div className={styles.header}>{header}</div>
      <div className={styles.main}>
        <div className={styles.left}>{main.left}</div>
        <div className={styles.content} /* style={{ transform: `scale(${zoom})`, width: 1440 / zoom, height: `calc(100% / ${zoom})` }} */>{main.content}</div>
        <div className={styles.right}>
          <span className={`${styles.collapse_btn} quad-circle`} onClick={toggleLeftPanelCollapsed}>
            <LeftOutlined rotate={leftPanelCollapsed ? 180 : 0} />
          </span>
          {main.right}
        </div>
      </div>
      {/* <div className={styles.footer}>{footer}</div> */}
      <span className={styles.exit} onClick={exit}>退出</span>
    </div>
  )
}