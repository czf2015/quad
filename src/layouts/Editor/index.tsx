// @ts-nocheck
import React from 'react'
import { useToggle } from '@/hooks'
import { LeftOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export default ({ slots: { header, left, content, footer }, zoom, isPreview = true, exit, page }) => {
  const [panelCollapsed, togglePanelCollapsed] = useToggle(false)

  return (
    <div className={`${styles.layout} ${isPreview ? styles.preview : ''} ${panelCollapsed ? styles.collapsed : ''}`}>
      <div className={styles.header}>{header}</div>
      <div className={styles.left}>
        {left}
        <span className={styles.collapse_btn} onClick={togglePanelCollapsed}>
          <LeftOutlined rotate={panelCollapsed ? 180 : 0} />
        </span>
      </div>
      <div className={styles.content} style={{ width: isPreview ? page?.width : undefined }}>
        <div className={styles.scale} style={{ transform: isPreview ? undefined : `scale(${zoom})` }}>{content}</div>
      </div>
      {/* <div className={styles.footer}>{footer}</div> */}
      <span className={styles.exit} onClick={exit}>退出</span>
    </div>
  )
}