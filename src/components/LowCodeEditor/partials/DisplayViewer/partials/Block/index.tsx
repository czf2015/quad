// @ts-nocheck
import React, { useState } from 'react'
import { Button, Dropdown, Menu, Popover, Popconfirm } from '@/plugins/ui'
import { DeleteOutlined, ScissorOutlined, MoreOutlined } from '@ant-design/icons'
import BlockStyleConfigPanel from "@/components/LowCodeEditor/partials/ConfigPanel/partials/StyleConfigPanel/partials/BlockPanel";
import { useClip, useDragMove } from '@/hooks'
import { stopPropagation } from '@/utils/dom'
import { convertToStyle } from '@/components/ColorGradient/helpers';
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

export const Clip = ({ isHorizontal, menuItems, offset, onClick, onMenuClick, onVisibleChange }) => {
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
        <Dropdown overlay={menu} onVisibleChange={onVisibleChange} trigger="contextMenu">
          <Button className={styles.clip_scissor} style={{ top: offset?.y, left: offset?.x }} onClick={onClick} type="primary" shape="circle" icon={<ScissorOutlined rotate={isHorizontal ? 0 : 90} />} />
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
     <Popover content={<BlockStyleConfigPanel id={id} {...entity} updateEntity={updateEntity} />} trigger="click">
        <MoreOutlined className={`${styles.more_btn} quad-circle`} />
      </Popover>
      <Popconfirm title="确认是否删除?" onConfirm={remove} >
        <DeleteOutlined className={`${styles.delete_btn} quad-circle`} />
      </Popconfirm>
      <Boundary pull={pull} quad={quad} zoom={zoom} />
      {store('isClipHidden')
        ? <ScissorOutlined className={`${styles.scissor_btn} quad-circle`} onClick={handleClipHidden} />
        : <Clip isHorizontal={store('isHorizontal')} offset={offset} menuItems={menuItems} onClick={split} onVisibleChange={setHaltClipClip} onMenuClick={onMenuClick} />}
    </> : null

  return (
    <div id={id} className={`${styles.block} ${haltClip ? styles.contextmenu : ''} ${hasBlock ? styles.hasBlock : ''} ${editable ? styles.editable : ''}`} style={{ ...style, ...convertToStyle(entity?.styleConfig) }} onMouseMove={onMouseMove} onDragOver={onDragOver} onDrop={onDrop} ref={ref}>
      {children}
      {editTools}
    </div>
  )
}