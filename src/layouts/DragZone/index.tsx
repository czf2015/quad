import React, { useState, useRef } from 'react'
import DragWrapper from '@/components/DragWrapper'
import { useDragZone } from '@/hooks'
import styles from './index.module.less'

export default ({ }) => {
  const [blocks, setBlocks] = useState([])
  const handle = (newBlock, flag = false) => {
    if (flag) {
      setBlocks(blocks => [...blocks, newBlock])
    } else {
      setBlocks(blocks => blocks.map(item => item.id == newBlock.id ? newBlock : item))
    }
  }
  const attrs = useDragZone(handle)

  return (
    <div className={styles.drag_zone} {...attrs}>
      {blocks.map(entity => {
        const updateEntity = (newVal) => {
          setBlocks(blocks => blocks.map(item => item.id == entity.id ? typeof newVal == 'function' ? newVal(entity) : newVal : item))
        }
        return (
          <DragWrapper {...entity} updateEntity={updateEntity} key={entity.id}></DragWrapper>
        )
      })}
    </div>
  )
}