import React, { useState, useRef } from 'react'
import { Tooltip } from 'antd'
import { useDragMove } from '@/hooks'
import { SyncOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export default ({ active, top = 200, left = 200, width = 200, height = 200 }) => {
  const ref = useRef(null)

  const [state, setState] = useState({
    top,
    left,
    width,
    height,
    rotate: 0,
  })

  const flags = ['top_left', 'top_right', 'bottom_right', 'bottom_left', 'top', 'right', 'bottom', 'left', 'move', 'rotate']
  const flagRef = useRef('move')
  const handleDrag = (dragMove) => {
    switch (flagRef.current) {
      case 'top_left':
        setState(state => ({ ...state, width: state.width - dragMove.x, height: state.height - dragMove.y, left: state.left + dragMove.x, top: state.top + dragMove.y }))
        break
      case 'top_right':
        setState(state => ({ ...state, width: state.width + dragMove.x, height: state.height - dragMove.y, top: state.top + dragMove.y }))
        break
      case 'bottom_right':
        setState(state => ({ ...state, width: state.width + dragMove.x, height: state.height + dragMove.y }))
        break
      case 'bottom_left':
        setState(state => ({ ...state, width: state.width - dragMove.x, height: state.height + dragMove.y, left: state.left + dragMove.x }))
        break
      case 'top':
        setState(state => ({ ...state, height: state.height - dragMove.y, top: state.top + dragMove.y }))
        break
      case 'right':
        setState(state => ({ ...state, width: state.width + dragMove.x }))
        break
      case 'bottom':
        setState(state => ({ ...state, height: state.height + dragMove.y }))
        break
      case 'left':
        setState(state => ({ ...state, width: state.width - dragMove.x, left: state.left + dragMove.x }))
        break
      case 'move':
        setState(state => {
          return {
            ...state,
            left: state?.left + dragMove?.x,
            top: state?.top + dragMove?.y,
          }
        })
        break
      case 'rotate':
        setState(state => {
          const rect = ref.current.getBoundingClientRect()
          const r = rect.height / 2 + 20
          const rad = state.rotate / 180 * Math.PI
          const sin = Math.sin(rad)
          const cos = Math.cos(rad)
          const rx = r * sin + dragMove.x
          const ry = r * cos - dragMove.y
          const rotate = state.rotate + Math.acos((r + dragMove.x * sin - dragMove.y * cos) / Math.sqrt((rx ** 2 + ry ** 2))) * 180 / Math.PI
          return {
            ...state,
            rotate,
          }
        })
        break
      default:
        break
    }
  }
  const dragMoveProps = useDragMove(handleDrag)

  const handleMouseDown = (flag) => (e) => {
    e.stopPropagation()
    flagRef.current = flag
    console.log(flagRef.current)
  }

  return (
    <div className={styles.drag_wrapper} ref={ref} style={{ top: state.top, left: state.left, width: state.width, height: state.height, transformOrigin: 'center', transform: `rotate(${- state.rotate}deg)` }} {...dragMoveProps} onMouseDown={handleMouseDown('move')}>
      {flags.slice(0, 4).map(flag => <div className={styles.circle} {...dragMoveProps} onMouseDown={handleMouseDown(flag)} key={flag} />)}
      {flags.slice(4, 8).map(flag => <div className={styles[`line__${flag}`]} {...dragMoveProps} onMouseDown={handleMouseDown(flag)} key={flag} />)}
      <Tooltip placement="bottom" title={state.rotate}>
        <div className={styles.rotate} {...dragMoveProps} onMouseDown={handleMouseDown('rotate')}>
          <SyncOutlined />
        </div>
      </Tooltip>
    </div>
  )
}