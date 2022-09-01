import React from 'react'
import { Popconfirm, InputNumber, Dropdown, Popover } from 'antd'
import BlockStyleConfigPanel from "@/components/LowCodeEditor/partials/ConfigPanel/partials/StyleConfigPanel/partials/BlockPanel";
import Mask from '@/components/Mask';
import { useDragRect } from '@/hooks'
import { SyncOutlined, DeleteOutlined, MoreOutlined } from '@ant-design/icons'
import { convertToStyle } from '@/components/ColorGradient/helpers';
import styles from './index.module.less'

export const DragBlock = ({ removeEntity, updateEntity, handleDrop, children, active, setActive, editable = false, ...entity }) => {
  const { ref, handleDragStart, ...attrs } = useDragRect(entity, updateEntity, editable)

  const onDrop = handleDrop(entity.id)

  const remove = () => {
    removeEntity(entity.id, false)
  }

  const handleRotateChange = (rotate) => {
    updateEntity(entity.id, { rotate })
  }
  const overlay = <div style={{ color: 'var(--quad-primary-color)' }}><label>旋转角度：</label><InputNumber value={entity.rotate} onChange={handleRotateChange} style={{ width: 80 }} min={0} max={360} size="small" controls={false} /></div>
  const resetRotate = (e) => {
    e.stopPropagation()
    updateEntity(entity.id, { rotate: 0 })
  }

  return (
    <div ref={ref} className={`${styles.drag_block} ${editable ? styles.editable : ''}`} style={{ ...entity.style, transformOrigin: 'center', transform: `rotate(${- entity.rotate}deg)`, ...convertToStyle(entity?.styleConfig) }} {...attrs} onDragStart={handleDragStart('move')} onDrop={onDrop}>
      {children}
      <Mask className={styles.mask} />
      {['top', 'right', 'bottom', 'left'].map(flag => <div className={styles[`line__${flag}`]} {...attrs} onDragStart={handleDragStart(flag)} key={flag} />)}
      {['top_left', 'top_right', 'bottom_right', 'bottom_left'].map(flag => <div className={`${styles.circle} ${styles[flag]}`} {...attrs} onDragStart={handleDragStart(flag)} key={flag} />)}
      <Popover content={<BlockStyleConfigPanel {...entity} updateEntity={updateEntity} />} trigger="click">
        <MoreOutlined className={styles.more_btn} />
      </Popover>
      <div className={styles.rotate}>
        <Dropdown placement="top" overlay={overlay}>
          <SyncOutlined {...attrs} onDragStart={handleDragStart('rotate')} onClick={resetRotate} />
        </Dropdown>
      </div>
      <Popconfirm title="确认是否删除?" onConfirm={remove} >
        <DeleteOutlined className={styles.delete} />
      </Popconfirm>
    </div>
  )
}