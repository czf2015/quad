import React, { useState } from 'react'
import { Modal } from '@/plugins/ui'
import Form from '@/components/Form'
import Button from '@/components/Button'
import { PlusOutlined } from '@ant-design/icons'
import { formProps } from './config'

export const Create = ({ disabled, create, value = { lang: 'zh', timezone: 'China Standard Time', width: 1440, height: 1080, keywords: ['低代码'], template: 0 } }) => {
  const [visible, setVisible] = useState(false)
  const open = () => {
    setVisible(true)
  }
  const handleOk = () => {
    setVisible(false)
    create()
  }
  const handleCancel = () => {
    setVisible(false)
  }

  return (
    <>
      <Button title="新增" disabled={disabled} onClick={open} icon={<PlusOutlined />} />
      <Modal title="新增页面" visible={visible} onOk={handleOk} onCancel={handleCancel} width={720} bodyStyle={{ height: 640, overflow: 'auto' }}>
        <Form initialValues={value} footer={null} {...formProps} />
      </Modal>
    </>
  )
}