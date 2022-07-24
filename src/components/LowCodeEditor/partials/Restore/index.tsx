// @ts-nocheck
import React from 'react'
import Button from '@/components/Button'
import { UndoOutlined, RedoOutlined, CameraOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export const Restore = ({ undo, redo, stage }) => {
  return (
    <div className={styles.restore}>
      <Button title="撤销" onClick={undo} type="text" icon={<UndoOutlined />} />
      <Button title="重做" onClick={redo} type="text" icon={<RedoOutlined />} />
      <Button title="暂存" onClick={stage} type="text" icon={<CameraOutlined />} />
    </div>
  )
}