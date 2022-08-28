import React from 'react'
import { Empty } from 'antd'
import Form from '@/components/Form'
import styles from './index.module.less'

export const CustomizeConfigPanel = ({ id, customize: initialValues, meta = { customize: [] }, updateEntity }) => {
  const handleSubmit = (customize) => {
    updateEntity(id, { customize })
    message.success('已提交变更！')
  }
  return (
    <div className={styles.customize_config_panel}>
      {meta?.customize?.length > 0 ? 
        <Form initialValues={initialValues} children={meta?.customize}  onFinish={handleSubmit} wrapperCol={{ span: 20 }} labelCol={{ span: 4 }} bodyStyle={{ padding: '0 8px'}} /> :
        <Empty />
      }
    </div>
  )
}
