// @ts-nocheck
import React from 'react'
import Button from '@/components/Button'
import { UndoOutlined, RedoOutlined, CameraOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export const Restore = ({ mode = 0, undo, redo, stage }) => {
  const isEditMode = mode == 2

  return isEditMode ? (
    <div className={styles.restore}>
      <Button tip="撤销" onClick={undo} type="text" icon={<UndoOutlined />} />
      <Button tip="重做" onClick={redo} type="text" icon={<RedoOutlined />} />
      <Button tip="暂存" onClick={stage} type="text" icon={<CameraOutlined />} />
    </div>
  ) : null
}