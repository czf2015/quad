import React from 'react'
import { Button } from '@/plugins/ui'
import { useFormModal } from '@/hooks'
import { SaveOutlined } from '@ant-design/icons'
import { formProps } from './config'

export const Save = ({ initialValues, onFinish }) => {
  const [open, formModal] = useFormModal({ title: '保存页面', initialValues, onFinish, ...formProps })

  return (
    <>
      <Button type="text" onClick={open} icon={<SaveOutlined />}>保存</Button>
      {formModal}
    </>
  )
}