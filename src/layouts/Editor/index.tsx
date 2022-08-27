// @ts-nocheck
import React from 'react'
import { useToggle } from '@/hooks'
import { LeftOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export default ({ slots: { header, main, footer }, zoom, isPreview = true, exit }) => {
  const [panelCollapsed, togglePanelCollapsed] = useToggle(false)

  return (
    <div className={`${styles.layout} ${isPreview ? styles.preview : ''} ${panelCollapsed ? styles.collapsed : ''}`}>
      <div className={styles.header}>{header}</div>
      <div className={styles.main}>
        <div className={styles.left}>
          {main.left}
          <span className={styles.collapse_btn} onClick={togglePanelCollapsed}>
            <LeftOutlined rotate={panelCollapsed ? 180 : 0} />
          </span>
        </div>
        <div className={styles.content}>{main.content}</div>
      </div>
      {/* <div className={styles.footer}>{footer}</div> */}
      <span className={styles.exit} onClick={exit}>退出</span>
    </div>
  )
}