import React, { useState, useRef } from 'react'
import { useDragMove } from '@/hooks'
import styles from './index.module.less'

export const Ellipse = ({ boxStyle = {}, value: ellipse, onChange: setEllipse, disabled }) => {
  // const [ellipse, setEllipse] = useState({ type: 'ellipse', rx: boxStyle.width / 2, ry: boxStyle.height / 2, offsetX: boxStyle.width / 2, offsetY: boxStyle.height / 2 })
  const clipPath = `ellipse(${ellipse?.rx}px ${ellipse?.ry}px at ${ellipse?.offsetX}px ${ellipse?.offsetY}px)`

  const flagRef = useRef('top')
  const handleDragMove = (dragMove) => {
    switch (flagRef.current) {
      case 'move':
        setEllipse(({ ...ellipse, offsetX: ellipse?.offsetX + dragMove?.x, offsetY: ellipse?.offsetY + dragMove?.y }))
        break
      case 'top':
        setEllipse(({ ...ellipse, ry: ellipse?.ry - dragMove?.y }))
        break
      case 'right':
        setEllipse(({ ...ellipse, rx: ellipse?.rx + dragMove?.x }))
        break
      case 'bottom':
        setEllipse(({ ...ellipse, ry: ellipse?.ry + dragMove?.y }))
        break
      case 'left':
        setEllipse(({ ...ellipse, rx: ellipse?.rx - dragMove?.x }))
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
          top: ellipse?.offsetY - ellipse.ry - 4,
          left: ellipse?.offsetX - 8
        }
      case 'right':
        return {
          top: ellipse.offsetY - 4,
          left: ellipse?.offsetX + ellipse.rx - 12
        }
      case 'bottom':
        return {
          top: ellipse?.offsetY + ellipse.ry - 12,
          left: ellipse?.offsetX - 8
        }
      case 'left':
        return {
          top: ellipse.offsetY - 4,
          left: ellipse?.offsetX - ellipse.rx - 4
        }
    }
  }

  return (
    <div className={`${styles.curtain} ${disabled ? styles.disabled : ''}`} style={{ clipPath }} {...attrs} onDragStart={handleDragStart('move')}>
      {['top', 'right', 'bottom', 'left'].map(flag => <div className={`${styles.circle} ${styles[flag]}`} {...attrs} onDragStart={handleDragStart(flag)} style={getPosition(flag)} key={flag} />)}
    </div>
  )
}