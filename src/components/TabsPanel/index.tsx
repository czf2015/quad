import React, { useState } from 'react'
import { Radio } from '@/plugins/ui'
import styles from './index.module.less'

export default ({ tabs, defaultActiveKey = 0, style }) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey)
  const onChange = (e) => {
    setActiveKey(e.target.value)
  }

  return (
    <div className={styles.container} style={{ marginTop: -12, height: 'calc(100vh - 124px)' }}>
      <div className={styles.tabs}>
        <Radio.Group value={activeKey} onChange={onChange}>
          {tabs.map(({ tab }, idx) => <Radio.Button value={idx} key={idx}>{tab}</Radio.Button>)}
        </Radio.Group>
      </div>
      <div className={styles.panel}>
        {tabs.map(({ content }, idx) => (
          <div style={{ display: idx == activeKey ? '' : 'none' }} key={idx}>
            {content}
          </div>
        ))}
      </div>
    </div>
  )
}