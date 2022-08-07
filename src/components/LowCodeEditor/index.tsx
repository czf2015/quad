// @ts-nocheck
import React, { useState } from 'react'
import { Tabs } from '@/plugins/ui'
import Layout from '@/layouts/Default'
import { Menu, Restore, Console, Assets, Widgets, Outline, DisplayViewer, ConfigPanel, Tips, Status, Formatters } from './partials'
import { useEntities, useStore } from '@/hooks'

const { TabPane } = Tabs


export default ({ page: { content: initialEntities, ...initialBaseInfo } }) => {
  const { entities, active, ...attrs } = useEntities(initialEntities/* , true */)
  const store = useStore(initialBaseInfo)
  const [mode, setMode] = useState(0) // 空白状态：0  查看状态: 1 编辑状态：2 
  const entity = entities.find(item => item.id == active?.id)

  const zoom = 1440 / store('width')

  const open = () => {
    setMode(1)
  }
  const create = () => {
    setMode(2)
  }
  const save = () => {
    setMode(1)
  }
  const edit = () => {
    setMode(2)
  }

  const header = (
    <>
      <Menu store={store} mode={mode} open={open} create={create} />
      <Restore mode={mode} {...attrs} />
      <Console store mode={mode} save={save} edit={edit} />
    </>
  )
  const main = {
    left: (
      <Tabs defaultActiveKey="Widgets" style={{ height: '100%', background: '#fff' }} centered>
        <TabPane tab="资源" key="Assets">
          <Assets />
        </TabPane>
        <TabPane tab="组件" key="Widgets">
          <Widgets />
        </TabPane>
        <TabPane tab="页面" key="Outline">
          <Outline />
        </TabPane>
      </Tabs>
    ),
    content: <DisplayViewer entities={entities} width={store('width')} height={store('height')} zoom={zoom} {...attrs} />,
    right: <ConfigPanel entity={entity} active={active} {...attrs} />
  }
  const footer = (
    <>
      <Tips />
      <Status />
      <Formatters />
    </>
  )
  const slots = {
    header,
    main,
    footer,
  }

  return (
    <Layout slots={slots} zoom={zoom} />
  )
}