// @ts-nocheck
import React from 'react'
import Button from '@/components/Button'
import { LayoutOutlined, UndoOutlined, RedoOutlined, CameraOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export const Restore = ({ visible, prev = 0, next = 0, renew, undo, redo, stage }) => {
  return visible ? (
    <div className={styles.restore}>
      <Button tip="恢复" onClick={renew} type="text" icon={<LayoutOutlined />} />
      <Button tip="撤销" disabled={prev == 0} onClick={undo} type="text" icon={<UndoOutlined />} />
      <Button tip="重做" disabled={next == 0} onClick={redo} type="text" icon={<RedoOutlined />} />
      <Button tip="暂存" onClick={stage} type="text" icon={<CameraOutlined />} />
    </div>
  ) : null
}