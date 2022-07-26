// @ts-nocheck
import React from 'react'
import { Block, Wrapper, Scale } from './partials'
import { components } from '@/register'
import { useStore } from '@/hooks'
import styles from './index.module.less'


export const DisplayViewer = ({ entities = [], updateEntity, removeEntity, splitBlock, pullBlock, dragWidget, dragEntity, pid = 0 }) => {
  const store = useStore({ isHorizontal: false, hiddenClip: true })

  const handleDrop = (dropId) => (e) => {
    e.stopPropagation()
    // 从左侧面板拖拽组件到显示区域(位置)
    const dragWidgetName = e.dataTransfer.getData("dragWidgetName");
    if (dragWidgetName) {
      dragWidget(dragWidgetName, dropId)
    }
    // 拖拽某显示区内组件到特定区域（位置）
    const dragWidgetId = e.dataTransfer.getData("dragWidgetId");
    if (dragWidgetId) {
      dragEntity(dragWidgetId, dropId)
    }
  }

  const renderWidget = ({ name, id, blocks = {}, ...attrs } = {}) => {
    const Widget = components[name]
    if (Widget) {
      const slots = {}
      for (let key in blocks) {
        slots[key] = render(blocks[key])
      }
      return (
        <Wrapper id={id} {...attrs} removeEntity={removeEntity} handleDrop={handleDrop} key={id}>
          <Widget id={id} {...attrs} slots={slots} />
        </Wrapper>
      )
    }

    return null
  }

  const render = (pid) => {
    return (
      <>
        {entities.filter(item => item.pid == pid).map((item) => {
          if (item.name == 'Block') {
            const hasBlock = entities.findIndex(entity => entity.pid == item.id && entity.name == 'Block') != -1
            return (
              <Block {...item} hasBlock={hasBlock} store={store} removeEntity={removeEntity} splitBlock={splitBlock} pullBlock={pullBlock} handleDrop={handleDrop} key={item.id}>
                {item?.widgets?.length > 0 ? item.widgets.map(widgetId => {
                  const widget = entities.find(entity => entity.id == widgetId)
                  return renderWidget(widget)
                }) : render(item.id)}
              </Block>
            )
          }

          return renderWidget(item)
        })}
      </>
    )
  }

  return (
    <div className={styles.container}>
      <Scale len={1440} gap={5} direction='left' style={{ position: 'absolute', top: 0, left: 0 }} />
      <Scale len={1080} gap={5} direction='down' style={{ position: 'absolute', top: 0, left: 0 }} />
      {render(pid)}
    </div>
  )
}