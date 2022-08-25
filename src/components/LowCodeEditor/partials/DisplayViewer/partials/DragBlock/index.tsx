import React from 'react'
import { Tooltip } from 'antd'
import { useDragRect, useToggle } from '@/hooks'
import { SyncOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export const DragBlock = ({ updateEntity, handleDrop, children, ...entity }) => {
  const [draggable, toggleDraggable] = useToggle(entity.active)
  const { ref, handleDragStart, ...attrs } = useDragRect(entity, updateEntity, draggable)

  const handleMouseDown = (e) => {
    console.log('ddddddddd')
    // if (draggable) {
    e.stopPropagation()
    // }
  }

  const onDrop = handleDrop(entity.id)

  return (
    <div ref={ref} className={`${styles.drag_block} ${draggable ? styles.draggable : ''}`} style={{ ...entity.style, transformOrigin: 'center', transform: `rotate(${- entity.rotate}deg)` }} {...attrs} onDragStart={handleDragStart('move')} onDrop={onDrop}
      onDoubleClick={toggleDraggable} onMouseDown={handleMouseDown}>
      {['top_left', 'top_right', 'bottom_right', 'bottom_left'].map(flag => <div className={styles.circle} {...attrs} onDragStart={handleDragStart(flag)} key={flag} />)}
      {['top', 'right', 'bottom', 'left'].map(flag => <div className={styles[`line__${flag}`]} {...attrs} onDragStart={handleDragStart(flag)} key={flag} />)}
      <Tooltip placement="bottom" title={entity.rotate}>
        <div className={styles.rotate} {...attrs} onDragStart={handleDragStart('rotate')}>
          <SyncOutlined />
        </div>
      </Tooltip>
      {children}
    </div>
  )
}