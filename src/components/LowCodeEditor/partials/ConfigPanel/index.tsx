// @ts-nocheck
import React from 'react'
import { Tabs } from 'antd'
import styles from './index.module.less'

const { TabPane } = Tabs

export const ConfigPanel = ({ name, id, pid, title = 'ConfigPanel', }) => {
  return (
    <div className={styles.panel}>
      <Tabs defaultActiveKey="Widgets" style={{ width: 216, height: '100%' }} centered>
        <TabPane tab="样式" key="style">
        </TabPane>
        <TabPane tab="数据" key="data">
        </TabPane>
        <TabPane tab="交互" key="interact">
        </TabPane>
      </Tabs>
    </div>
  )
}