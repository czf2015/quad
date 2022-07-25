// @ts-nocheck
import React from 'react'
import Button from '@/components/Button'
import { DeleteOutlined, UndoOutlined, RedoOutlined, CameraOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export const Restore = ({ mode = 0, prev = 0, next = 0, restart, undo, redo, stage }) => {
  const isEditMode = mode == 2

  return isEditMode ? (
    <div className={styles.restore}>
      <Button tip="还原" onClick={restart} type="text" icon={<DeleteOutlined />} />
      <Button tip="撤销" disabled={prev == 0} onClick={undo} type="text" icon={<UndoOutlined />} />
      <Button tip="重做" disabled={next == 0} onClick={redo} type="text" icon={<RedoOutlined />} />
      <Button tip="暂存" onClick={stage} type="text" icon={<CameraOutlined />} />
    </div>
  ) : null
}