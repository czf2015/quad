import React, { useState } from 'react'
import { Modal } from '@/plugins/ui'
import Form from '@/components/Form'
import Button from '@/components/Button'
import { SaveOutlined } from '@ant-design/icons'
import { formProps } from './config'

export const Save = ({ save, value = { lang: 'zh', timezone: 'China Standard Time', width: 1440, height: 1080, keywords: ['低代码'], template: 0 } }) => {
  const [visible, setVisible] = useState(false)
  const open = () => {
    setVisible(true)
  }
  const handleOk = () => {
    setVisible(false)
    save()
  }
  const handleCancel = () => {
    setVisible(false)
  }

  return (
    <>
      <Button title="保存" onClick={open} icon={<SaveOutlined />} />
      <Modal title="保存页面" visible={visible} onOk={handleOk} onCancel={handleCancel} width={720} bodyStyle={{ height: 640, overflow: 'auto' }}>
        <Form initialValues={value} {...formProps} />
      </Modal>
    </>
  )
}