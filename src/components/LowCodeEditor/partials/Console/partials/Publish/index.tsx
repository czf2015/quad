import React from 'react'
import { Button } from '@/plugins/ui'
import { useFormModal } from '@/hooks'
import { FileTextOutlined } from '@ant-design/icons'
import { formProps } from './config'

export const Publish = ({ initialValues, onFinish }) => {
  const [open, formModal] = useFormModal({ title: '发布页面', initialValues, onFinish, bodyStyle: { height: 120 }, ...formProps })

  return (
    <>
      <Button type="text" onClick={open} icon={<FileTextOutlined />}>发布</Button>
      {formModal}
    </>
  )
}