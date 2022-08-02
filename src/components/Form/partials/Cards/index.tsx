import React from 'react'
import { Form, Input, Code, TextEdit, Switch } from '@/plugins/ui'
import { useToggle } from '@/hooks'
import { DeleteOutlined, HolderOutlined, PlusOutlined, RightOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export const Card = ({ description = '名称', children }) => {
  const [collapsed, toggleCollapsed] = useToggle(false)
  const [enableState, toggleEnableState] = useToggle(true)

  return (
    <div className={`${styles.handler} ${enableState ? styles.enabled : ''}`}>
      <div className={`${styles.insert_btn} quad-circle`}><PlusOutlined /></div>
      <HolderOutlined className={styles.holder_btn} />
      <DeleteOutlined className={styles.delete_btn} />
      <h4 className={styles.title}>
        <TextEdit text={description} />
      </h4>
      <div className={collapsed ? styles.collapsed : ''}>
        {children}
      </div>
      <div className={styles.enable_btn}>
        <Switch size="small" checked={enableState} onChange={toggleEnableState} checkedChildren="启用" unCheckedChildren="停用" defaultChecked />
      </div>
      <span className={`${styles.collapse_btn} quad-circle`}><RightOutlined rotate={collapsed ? 90 : -90} onClick={toggleCollapsed} className={styles.collapse_btn} /></span>
    </div>
  )
}

export default ({ children }) => {
  return (
    <div className={styles.handlers}>
      <Card>{children}</Card>
      <Card>{children}</Card>
      <Card>{children}</Card>
      <div className={styles.add_btn}><PlusOutlined /></div>
    </div>
  )
}