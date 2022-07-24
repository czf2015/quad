import React from 'react'
import Button from '@/components/Button'
import { CopyOutlined, FolderOpenOutlined, PlusOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export const Menu = ({ mode = 0, replace, open, create, }) => {
  const isEditMode = mode == 2

  return (
    <div className={styles.menu}>
      <Button title="打开" disabled={isEditMode} onClick={open} icon={<FolderOpenOutlined />} />
      <Button title="新增" disabled={isEditMode} onClick={create} icon={<PlusOutlined />} />
      <Button title="模板" disabled={!isEditMode} onClick={replace} icon={<CopyOutlined />} />
    </div>
  )
}