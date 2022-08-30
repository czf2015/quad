import React from 'react'
import { Button } from '@/plugins/ui'
import { useFormModal } from '@/hooks'
import { PlusOutlined } from '@ant-design/icons'
import { formProps } from './config'

export const Create = ({ disabled, onFinish }) => {
  const [open, formModal] = useFormModal({ title: '新增页面', onFinish, ...formProps })

  return (
    <>
      <Button type="text" disabled={disabled} onClick={open} icon={<PlusOutlined />} style={{ color: 'var(--quad-white-color)' }}>新增</Button>
      {formModal}
    </>
  )
}