// @ts-nocheck
import React, { useState } from 'react'
import { Button, Dropdown, Menu } from 'antd'
import { DeleteOutlined, ScissorOutlined } from '@ant-design/icons'
import { useClip } from '@/hooks'
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
        <div className={isHorizontal ? styles.horizontal : styles.vertical} style={isHorizontal ? { top: offset?.height } : { left: offset?.width }} />
        <Dropdown overlay={menu} onVisibleChange={onVisibleChange} trigger="contextMenu">
          <Button className={styles.clip} style={{ top: offset?.height, left: offset?.width }} onClick={onClick} type="primary" shape="circle" icon={<ScissorOutlined rotate={isHorizontal ? 0 : 90} />} />
        </Dropdown>
      </>
    )
  }

  return null
}


export const Subarea = ({ name, id, pid, title, quad, isHorizontal, setIsHorizontal, hiddenClip, setHiddenClip, style, splitSubarea, removeEntity, pullSubarea, children }: ISubareaProps) => {
  const [halt, setHalt] = useState(false)
  const onMenuClick: MenuProps['onClick'] = e => {
    setHalt(false)
    switch (e.key) {
      case 'horizontal':
        setHiddenClip(false)
        setIsHorizontal(true)
        break
      case 'vertical':
        setHiddenClip(false)
        setIsHorizontal(false)
        break
      default:
        setHiddenClip(true)
        break
    }
  };

  const { ref, offset, onMouseMove } = useClip(halt)

  const split = (e) => {
    e.stopPropagation()
    splitSubarea(id, isHorizontal, isHorizontal ? offset.height : offset.width)
  }
  const remove = (e) => {
    e.stopPropagation()
    removeEntity(id, true)
  }
  const pull = (e) => {
    e.stopPropagation()
    pullSubarea(id, 20)
  }

  return (
    <div className={`${styles.subarea} ${halt ? styles.contextmenu : ''}`} style={style} onMouseMove={onMouseMove} ref={ref}>
      <DeleteOutlined className={styles.delete} onClick={remove} />
      {hiddenClip
        ? <ScissorOutlined className={styles.scissor} onClick={() => setHiddenClip(false)} />
        : <Clip isHorizontal={isHorizontal} offset={offset} menuItems={menuItems} onClick={split} onVisibleChange={setHalt} onMenuClick={onMenuClick} />}
      {children}
    </div>
  )
}