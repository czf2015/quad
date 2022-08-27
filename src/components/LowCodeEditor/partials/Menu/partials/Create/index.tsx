import React from 'react'
import { Button } from '@/plugins/ui'
import { useFormModal } from '@/hooks'
import { PlusOutlined } from '@ant-design/icons'
import { formProps } from './config'

export const Create = ({ disabled, onFinish }) => {
  const [open, formModal] = useFormModal({ title: '新增页面', onFinish, ...formProps })

  return (
    <>
      <Button type="text"/*  style={{ marginLeft: 8 }} */ disabled={disabled} onClick={open} icon={<PlusOutlined />}>新增</Button>
      {formModal}
    </>
  )
}