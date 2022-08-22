import React from 'react'
import Form from '@/components/Form'
import styles from './index.module.less'

export const CustomConfigPanel = ({ store, meta = { custom: [] } }) => {
  return (
    <div className={styles.custom_config_panel}>
      <Form children={meta?.custom} wrapperCol={{ span: 20 }} labelCol={{ span: 4 }} footer={null} />
    </div>
  )
}
