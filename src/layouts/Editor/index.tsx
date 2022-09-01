// @ts-nocheck
import React, { useState } from 'react'
import { useToggle } from '@/hooks'
import { LeftOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export default ({ slots: { header, left, content, right, footer }, zoom, isPreview = true, exit, page }) => {
  const [panelCollapsed, setPanelCollapsed] = useState({ left: false, right: false })

  return (
    <div className={`${styles.layout} ${isPreview ? styles.preview : ''} ${panelCollapsed.left ? styles.panel_collapsed_left : ''} ${panelCollapsed.right ? styles.panel_collapsed_right : ''}`}>
      <div className={styles.header}>{header}</div>    
      <div className={`${styles.content} quad-scrollbar`} style={{ width: isPreview ? page?.width : undefined }}>
        <div className={styles.scale} style={{ transform: isPreview ? undefined : `scale(${zoom})` }}>{content}</div>
      </div>
      <div className={styles.left}>
        {left}
        <span className={styles.collapse_btn} onClick={() => setPanelCollapsed(panelCollapsed => ({ ...panelCollapsed, left: !panelCollapsed.left }))}>
          <LeftOutlined rotate={panelCollapsed ? 0 : 180} />
        </span>
      </div>
      <div className={styles.right}>
        {right}
        <span className={styles.collapse_btn} onClick={() => setPanelCollapsed(panelCollapsed => ({ ...panelCollapsed, right: !panelCollapsed.right }))}>
          <LeftOutlined rotate={panelCollapsed ? 0 : 180} />
        </span>
      </div>
      {/* <div className={styles.footer}>{footer}</div> */}
      <span className={styles.exit} onClick={exit}>退出</span>
    </div>
  )
}