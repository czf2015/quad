import React, { useState, useRef } from 'react'
import { useDragMove } from '@/hooks'
import styles from './index.module.less'

export const Inset = ({ boxStyle = {} }) => {
  const [inset, setInset] = useState({ type: 'inset', top: 0, right: 0, bottom: 0, left: 0, round: 0 })
  const clipPath = `inset(${inset?.top}px ${inset?.right}px ${inset?.bottom}px ${inset?.left}px round ${inset?.round}px)`

  const flagRef = useRef('top')
  const handleDragMove = (dragMove) => {
    switch (flagRef.current) {
      case 'move':
        setInset(inset => ({ ...inset, top: inset?.top + dragMove?.y, right: inset?.right - dragMove?.x, bottom: inset?.bottom - dragMove?.y, left: inset?.left + dragMove?.x }))
        break
      case 'top':
        setInset(inset => ({ ...inset, top: inset?.top + dragMove?.y }))
        break
      case 'right':
        setInset(inset => ({ ...inset, right: inset?.right - dragMove?.x }))
        break
      case 'bottom':
        setInset(inset => ({ ...inset, bottom: inset?.bottom - dragMove?.y }))
        break
      case 'left':
        setInset(inset => ({ ...inset, left: inset?.left + dragMove?.x }))
        break
      case 'top_left':
      case 'bottom_left':
        setInset(inset => ({ ...inset, round: inset?.round + dragMove?.x }))
        break
      case 'top_right':
      case 'bottom_right':
        setInset(inset => ({ ...inset, round: inset?.round - dragMove?.x }))
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
          top: inset?.top - 4,
          left: (boxStyle.width + inset?.left - inset?.right) / 2 - 8
        }
      case 'right':
        return {
          top: (boxStyle.height + inset?.top - inset?.bottom) / 2 - 8,
          right: inset?.right - 4
        }
      case 'bottom':
        return {
          bottom: inset?.bottom - 4,
          left: (boxStyle.width + inset?.left - inset?.right) / 2 - 8
        }
      case 'left':
        return {
          top: (boxStyle.height + inset?.top - inset?.bottom) / 2 - 8,
          left: inset?.left - 4
        }
      case 'top_left':
        return {
          top: inset?.top + inset?.round + 4,
          left: inset?.left + inset?.round + 4
        }
      case 'top_right':
        return {
          top: inset?.top + inset?.round + 4,
          right: inset?.right + inset?.round + 4
        }
      case 'bottom_right':
        return {
          bottom: inset?.bottom + inset?.round + 4,
          right: inset?.right + inset?.round + 4
        }
      case 'bottom_left':
        return {
          bottom: inset?.bottom + inset?.round + 4,
          left: inset?.left + inset?.round + 4
        }
    }
  }

  return (
    <div className={styles.curtain} style={{ clipPath }} {...attrs} onDragStart={handleDragStart('move')}>
      {['top', 'right', 'bottom', 'left'].map(flag => <div className={`${styles.circle} ${styles[flag]}`} {...attrs} onDragStart={handleDragStart(flag)} style={getPosition(flag)} key={flag} />)}
      {['top_left', 'top_right', 'bottom_right', 'bottom_left'].map(flag => <div className={`${styles.circle} ${styles[flag]}`} {...attrs} onDragStart={handleDragStart(flag)} style={getPosition(flag)} key={flag} />)}
    </div>
  )
}