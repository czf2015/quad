// @ts-nocheck
import React, { useState } from 'react'
import { Tabs } from '@/plugins/ui'
import Layout from '@/layouts/Default'
import { Menu, Restore, Console, Assets, Widgets, Outline, DisplayViewer, ConfigPanel, Tips, Status, Formatters } from './partials'
import { useEntities } from '@/hooks'

const { TabPane } = Tabs

const defaultEntities = [
  {
    name: "Block",
    id: 0b1,
    pid: 0b0,
    title: "页面",
    hasBlock: true,
    style: {
      top: 0,
      left: 0,
      width: 1440,
      height: 1080,
      backgroundColor: '#fff'
    },
  },
]


export default ({ service, }) => {
  const [page, setPage] = useState({ width: 1440, height: 1080 })
  const [mode, setMode] = useState(1) // 空白状态：0  查看状态: 1 编辑状态：2 
  const editable = mode == 2
  const { entities, active, ...attrs } = useEntities(defaultEntities, editable, true)
  const entity = entities?.find(item => item.id == active?.id)

  const zoom = /* 1440 / page.width */1

  const open = (id) => {
    return service.getDetails({ id }).then((/* { data: { content, ...page } } = {} */) => {
      debugger
      setPage(page)
      attrs?.setEntities(page.content || defaultEntities)
    }).then(() => {
      setMode(1)
    })
  }

  const create = (values) => {
    return service.create(values).then(({ data } = {}) => {
      setPage(data)
      attrs?.setEntities([
        {
          name: "Block",
          id: 0b1,
          pid: 0b0,
          title: "页面",
          hasBlock: true,
          style: {
            top: 0,
            left: 0,
            width: data.width,
            height: data.height,
            backgroundColor: '#fff'
          },
        },
      ])
    }).then(() => {
      setMode(2)
    })
  }
  const save = (values) => {
    const newPage = { ...page, ...values }
    return service.update({ ...newPage, content: entities })
      .then(({ data }) => {
        setMode(1)
        setPage(newPage)
      })
  }
  const edit = () => {
    setMode(2)
  }
  const [isPreview, setIsPreview] = useState(false)
  const preview = () => {
    setIsPreview(true)
  }
  const exit = () => {
    setIsPreview(false)
  }
  const header = (
    <>
      <Menu mode={mode} open={open} create={create} service={service} />
      <Restore mode={mode} {...attrs} />
      <Console mode={mode} save={save} edit={edit} page={page} service={service} preview={preview} />
    </>
  )
  const content = mode == 0 ? null : <DisplayViewer entities={entities} width={page.width} height={page.height} zoom={zoom} active={active} editable={editable} {...attrs} />
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
    content,
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
    <Layout slots={slots} zoom={zoom} isPreview={isPreview} exit={exit} />
  )
}