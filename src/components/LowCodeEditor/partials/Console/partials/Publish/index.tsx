import React, { useState } from 'react'
import { Button, Result, Modal } from '@/plugins/ui'
import { useFormModal, useToggle } from '@/hooks'
import { FileTextOutlined } from '@ant-design/icons'
import { formProps } from './config'

export const Publish = ({ initialValues, publish }) => {
  const [visible, toggleVisible] = useToggle(false)
  const [path, setPath] = useState(initialValues?.path)
  const view = () => {
    window.open(path, '_blank')
  }
  const generatePublishResult = ({ status = 'success', title = '发布成功', version = '', remark = '', extra = [
    <Button type="primary" key="console" onClick={view}>
      查看
    </Button>,
    <Button onClick={toggleVisible}>关闭</Button>,
  ], err } = {}) => {
    return {
      status,
      title,
      subTitle: <>
        <p>版本号：{version}，备注：{remark}</p>
        <p style={{ display: status == 'success' ? 'none' : 'block', color: 'red' }}>{err?.message}</p>
      </>,
      extra
    }
  }
  const [publishResult, setPublishResult] = useState(generatePublishResult())
  const onFinish = values => publish(values)
    .then(res => {
      toggleVisible()
      setPublishResult(generatePublishResult(values))
      setPath(values?.path)
    })
    .catch(err => {
      toggleVisible()
      setPublishResult(generatePublishResult({ status: 'error', title: '发布失败', extra: <Button onClick={toggleVisible}>关闭</Button>, err, ...values }))
    })

  const [open, formModal] = useFormModal({ title: '发布页面', initialValues, onFinish, bodyStyle: { height: 200 }, ...formProps })

  return (
    <>
      <Button type="text" onClick={open} icon={<FileTextOutlined />}>发布</Button>
      {formModal}
      <Modal visible={visible} closable={false} footer={null}>
        <Result
          {...publishResult}
        />
      </Modal>
    </>
  )
}