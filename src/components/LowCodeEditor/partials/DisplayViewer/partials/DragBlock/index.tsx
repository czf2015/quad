import React from 'react'
import { Popconfirm, InputNumber, Dropdown, Popover } from 'antd'
import BlockStyleConfigPanel from "@/components/LowCodeEditor/partials/ConfigPanel/partials/StyleConfigPanel/partials/BlockPanel";
import Mask from '@/components/Mask';
import { useDragRect } from '@/hooks'
import { SyncOutlined, DeleteOutlined, MoreOutlined } from '@ant-design/icons'
import { convertToStyle } from '@/components/ColorGradient/helpers';
import styles from './index.module.less'
import ClipPath from '@/components/ClipPath';

export const DragBlock = ({ removeEntity, updateEntity, handleDrop, children, active, setActive, editable = false, ...entity }) => {
  const { ref, handleDragStart, ...attrs } = useDragRect(entity, updateEntity, editable)

  const onDrop = handleDrop(entity.id)

  const remove = () => {
    removeEntity(entity.id, false)
  }

  const handleRotateChange = (rotate) => {
    updateEntity(entity.id, { rotate: rotate == 360 ? 0 : rotate })
  }

  return (
    <div ref={ref} data-width={entity?.style?.width} data-height={entity?.style?.height} className={`${styles.drag_block} ${editable ? styles.editable : ''} ${entity?.rotate == 0 ? styles.resize : ''}`} style={{ ...entity.style, transform: `rotate(${- entity.rotate}deg)`, ...convertToStyle(entity?.styleConfig) }} {...attrs} onDragStart={handleDragStart('move')} onDrop={onDrop}>
      {children}
      <Mask className={styles.mask} />
      <Dropdown overlay={<InputNumber style={{ width: 140, textAlign: 'center' }} value={entity.rotate} onChange={handleRotateChange} min={0} max={360} step={5} size="small" addonBefore={<img src="/icons/Angle.svg" width="8px" height="8px" />} addonAfter="°" />} placement="bottom">
        <SyncOutlined className={styles.rotate} {...attrs} onDragStart={handleDragStart('rotate')} />
      </Dropdown>
      {['top', 'right', 'bottom', 'left'].map(flag => <div className={styles[`line__${flag}`]} {...attrs} onDragStart={handleDragStart(flag)} key={flag} />)}
      {['top_left', 'top_right', 'bottom_right', 'bottom_left'].map(flag => <div className={`${styles.circle} ${styles[flag]}`} {...attrs} onDragStart={handleDragStart(flag)} key={flag} />)}
      <Popover content={<BlockStyleConfigPanel {...entity} updateEntity={updateEntity} />} trigger="click">
        <MoreOutlined className={styles.more_btn} />
      </Popover>
      <Popconfirm title="确认是否删除?" onConfirm={remove} >
        <DeleteOutlined className={styles.delete} />
      </Popconfirm>
      <ClipPath className={styles.clip} boxStyle={entity?.style} />
    </div>
  )
}