import React from 'react'
import { Popconfirm, InputNumber, Dropdown } from 'antd'
import { useDragRect, useToggle } from '@/hooks'
import { SyncOutlined, DeleteOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export const DragBlock = ({ removeEntity, updateEntity, handleDrop, children, ...entity }) => {
  const [draggable, toggleDraggable] = useToggle(entity.active)
  const { ref, handleDragStart, ...attrs } = useDragRect(entity, updateEntity, draggable)

  const handleMouseDown = (e) => {
    console.log('ddddddddd')
    // if (draggable) {
    e.stopPropagation()
    // }
  }

  const onDrop = handleDrop(entity.id)

  const remove = () => {
    removeEntity(entity.id, false)
  }

  const handleRotateChange = (rotate) => {
    updateEntity(entity.id, { rotate })
  }
  const overlay = <div><label>旋转角度：</label><InputNumber value={entity.rotate} onChange={handleRotateChange} style={{ width: 60 }} min={0} max={360} size="small" controls={false} /></div>
  const resetRotate = (e) => {
    e.stopPropagation()
    updateEntity(entity.id, { rotate: 0 })
  }

  return (
    <div ref={ref} className={`${styles.drag_block} ${draggable ? styles.draggable : ''}`} style={{ ...entity.style, transformOrigin: 'center', transform: `rotate(${- entity.rotate}deg)` }} {...attrs} onDragStart={handleDragStart('move')} onDrop={onDrop}
      onDoubleClick={toggleDraggable} onMouseDown={handleMouseDown}>
      {['top_left', 'top_right', 'bottom_right', 'bottom_left'].map(flag => <div className={styles.circle} {...attrs} onDragStart={handleDragStart(flag)} key={flag} />)}
      {['top', 'right', 'bottom', 'left'].map(flag => <div className={styles[`line__${flag}`]} {...attrs} onDragStart={handleDragStart(flag)} key={flag} />)}
      <Dropdown placement="top" overlay={overlay}>
        <SyncOutlined className={styles.rotate} {...attrs} onDragStart={handleDragStart('rotate')} onClick={resetRotate} />
      </Dropdown>
      <Popconfirm title="确认是否删除?" onConfirm={remove}>
        <DeleteOutlined className={styles.delete} />
      </Popconfirm>
      {children}
    </div>
  )
}