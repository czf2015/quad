// @ts-nocheck
import React, { useState } from 'react'
import { Tabs } from 'antd'
import Layout from '@/layouts/Default'
import { Menu, Restore, Console, Assets, Widgets, Outline, DisplayViewer, ConfigPanel, Tips, Status, Formatters } from './partials'
import { useEntities } from '@/hooks'


export default ({ page }) => {
  const { entities, ...attrs } = useEntities(page?.content, false)
  const [mode, setMode] = useState(0) // 空白状态：0  查看状态: 1 编辑状态：2 

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
      <Menu mode={mode} open={open} create={create} />
      <Restore mode={mode} {...attrs} />
      <Console mode={mode} save={save} edit={edit} />
    </>
  )
  const main = {
    left: (
      <Tabs defaultActiveKey="Widgets" style={{ width: 216, height: '100%' }} centered>
        <Tabs.TabPane tab="资源" key="Assets">
          <Assets />
        </Tabs.TabPane>
        <Tabs.TabPane tab="组件" key="Widgets">
          <Widgets />
        </Tabs.TabPane>
        <Tabs.TabPane tab="页面" key="Outline">
          <Outline />
        </Tabs.TabPane>
      </Tabs>
    ),
    content: <DisplayViewer entities={entities} {...attrs} />,
    right: <ConfigPanel />
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
    <Layout slots={slots} />
  )
}