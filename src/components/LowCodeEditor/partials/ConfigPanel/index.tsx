// @ts-nocheck
import React from 'react'
import { Tabs } from '@/plugins/ui'
import { StyleConfigPanel, DataConfigPanel, InteractConfigPanel } from './partials'

const tabList = [
  {
    tab: '样式',
    key: 'style',
    ConfigPanel: StyleConfigPanel,
  }, {
    tab: '数据',
    key: 'dataSource',
    ConfigPanel: DataConfigPanel,
  }, {
    tab: '交互',
    key: 'interact',
    ConfigPanel: InteractConfigPanel,
  }
]

const { TabPane } = Tabs

export const ConfigPanel = ({ active, setActive, entity, updateEntity, }) => {
  const handleChange = (activeKey) => {
    setActive(active => ({ ...active, key: activeKey }))
  }
  return (
    <Tabs activeKey={active.key} onChange={handleChange} style={{ height: '100%', background: '#fff'/* , padding: '0 8px'  */}} key={active.id} centered>
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