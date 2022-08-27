import React from 'react'
import Button from '@/components/Button'
import { Create, Open } from './partials'
import { CopyOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export const Menu = ({ mode = 0, replace, open, create, service, }) => {
  const isEditMode = mode == 2

  return (
    <div className={styles.menu}>
      {isEditMode ? <Button type="text" title="模板" disabled={!isEditMode} onClick={replace} icon={<CopyOutlined />} /> : <><Open service={service} open={open} disabled={isEditMode} />
        <Create onFinish={create} disabled={isEditMode} /></>}
    </div>
  )
}