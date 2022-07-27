// @ts-nocheck
import React, { useState } from 'react'
import { Button, Dropdown, Menu, Tooltip, } from 'antd'
import { DeleteOutlined, ScissorOutlined } from '@ant-design/icons'
import { useClip, useDragMove } from '@/hooks'
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
  if (offset?.width || offset?.height) {
    const menu = (
      <Menu
        onClick={onMenuClick}
        items={menuItems}
      />
    );

    return (
      <>
        <div className={isHorizontal ? styles.clip_horizontal : styles.clip_vertical} style={isHorizontal ? { top: offset?.height } : { left: offset?.width }} />
        <Dropdown overlay={menu} onVisibleChange={onVisibleChange} trigger="contextMenu">
          <Button className={styles.clip_scissor} style={{ top: offset?.height, left: offset?.width }} onClick={onClick} type="primary" shape="circle" icon={<ScissorOutlined rotate={isHorizontal ? 0 : 90} />} />
        </Dropdown>
      </>
    )
  }

  return null
}

const Boundary = ({ pull, quad }) => {
  const attrs = useDragMove(pull)

  return (
    <div className={`${styles.boundary} ${quad ? styles[quad] : ''}`} {...attrs}></div>
  )
}


export const Block = ({ name, id, pid, title = '', quad, hasBlock = false, store, style, splitBlock, removeEntity, pullBlock, handleDrop, children }: IBlockProps) => {
  const [haltClip, setHaltClipClip] = useState(false)
  const onMenuClick: MenuProps['onClick'] = e => {
    setHaltClipClip(false)
    switch (e.key) {
      case 'horizontal':
        store('hiddenClip', false)
        store('isHorizontal', true)
        break
      case 'vertical':
        store('hiddenClip', false)
        store('isHorizontal', false)
        break
      default:
        store('hiddenClip', true)
        break
    }
  };

  const { ref, offset, onMouseMove } = useClip(haltClip)

  const split = (e) => {
    e.stopPropagation()
    splitBlock(id, store('isHorizontal'), store('isHorizontal') ? offset.height : offset.width)
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

  return (
    <div id={id} className={`${styles.block} ${haltClip ? styles.contextmenu : ''} ${hasBlock ? styles.hasBlock : ''}`} style={style} onMouseMove={onMouseMove} onDragOver={onDragOver} onDrop={onDrop} ref={ref}>
      <DeleteOutlined className={`${styles.delete_btn} quad-circle`} onClick={remove} />
      <Boundary pull={pull} quad={quad} />
      {store('hiddenClip')
        ? <ScissorOutlined className={`${styles.scissor_btn} quad-circle`} onClick={() => store('hiddenClip', false)} />
        : <Clip isHorizontal={store('isHorizontal')} offset={offset} menuItems={menuItems} onClick={split} onVisibleChange={setHaltClipClip} onMenuClick={onMenuClick} />}
      {children}
    </div>
  )
}