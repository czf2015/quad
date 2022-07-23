// @ts-nocheck
import React, { useState } from 'react'
import { Button, Dropdown, Menu } from 'antd'
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

const getBoundaryStyle = (quad) => {
  switch (quad) {
    case 'top':
      return {
        bottom: 0,
        width: '100%',
        height: 2,
      }
    // case 'bottom':
    //   return {
    //     top: 0,
    //     width: '100%',
    //     height: 2,
    //   }
    case 'left':
      return {
        right: 0,
        width: 2,
        height: '100%'
      }
    // case 'right':
    //   return {
    //     left: 0,
    //     width: 2,
    //     height: '100%'
    //   }
    default:
      return {
        display: 'none'
      }
  }
}

const Boundary = ({ pull, quad }) => {
  const attrs = useDragMove(pull)

  return (
    <div className={`${styles.boundary} ${styles[quad]}`} {...attrs} />
  )
}


export const Subarea = ({ name, id, pid, title, quad, store, style, splitSubarea, removeEntity, pullSubarea, children }: ISubareaProps) => {
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
    splitSubarea(id, store('isHorizontal'), store('isHorizontal') ? offset.height : offset.width)
  }
  const remove = (e) => {
    e.stopPropagation()
    removeEntity(id, true)
  }
  const pull = (dragMove) => {
    pullSubarea(id, dragMove)
  }

  return (
    <div id={id} className={`${styles.subarea} ${haltClip ? styles.contextmenu : ''}`} style={style} onMouseMove={onMouseMove} ref={ref}>
      <DeleteOutlined className={styles.delete_btn} onClick={remove} />
      <Boundary pull={pull} quad={quad} />
      {store('hiddenClip')
        ? <ScissorOutlined className={styles.scissor_btn} onClick={() => store('hiddenClip', false)} />
        : <Clip isHorizontal={store('isHorizontal')} offset={offset} menuItems={menuItems} onClick={split} onVisibleChange={setHaltClipClip} onMenuClick={onMenuClick} />}
      {children}
    </div>
  )
}