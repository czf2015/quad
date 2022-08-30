// @ts-nocheck
import React from 'react'
import { Tabs } from '@/plugins/ui'
import { CustomizeConfigPanel, StyleConfigPanel, DataConfigPanel, InteractConfigPanel } from './partials'

const tabList = [
  // {
  //   tab: '定制',
  //   key: 'customize',
  //   ConfigPanel: CustomizeConfigPanel,
  // },
  {
    tab: '样式',
    key: 'style',
    ConfigPanel: StyleConfigPanel,
  }, 
  {
    tab: '数据',
    key: 'dataSource',
    ConfigPanel: DataConfigPanel,
  }, 
  {
    tab: '交互',
    key: 'interact',
    ConfigPanel: InteractConfigPanel,
  }
]

const { TabPane } = Tabs

export const ConfigPanel = ({ updateEntity, ...entity }) => {
  return (
    <Tabs style={{ height: '100%', background: '#fff', padding: '0 8px' , width: 318, zIndex: 9 }} key={entity.id} centered>
      {tabList.map(({ tab, key, ConfigPanel }) => {
        return (
          <TabPane tab={tab} key={key}>
            <ConfigPanel {...entity} updateEntity={updateEntity} />
          </TabPane>
        )
      })}
    </Tabs>
  )
}