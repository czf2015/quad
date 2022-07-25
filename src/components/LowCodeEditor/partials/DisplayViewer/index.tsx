// @ts-nocheck
import React from 'react'
import { Block, Wrapper } from './partials'
import { components } from '@/register'
import { useStore } from '@/hooks'


export const DisplayViewer = ({ entities = [], updateEntity, removeEntity, splitBlock, pullBlock, dragWidget, dragEntity, pid = 0 }) => {
  const store = useStore({ isHorizontal: false, hiddenClip: true })

  const handleDrop = (dropId) => (e) => {
    e.stopPropagation()
    // 从左侧面板拖拽某组件到显示区域
    const dragWidgetName = e.dataTransfer.getData("dragWidgetName");
    if (dragWidgetName) {
      dragWidget(dragWidgetName, dropId)
    }
    // 拖拽显示区组件到特定区域（位置）
    const dragWidgetId = e.dataTransfer.getData("dragWidgetId");
    if (dragWidgetId) {
      dragEntity(dragWidgetId, dropId)
    }
  }

  const renderWidget = ({ name, id, blocks = {}, ...attrs }) => {
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
            return (
              <Block {...item} store={store} removeEntity={removeEntity} splitBlock={splitBlock} pullBlock={pullBlock} handleDrop={handleDrop} key={item.id}>
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

  return render(pid)
}