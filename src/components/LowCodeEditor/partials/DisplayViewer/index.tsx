// @ts-nocheck
import React, { useEffect } from 'react'
import { Block, Wrapper, Scale } from './partials'
import { components } from '@/register'
import { useStore } from '@/hooks'
import styles from './index.module.less'


export const DisplayViewer = ({ entities = [], updateEntity, removeEntity, splitBlock, pullBlock, dragWidget, dragEntity, editable, active, setActive, pid = 0, width, height, zoom }) => {
  useEffect(() => {
    document.oncontextmenu = function (event) {
      event.preventDefault();
    };
  }, [])

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

  const renderWidget = ({ name, id, blocks = {}, style, ...attrs } = {}) => {
    const Widget = components[name]
    if (Widget) {
      const slots = {}
      for (let key in blocks) {
        slots[key] = render(blocks[key])
      }
      return (
        <Wrapper id={id} name={name} {...attrs} style={style} removeEntity={removeEntity} updateEntity={updateEntity} handleDrop={handleDrop} key={id} editable={editable} active={active} setActive={setActive}>
          <Widget id={id} name={name} updateEntity={updateEntity} {...attrs} slots={slots} />
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
              <>
                <Block {...item} store={store} zoom={zoom} updateEntity={updateEntity} removeEntity={removeEntity} splitBlock={splitBlock} pullBlock={pullBlock} handleDrop={handleDrop} editable={editable} setActive={setActive} key={item.id}>
                  {item?.widgets?.map(widgetId => {
                    const widget = entities.find(entity => entity.id == widgetId)
                    return renderWidget(widget)
                  })} </Block>
                {item?.widgets?.length > 0 ? null : render(item.id)}
              </>
            )
          }

          return renderWidget(item)
        })}
      </>
    )
  }

  return (
    <div id="display_viewer" className={styles.display_viewer} style={{ width, height }}>
      {editable && <Scale len={width} gap={5} direction='left' />}
      {editable && <Scale len={height} gap={5} direction='down' />}
      {render(pid)}
    </div>
  )
}