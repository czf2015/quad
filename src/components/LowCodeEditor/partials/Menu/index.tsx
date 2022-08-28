import React from 'react'
import Button from '@/components/Button'
import { Create, Open } from './partials'
import { CopyOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export const Menu = ({ editable, replace, open, create, service, }) => {
  return (
    <div className={styles.menu}>
      {editable ? <Button type="text" title="模板" disabled onClick={replace} icon={<CopyOutlined />} /> : <><Open service={service} open={open} />
        <Create onFinish={create} /></>}
    </div>
  )
}