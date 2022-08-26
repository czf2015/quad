import React from 'react'
import { Tooltip } from 'antd'
import { useDragRect, useToggle } from '@/hooks'
import { SyncOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export default ({ id, updateEntity, style = {}, active, rotate }) => {
  const [draggable, toggleDraggable] = useToggle(active)
  const { ref, handleDragStart, ...attrs } = useDragRect(updateEntity, draggable)
  const wrapperStyle = { top: style.top, left: style.left, width: style.width, height: style.height, transformOrigin: 'center', transform: `rotate(${- rotate}deg)` }

  const handleMouseDown = (e) => {
    // if (draggable) {
      e.stopPropagation()
    // }
  }

  return (
    <div ref={ref} className={`${styles.drag_wrapper} ${draggable ? styles.draggable : ''}`} style={wrapperStyle} {...attrs} onDragStart={handleDragStart('move')}
      onDoubleClick={toggleDraggable} onMouseDown={handleMouseDown}>
      {['top_left', 'top_right', 'bottom_right', 'bottom_left'].map(flag => <div className={styles.circle} {...attrs} onDragStart={handleDragStart(flag)} key={flag} />)}
      {['top', 'right', 'bottom', 'left'].map(flag => <div className={styles[`line__${flag}`]} {...attrs} onDragStart={handleDragStart(flag)} key={flag} />)}
      <Tooltip placement="bottom" title={rotate}>
        <div className={styles.rotate} {...attrs} onDragStart={handleDragStart('rotate')}>
          <SyncOutlined />
        </div>
      </Tooltip>
    </div>
  )
}