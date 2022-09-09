// @ts-nocheck
import React from 'react'
import { Tabs } from '@/plugins/ui'
import { StyleConfigPanel, DataConfigPanel, InteractConfigPanel } from './partials'

const tabList = [
  {
    tab: '样式',
    key: 'style',
    Component: StyleConfigPanel,
  }, 
  {
    tab: '数据',
    key: 'dataSource',
    Component: DataConfigPanel,
  }, 
  {
    tab: '交互',
    key: 'interact',
    Component: InteractConfigPanel,
  }
]

const { TabPane } = Tabs

export const ConfigPanel = ({ updateEntity, ...entity }) => {
  return (
    <Tabs style={{ height: '100%', background: '#fff', padding: '0 8px' , width: 318, zIndex: 9 }} key={entity.id} centered>
      {tabList.map(({ tab, key, Component }) => {
        return (
          <TabPane tab={tab} key={key}>
            <Component {...entity} updateEntity={updateEntity} />
          </TabPane>
        )
      })}
    </Tabs>
  )
}