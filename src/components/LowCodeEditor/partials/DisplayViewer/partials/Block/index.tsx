// @ts-nocheck
import React, { useState } from 'react'
import { Button, Dropdown, Menu } from '@/plugins/ui'
import { DeleteOutlined, ScissorOutlined } from '@ant-design/icons'
import { useClip, useDragMove, useDragZone } from '@/hooks'
import styles from './index.module.less'

const stopPropagation = (e) => {
  e.stopPropagation()
}

const menuItems = [
  {
    key: 'horizontal',
    label: '横向',
  },
  {
    key: 'vertical',
    label: '纵向',
  },
  {
    key: 'hidden',
    label: '隐藏',
  },
]

export const Clip = ({ isHorizontal, menuItems, offset, onClick, onMenuClick, onVisibleChange }) => {
  if (offset?.x || offset?.y) {
    const menu = (
      <Menu
        onClick={onMenuClick}
        onMouseDown={stopPropagation}
        items={menuItems}
      />
    );

    return (
      <>
        <div className={isHorizontal ? styles.clip_horizontal : styles.clip_vertical} style={isHorizontal ? { top: offset?.y } : { left: offset?.x }} />
        <Dropdown overlay={menu} onVisibleChange={onVisibleChange} trigger="contextMenu">
          <Button className={styles.clip_scissor} style={{ top: offset?.y, left: offset?.x }} onClick={onClick} onMouseDown={stopPropagation} type="primary" shape="circle" icon={<ScissorOutlined rotate={isHorizontal ? 0 : 90} />} />
        </Dropdown>
      </>
    )
  }

  return null
}

const Boundary = ({ pull, quad, zoom }) => {
  const attrs = useDragMove(pull, zoom)

  return (
    <div className={`${styles.boundary} ${quad ? styles[quad] : ''}`} {...attrs}>
      <div></div>
      <div></div>
    </div>
  )
}

export const Block = ({ editable, name, id, pid, title = '', quad, hasBlock = false, store, zoom, style, splitBlock, setEntities, removeEntity, pullBlock, handleDrop, children }: IBlockProps) => {
  const [haltClip, setHaltClipClip] = useState(false)
  const onMenuClick: MenuProps['onClick'] = e => {
    e?.domEvent?.stopPropagation()
    setHaltClipClip(false)
    switch (e.key) {
      case 'horizontal':
        store('isClipHidden', false)
        store('isHorizontal', true)
        break
      case 'vertical':
        store('isClipHidden', false)
        store('isHorizontal', false)
        break
      default:
        store('isClipHidden', true)
        break
    }
  };

  const { ref, offset, onMouseMove: handleClipMouseMove } = useClip(haltClip, zoom)

  const split = (e) => {
    e.stopPropagation()
    splitBlock(id, store('isHorizontal'), offset)
  }
  const remove = (e) => {
    e.stopPropagation()
    removeEntity(id, true)
  }
  const pull = (dragMove) => {
    pullBlock(id, dragMove)
  }

  const onDragOver = (e) => {
    e.preventDefault()
  }
  const onDrop = handleDrop(id)

  const handleClipHidden = (e) => {
    e.stopPropagation()
    store('isClipHidden', false)
  }

  const editTools = editable ?
    <>
      <DeleteOutlined className={`${styles.delete_btn} quad-circle`} onClick={remove} />
      <Boundary pull={pull} quad={quad} zoom={zoom} />
      {store('isClipHidden')
        ? <ScissorOutlined className={`${styles.scissor_btn} quad-circle`} onClick={handleClipHidden} onMouseDown={stopPropagation} />
        : <Clip isHorizontal={store('isHorizontal')} offset={offset} menuItems={menuItems} onClick={split} onVisibleChange={setHaltClipClip} onMenuClick={onMenuClick} />}
    </> : null

  const handleDragZone = (entity, flag) => {
    setEntities(entities => {
      if (flag) {
        return [...entities, entity]
      }
      return entities.map(item => item.id == entity.id ? entity : item)
    })
  }
  const { onMouseMove: handleDragZoneMouseMove, ...attrs } = useDragZone(handleDragZone, 25, id)
  const onMouseMove = (e) => {
    handleClipMouseMove(e)
    handleDragZoneMouseMove(e)
  }

  return (
    <div id={id} className={`${styles.block} ${haltClip ? styles.contextmenu : ''} ${hasBlock ? styles.hasBlock : ''} ${editable ? styles.editable : ''}`} style={style} onMouseMove={onMouseMove} onDragOver={onDragOver} onDrop={onDrop} ref={ref} {...attrs}>
      {children}
      {editTools}
    </div>
  )
}