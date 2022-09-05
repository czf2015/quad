import React, { useState, useRef } from 'react'
import { useDragMove } from '@/hooks'
import styles from './index.module.less'

export const Circle = ({ boxStyle = {}, value: circle, onChange: setCircle, disabled, }) => {
  // const [circle, setCircle] = useState({ type: 'circle', r: boxStyle.width < boxStyle.height ? boxStyle.width / 2 : boxStyle.height / 2, offsetX: boxStyle.width / 2, offsetY: boxStyle.height / 2 })
  const clipPath = `circle(${circle?.r}px at ${circle?.offsetX}px ${circle?.offsetY}px)`

  const flagRef = useRef('top')
  const handleDragMove = (dragMove) => {
    switch (flagRef.current) {
      case 'move':
        setCircle(({ ...circle, offsetX: circle.offsetX + dragMove.x, offsetY: circle.offsetY + dragMove.y }))
        break
      case 'top':
        setCircle(({ ...circle, r: circle.r - dragMove.y }))
        break
      case 'right':
        setCircle(({ ...circle, r: circle.r + dragMove.x }))
        break
      case 'bottom':
        setCircle(({ ...circle, r: circle.r + dragMove.y }))
        break
      case 'left':
        setCircle(({ ...circle, r: circle.r - dragMove.x }))
        break
      default:
        break
    }
  }
  const { onDragStart, ...attrs } = useDragMove(handleDragMove)
  const handleDragStart = (flag) => (e) => {
    flagRef.current = flag
    onDragStart(e)
  }

  const getPosition = (flag) => {
    switch (flag) {
      case 'top':
        return {
          top: circle?.offsetY - circle.r - 4,
          left: circle?.offsetX - 8
        }
      case 'right':
        return {
          top: circle.offsetY - 4,
          left: circle?.offsetX + circle.r - 12
        }
      case 'bottom':
        return {
          top: circle?.offsetY + circle.r - 12,
          left: circle?.offsetX - 8
        }
      case 'left':
        return {
          top: circle.offsetY - 4,
          left: circle?.offsetX - circle.r - 4
        }
    }
  }

  return (
    <div className={`${styles.curtain} ${disabled ? styles.disabled : ''}`} style={{ clipPath, left: boxStyle?.paddingLeft, top: boxStyle?.paddingTop,  }} {...attrs} onDragStart={handleDragStart('move')}>
      {['top', 'right', 'bottom', 'left'].map(flag => <div className={`${styles.circle} ${styles[flag]}`} {...attrs} onDragStart={handleDragStart(flag)} style={getPosition(flag)} key={flag} />)}
    </div>
  )
}