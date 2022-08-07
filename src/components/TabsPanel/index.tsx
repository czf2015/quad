import React, { useState } from 'react'
import { Radio } from '@/plugins/ui'
import styles from './index.module.less'

export default ({ tabs, defaultActiveKey = 0, style = { marginTop: -12, height: 'calc(100vh - 124px)' }, children }) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey)
  const onChange = (e) => {
    setActiveKey(e.target.value)
  }
  return (
    <div className={styles.container} style={style}>
      <div className={styles.tabs}>
        <Radio.Group value={activeKey} onChange={onChange}>
          {tabs.map(({ tab, key }) => <Radio.Button value={key} key={key}>{tab}</Radio.Button>)}
        </Radio.Group>
      </div>
      <div className={styles.panel}>
        {tabs.map(({ content, key }) => <div style={{ display: key == activeKey ? 'block' : 'none' }} key={key}>{content}</div>)}
        {children}
      </div>
    </div >
  )
}