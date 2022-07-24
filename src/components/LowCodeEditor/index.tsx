// @ts-nocheck
import React from 'react'
import { Tabs } from 'antd'
import Layout from '@/layouts/Default'
import { Menu, Restore, Console, Assets, Widgets, Outline, DisplayViewer, ConfigPanel, Tips, Status, Formatters } from './partials'
import { useEntities } from '@/hooks'


export default ({ page }) => {
  const { entities, ...attrs } = useEntities(page?.content, false)

  const header = (
    <>
      <Menu />
      <Restore {...attrs} />
      <Console />
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