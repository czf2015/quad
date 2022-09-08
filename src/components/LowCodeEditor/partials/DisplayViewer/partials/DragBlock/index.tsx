import React from 'react'
import { Popconfirm, InputNumber, Dropdown, Tooltip, Popover } from 'antd'
import BlockStyleConfigPanel from "@/components/LowCodeEditor/partials/ConfigPanel/partials/StyleConfigPanel/partials/BlockPanel";
import Mask from '@/components/Mask';
import ClipPath from '@/components/ClipPath';
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
    updateEntity(entity.id, { styleConfig: { rotate: rotate % 360 } })
  }
  const resetRotate = () => {
    updateEntity(entity.id, { styleConfig: { rotate: 0 } })
  }
  const angleIcon = <Tooltip title="复原"><img className={styles.angle_icon} src="/icons/Angle.svg" onClick={resetRotate} /></Tooltip>
  const rotateInput = <InputNumber className={styles.rotate_input} value={entity?.styleConfig?.rotate} onChange={handleRotateChange} step={5} size="small" addonBefore={angleIcon} controls={false} />

  const handleClipPathChange = (clipPath) => {
    updateEntity(entity?.id, { styleConfig: { clipPath } })
  }

  return (
    <div ref={ref} data-width={entity?.style?.width} data-height={entity?.style?.height} className={`${styles.drag_block} ${editable ? styles.editable : ''} ${!entity?.styleConfig?.rotate ? styles.resize : ''}`} style={{ ...entity.style, ...convertToStyle(entity?.styleConfig, false) }} {...attrs} onDragStart={handleDragStart('move')} onDrop={onDrop}>
      {/* <Mask className={styles.mask} /> */}
      <div className={styles.container} style={{ ...convertToStyle(entity?.styleConfig, true) }}>
        {children}
      </div>
      <Dropdown overlay={rotateInput} placement="bottom">
        <SyncOutlined className={styles.rotate} {...attrs} onDragStart={handleDragStart('rotate')} />
      </Dropdown>
      {['top', 'right', 'bottom', 'left'].map(flag => <div className={styles[`line__${flag}`]} {...attrs} onDragStart={handleDragStart(flag)} key={flag} />)}
      {['top_left', 'top_right', 'bottom_right', 'bottom_left'].map(flag => <div className={`${styles.circle} ${styles[flag]}`} {...attrs} onDragStart={handleDragStart(flag)} key={flag} />)}
      <Popconfirm title="确认是否删除?" onConfirm={remove}>
        <DeleteOutlined className={styles.delete_btn} />
      </Popconfirm>
      <Popover content={<BlockStyleConfigPanel {...entity} updateEntity={updateEntity} />} trigger="click" placement="bottom">
        <MoreOutlined className={styles.more_btn} />
      </Popover>
      <ClipPath className={styles.clip} boxStyle={entity?.style} value={entity?.styleConfig?.clipPath} onChange={handleClipPathChange} disabled={!editable || entity?.styleConfig?.rotate} />
    </div>
  )
}