import React, { useEffect, useState } from 'react'
import { Radio } from 'antd'
// import Form from '@/components/Form'
// import { formItems } from './mock'
import { Handlers, Binds } from './partials'
import styles from './index.module.less'


export const InteractConfigPanel = ({ id, content }) => {
  useEffect(() => {
    // content?.handlers.forEach(({ id, type, handle }) => {
    //   window.$eventBus.on(type, (payload) => handle(payload))
    // })

    // Object.keys(content.binds).forEach(bindKey => {
    //   content.binds[bindKey].forEach(msg => {
    //     window.$eventBus.emit(msg.type, msg)
    //   })
    // })

    // return () => content?.handlers.forEach(({ id, type, handle, payload, description }) => {
    //   window.$eventBus.off(type, () => handle(payload))
    // })
  }, [])

  const [value, setValue] = useState('handlers')
  const onChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <>
      <div className={styles.center}>
        <Radio.Group value={value} onChange={onChange} style={{ marginBottom: 16 }}>
          <Radio.Button value="binds">事件绑定</Radio.Button>
          <Radio.Button value="handlers">事件处理</Radio.Button>
        </Radio.Group>
      </div>
      <div className={styles.scroll}>
        {value == 'handlers' ? <Handlers /> : <Binds />}
      </div>
    </>
  )
}