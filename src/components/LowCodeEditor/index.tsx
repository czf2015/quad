// @ts-nocheck
import React, { useState } from 'react'
import { Tabs } from '@/plugins/ui'
import Layout from '@/layouts/Editor'
import { Menu, Restore, Console, Assets, Widgets, Outline, DisplayViewer, ConfigPanel, Tips, Status, Formatters } from './partials'
import Zoom from '@/components/Zoom'
import { useEntities, useZoom } from '@/hooks'
import uuid from '@/plugins/uuid'

const { TabPane } = Tabs

export default ({ service, }) => {
  const [page, setPage] = useState({ width: 1440, height: 1080 })
  const [mode, setMode] = useState(1) // 编辑状态：0  保存状态: 1
  const [isPreview, setIsPreview] = useState(false)
  const preview = () => {
    setIsPreview(true)
  }
  const exit = () => {
    setIsPreview(false)
  }
  const editable = !isPreview && mode == 0
  const { entities, active, ...attrs } = useEntities([], editable, true)
  const entity = entities?.find(item => item.id == active?.id)

  const { zoom, zoomIn, zoomOut, onChange, min, max } = useZoom({ min: 0.2, max: 5 })

  const open = (id) => {
    return service.getDetails({ id }).then(({ data: { content, ...page } } = {}) => {
      setPage(page)
      attrs?.setEntities(content || [])
    }).then(() => {
      setMode(0)
    })
  }

  const create = (values) => {
    return service.create(values).then(({ data } = {}) => {
      setPage(data)
      attrs?.setEntities([
        {
          name: "Block",
          id: uuid(),
          title: "页面",
          style: {
            top: 0,
            left: 0,
            width: data.width,
            height: data.height,
          },
        },
      ])
    }).then(() => {
      setMode(0)
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
    setMode(0)
  }
  const publish = (values) => {
    return service?.publish(values)
  }
  const header = (
    <>
      <Menu editable={editable} open={open} create={create} service={service} />
      <Restore visible={editable} {...attrs} />
      <Console editable={editable} save={save} edit={edit} page={page} service={service} preview={preview} publish={publish} />
    </>
  )
  const left = (
    <Tabs defaultActiveKey="Widgets" centered>
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
  )
  const content = <DisplayViewer entities={entities} width={page.width} height={page.height} zoom={zoom} active={active} editable={editable} {...attrs} />
  const right = <ConfigPanel {...entity} {...attrs} />
  const footer = (
    <>
      <Tips />
      <Status />
      <Formatters />
    </>
  )
  const slots = {
    header,
    left,
    content,
    right,
    footer,
  }

  return (
    <>
      <Layout slots={slots} zoom={zoom} isPreview={isPreview} exit={exit} page={page} />
      {/* {!isPreview && <Zoom value={zoom} zoomIn={zoomIn} zoomOut={zoomOut} onChange={onChange} min={min} max={max} />} */}
    </>
  )
}