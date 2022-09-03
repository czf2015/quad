import React, { useState, useRef, useEffect } from 'react'
import { Popconfirm, InputNumber, Dropdown, Popover } from 'antd'
import { useDragMove } from '@/hooks'
import styles from './index.module.less'
import uuid from '@/plugins/uuid'

const getPoints = (w, h, n, startAngle) => {
  const result = []
  const r = w > h ? h / 2 : w / 2
  for (let i = 0; i < n; i++) {
    const rad = (startAngle / 180 + 2 * i / n) * Math.PI
    result.push(
      {
        x: w / 2 + r * Math.cos(rad),
        y: h / 2 - r * Math.sin(rad),
        id: uuid()
      }
    )
  }
  return result
}

export const Polygon = ({ boxStyle = {}, value: polygon = { type: 'polygon', angle: 90, points: getPoints(boxStyle?.width, boxStyle?.height, 5, 90) }, onChange: setPolygon, disabled, }) => {
  // const [polygon, setPolygon] = useState({ type: 'polygon', top: 0, right: 0, bottom: 0, left: 0, round: 0 })
  const clipPath = `polygon(${polygon?.points?.map(point => `${point.x}px ${point.y}px`).join(',')})`

  const flagRef = useRef('move')
  const handleDragMove = (dragMove) => {
    const points = polygon.points.map(item => {
      if (item.id == flagRef.current || flagRef.current == 'move') {
        item.x += dragMove.x
        item.y += dragMove.y
      }
      return item
    })
    setPolygon({ ...polygon, points })
  }
  const { onDragStart, ...attrs } = useDragMove(handleDragMove)
  const handleDragStart = (flag) => (e) => {
    flagRef.current = flag
    onDragStart(e)
  }

  const polygonRef = useRef(null)
  const handleAngleChange = (angle) => {
    setPolygon?.({ ...polygon, angle, points: getPoints(boxStyle?.width, boxStyle?.height, polygon.points.length, angle) })
    setTimeout(() => {
      polygonRef.current.querySelector(`[data-id=angle]`).focus()
    })
  }
  const handleEdgesChange = (edges) => {
    setPolygon?.({ ...polygon, points: getPoints(boxStyle?.width, boxStyle?.height, edges, polygon.angle) })
    setTimeout(() => {
      polygonRef.current.querySelector(`[data-id=edges]`).focus()
    })
  }
  const contextMenu = (
    <>
      <InputNumber data-id="edges" style={{ width: 88 }} value={polygon.points.length} onChange={handleEdgesChange} min={3} step={1} size="small" addonBefore={<img src="/icons/Polygon.svg" width="12px" height="12px" />} />
      <InputNumber data-id="angle" style={{ width: 114 }} value={polygon.angle} onChange={handleAngleChange} min={-360} max={360} step={90} size="small" addonBefore={<img src="/icons/Angle.svg" width="8px" height="8px" />} addonAfter="°" />
    </>
  )

  return (
    <Dropdown overlay={contextMenu} placement="bottom" trigger={["contextMenu"]} getPopupContainer={triggerNode => polygonRef.current}>
      <div ref={polygonRef} className={`${styles.curtain} ${disabled ? styles.disabled : ''}`} style={{ clipPath }} {...attrs} onDragStart={handleDragStart('move')}>
        {polygon?.points?.map(point => {
          return (
            <div className={styles.circle} {...attrs} onDragStart={handleDragStart(point.id)} style={{ left: point?.x, top: point?.y }} key={point.id} />
          )
        })}
      </div>
    </Dropdown>
  )
}