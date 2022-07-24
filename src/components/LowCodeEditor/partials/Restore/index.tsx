import React from 'react'
import { UndoOutlined, RedoOutlined, CameraOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export const Restore = () => {
  return (
    <div className={styles.restore}>
      <UndoOutlined title="撤销" />
      <RedoOutlined title="重做" />
      <CameraOutlined title="缓存" />
    </div>
  )
}