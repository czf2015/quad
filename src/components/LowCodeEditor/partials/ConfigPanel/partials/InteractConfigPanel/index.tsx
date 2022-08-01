import React, { useEffect } from 'react'
import Form from '@/components/Form'
import { formItems } from './mock'

export const InteractConfigPanel = ({ id, content }) => {
  useEffect(() => {
    content?.handlers.forEach(({ id, type, handle }) => {
      window.$eventBus.on(type, (payload) => handle(payload))
    })

    Object.keys(content.binds).forEach(bindKey => {
      content.binds[bindKey].forEach(msg => {
        window.$eventBus.emit(msg.type, msg)
      })
    })

    // return () => content?.handlers.forEach(({ id, type, handle, payload, description }) => {
    //   window.$eventBus.off(type, () => handle(payload))
    // })
  }, [])



  return (
    <Form
      layout="vertical"
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24
      }}
      children={formItems}
    />
  )
}