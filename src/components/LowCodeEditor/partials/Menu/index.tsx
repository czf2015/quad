import React from 'react'
import Button from '@/components/Button'
import { Create, Open } from './partials'
import { CopyOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export const Menu = ({ mode = 0, replace, open, create, }) => {
  const isEditMode = mode == 2

  return (
    <div className={styles.menu}>
      <Open disabled={isEditMode} />
      <Create disabled={isEditMode} create={create} />
      <Button title="模板" disabled={!isEditMode} onClick={replace} icon={<CopyOutlined />} />
    </div>
  )
}