import React from 'react'
import { PlusOutlined } from '@ant-design/icons';
import styles from './index.module.less'

export const ColumnTitle = ({ title, orderKey, orderKeys, setOrderKeys, openColumn }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("dragColumnKey", orderKey);
  }
  const handleDragOver = (e) => {
    e.preventDefault()
  }
  const handleDrop = (e) => {
    const dragColumnKey = e.dataTransfer.getData("dragColumnKey")
    setOrderKeys(_ => {
      const result = []
      let flag = 0
      orderKeys.forEach(item => {
        if (item == dragColumnKey) {
          flag = 1
        } else if (item == orderKey) {
          if (flag == 1) {
            result.push(orderKey)
            result.push(dragColumnKey)
          } else {
            result.push(dragColumnKey)
            result.push(orderKey)
          }
        } else {
          result.push(item)
        }
      })
      return result
    })
  }


  return (
    <div className={styles.column_title} onDragStart={handleDragStart} onDragOver={handleDragOver} onDrop={handleDrop} draggable>
      <span>{title}</span>
      <span className={`quad-circle ${styles.add_btn}`} onClick={openColumn}><PlusOutlined /></span>
    </div>
  )
}