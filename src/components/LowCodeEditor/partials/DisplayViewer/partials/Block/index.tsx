// @ts-nocheck
import React, { useState } from 'react'
import { Button, Dropdown, Menu, Popconfirm, Popover } from '@/plugins/ui'
import { DeleteOutlined, ScissorOutlined, MoreOutlined } from '@ant-design/icons'
import BlockStyleConfigPanel from "@/components/LowCodeEditor/partials/ConfigPanel/partials/StyleConfigPanel/partials/BlockPanel";
import { useClip, useDragMove } from '@/hooks'
import { convertToStyle } from '@/components/ColorGradient/helpers';
import { stopPropagation } from '@/utils/dom'
import styles from './index.module.less'

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

export const Clip = ({ id, isHorizontal, menuItems, offset, onClick, onMenuClick, onVisibleChange }) => {
  if (offset?.x || offset?.y) {
    const menu = (
      <Menu
        onClick={onMenuClick}
        items={menuItems}
      />
    );

    return (
      <>
        <div className={isHorizontal ? styles.clip_horizontal : styles.clip_vertical} style={isHorizontal ? { top: offset?.y } : { left: offset?.x }} />
        <Dropdown overlay={menu} onVisibleChange={onVisibleChange} trigger="contextMenu" placement="bottom">
          <Button className={styles.clip_scissor} style={{ top: offset?.y, left: offset?.x }} onClick={onClick} type="primary" shape="circle" icon={<ScissorOutlined rotate={isHorizontal ? 0 : 90} />} onContextMenu={stopPropagation} />
        </Dropdown>
      </>
    )
  }

  return null
}

const Boundary = ({ pull, quad, zoom }) => {
  const attrs = useDragMove(pull, zoom)

  return <div className={`${styles.boundary} ${quad ? styles[quad] : ''}`} {...attrs} />
}

export const Block = ({ editable, name, id, pid, title = '', quad, hasBlock = false, store, zoom, style, splitBlock, removeEntity, pullBlock, handleDrop, children, updateEntity, ...entity }: IBlockProps) => {
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

  const { ref, offset, onMouseMove } = useClip(haltClip, zoom)

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
      <Boundary pull={pull} quad={quad} zoom={zoom} />
      {store('isClipHidden')
        ? <ScissorOutlined className={`${styles.scissor_btn} quad-circle`} onClick={handleClipHidden} />
        : <Clip id={id} isHorizontal={store('isHorizontal')} offset={offset} menuItems={menuItems} onClick={split} onVisibleChange={setHaltClipClip} onMenuClick={onMenuClick} />}
      <Popconfirm title="确认是否删除?" onConfirm={remove}>
        <DeleteOutlined className={`${styles.delete_btn} quad-circle`} />
      </Popconfirm>
      <Popover content={<BlockStyleConfigPanel id={id} {...entity} updateEntity={updateEntity} />} trigger="click">
        <MoreOutlined className={`${styles.more_btn} quad-circle`} />
      </Popover>
    </> : null

  return (
    <div className={`${styles.block} ${haltClip ? styles.contextmenu : ''} ${hasBlock ? styles.hasBlock : ''} ${editable ? styles.editable : ''}`} style={{ ...style, ...convertToStyle(entity?.styleConfig, true) }} onMouseMove={onMouseMove} onDragOver={onDragOver} onDrop={onDrop} ref={ref}>
      {children}
      {editTools}
    </div>
  )
}