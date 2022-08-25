import React from 'react'
import { Tooltip } from 'antd'
import { useDragRect, useToggle } from '@/hooks'
import { SyncOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export default ({ entity, updateEntity }) => {
  const [draggable, toggleDraggable] = useToggle(entity.active)
  const { ref, handleDragStart, ...attrs } = useDragRect(updateEntity, draggable)
  const style = { top: entity.top, left: entity.left, width: entity.width, height: entity.height, transformOrigin: 'center', transform: `rotate(${- entity.rotate}deg)` }

  const handleMouseDown = (e) => {
    // if (draggable) {
      e.stopPropagation()
    // }
  }

  return (
    <div ref={ref} className={`${styles.drag_wrapper} ${draggable ? styles.draggable : ''}`} style={style} {...attrs} onDragStart={handleDragStart('move')}
      onDoubleClick={toggleDraggable} onMouseDown={handleMouseDown}>
      {['top_left', 'top_right', 'bottom_right', 'bottom_left'].map(flag => <div className={styles.circle} {...attrs} onDragStart={handleDragStart(flag)} key={flag} />)}
      {['top', 'right', 'bottom', 'left'].map(flag => <div className={styles[`line__${flag}`]} {...attrs} onDragStart={handleDragStart(flag)} key={flag} />)}
      <Tooltip placement="bottom" title={entity.rotate}>
        <div className={styles.rotate} {...attrs} onDragStart={handleDragStart('rotate')}>
          <SyncOutlined />
        </div>
      </Tooltip>
    </div>
  )
}