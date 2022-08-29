import React from 'react'
import Button from '@/components/Button'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export default ({ zoom, zoomIn, zoomOut, min, max, style }) => {

  return (
    <div className={styles.zoom} style={style}>
      <Button tip="缩小" type="text" onClick={zoomOut} icon={<MinusOutlined />} disabled={zoom == min} />
      <span className={styles.scale}>{zoom.toFixed(2)}</span>
      <Button tip="放大" type="text" onClick={zoomIn} icon={<PlusOutlined />} disabled={zoom == max} />
    </div>
  )
}