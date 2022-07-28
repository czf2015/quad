// @ts-nocheck
import React from 'react'
import { Tabs } from 'antd'

const { TabPane } = Tabs

export const ConfigPanel = ({ name, id, pid, title = 'ConfigPanel', }) => {
  return (
    <Tabs defaultActiveKey="Widgets" style={{ height: '100%', background: '#fff' }} centered>
      <TabPane tab="样式" key="style">
      </TabPane>
      <TabPane tab="数据" key="data">
      </TabPane>
      <TabPane tab="交互" key="interact">
      </TabPane>
    </Tabs>
  )
}