// @ts-nocheck
import React from 'react'
import { UndoOutlined, RedoOutlined, CameraOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export const Restore = ({ undo, redo, stage }) => {
  return (
    <div className={styles.restore}>
      <UndoOutlined title="撤销" onClick={undo} />
      <RedoOutlined title="重做" onClick={redo} />
      <CameraOutlined title="暂存" onClick={stage} />
    </div>
  )
}