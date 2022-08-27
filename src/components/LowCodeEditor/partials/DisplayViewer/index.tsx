// @ts-nocheck
import React, { useEffect } from 'react'
import { Block, Wrapper, Scale, DragBlock } from './partials'
import { components } from '@/register'
import { useStore, useDragZone } from '@/hooks'
import styles from './index.module.less'


export const DisplayViewer = ({ entities = [], setEntities, updateEntity, removeEntity, splitBlock, pullBlock, dragWidget, dragEntity, editable = false, active, setActive, pid, width, height, zoom = 1 }) => {
  useEffect(() => {
    document.oncontextmenu = function (event) {
      event.preventDefault();
    };
  }, [])

  const store = useStore({ isHorizontal: false, isClipHidden: true })

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

  const renderWidget = ({ name, id, blocks = {}, style, ...attrs } = {}) => {
    const Widget = components[name]
    if (Widget) {
      const slots = {}
      for (let key in blocks) {
        slots[key] = renderSlot(blocks[key])
      }
      return (
        <Wrapper id={id} name={name} {...attrs} style={style} setEntities={setEntities} removeEntity={removeEntity} updateEntity={updateEntity} handleDrop={handleDrop} key={id} editable={editable} active={active} setActive={setActive}>
          <Widget id={id} name={name} updateEntity={updateEntity} editable={editable} store={store} {...attrs} slots={slots} />
        </Wrapper>
      )
    }

    return null
  }

  const renderSlot = (id) => {
    const item = entities.find(item => item.id == id)
    return (
      <>
        <Block {...item} store={store} zoom={zoom} setEntities={setEntities} updateEntity={updateEntity} removeEntity={removeEntity} splitBlock={splitBlock} pullBlock={pullBlock} handleDrop={handleDrop} editable={editable} setActive={setActive} key={item.id}>
          {item?.widgets?.map(widgetId => {
            const widget = entities.find(entity => entity.id == widgetId)
            return renderWidget(widget)
          })} </Block>
        {item?.widgets?.length > 0 ? null : render(item.id)}
      </>
    )
  }

  const render = (pid) => {
    return (
      <>
        {entities.filter(item => item.pid == pid).map((item) => {
          if (item.name == 'Block' || item.name == 'DragBlock') {
            const BlockUsed = item.name == 'DragBlock' ? DragBlock : Block
            return (
              <>
                <BlockUsed {...item} store={store} zoom={zoom} updateEntity={updateEntity} removeEntity={removeEntity} splitBlock={splitBlock} pullBlock={pullBlock} handleDrop={handleDrop} editable={editable} setActive={setActive} key={item.id}>
                  {item?.widgets?.map(widgetId => {
                    const widget = entities.find(entity => entity.id == widgetId)
                    return renderWidget(widget)
                  })}
                </BlockUsed>
                {item?.widgets?.length > 0 ? null : render(item.id)}
              </>
            )
          } else if (item.name == 'DragBlock') {
            return null
          }

          return renderWidget(item)
        })}
      </>
    )
  }

  const handleDragZone = (entity, flag) => {
    if (editable) {
      setEntities(entities => {
        if (flag) {
          return [...entities, entity]
        }
        return entities.map(item => item.id == entity.id ? entity : item)
      })
    }
  }
  const attrs = useDragZone(handleDragZone)

  return (
    <div id="display_viewer" className={styles.display_viewer} style={{ width, height }} {...attrs}>
      {editable && <Scale len={width} gap={5} direction='left' />}
      {editable && <Scale len={height} gap={5} direction='down' />}
      {render(pid)}
    </div>
  )
}