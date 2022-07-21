// @ts-nocheck
import React from 'react'
import styles from './index.module.less'

export const Area = ({ name, id, pid, title, style, splitArea, removeArea, pullArea, children }: IArea) => {
  const split = (e) => {
    e.stopPropagation()
    // splitArea(id, false, 20)
    removeArea(id)
  }
  const remove = (e) => {
    e.stopPropagation()
    splitArea(id, true, 20)
  }
  const pull = (e) => {
    e.stopPropagation()
    splitArea(id, true, 20)
  }
  return (
    <div className={styles.area} style={style} onClick={split}>
      {children}
    </div>
  )
}