// @ts-nocheck
import React from 'react'
import { Tabs } from '@/plugins/ui'
import { StyleConfigPanel, DataConfigPanel, InteractConfigPanel } from './partials'
import { configTabsPanel } from '@/mock/configPanel'

const ConfigTabsPanelMap = {
  style: StyleConfigPanel,
  data: DataConfigPanel,
  interact: InteractConfigPanel,
}

const { TabPane } = Tabs

export const ConfigPanel = ({ name, id, pid, title = 'ConfigPanel', }) => {
  return (
    <Tabs defaultActiveKey="style" style={{ height: '100%', background: '#fff' }} centered>
      {configTabsPanel.map(({ tab, key, content }) => {
        const Panel = ConfigTabsPanelMap[key]
        return (
          <TabPane tab={tab} key={key}>
            <Panel content={content} />
          </TabPane>
        )
      })}
    </Tabs>
  )
}