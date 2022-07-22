// @ts-nocheck
import React from 'react'
import styles from './index.module.less'

export const Subarea = ({ name, id, pid, title, style, splitSubarea, removeWidget, pullSubarea, children }: IAreaProps) => {
  const split = (e) => {
    e.stopPropagation()
    // pullSubarea(id, 20)
    // splitSubarea(id, false, 20)
    removeWidget(id, true)
  }
  const remove = (e) => {
    e.stopPropagation()
    removeWidget(id, true)
  }
  const pull = (e) => {
    e.stopPropagation()
    pullSubarea(id, 20)
  }
  return (
    <div className={styles.subarea} style={style} onClick={split}>
      {children}
    </div>
  )
}