// @ts-nocheck
import React from 'react'
import styles from './index.module.less'

export const Subarea = ({ name, id, pid, title, style, splitArea, removeWidget, pullArea, children }: IAreaProps) => {
  const split = (e) => {
    e.stopPropagation()
    // pullArea(id, 20)
    // splitArea(id, false, 20)
    removeWidget(id, true)
  }
  const remove = (e) => {
    e.stopPropagation()
    removeWidget(id, true)
  }
  const pull = (e) => {
    e.stopPropagation()
    pullArea(id, 20)
  }
  return (
    <div className={styles.subarea} style={style} onClick={split}>
      {children}
    </div>
  )
}