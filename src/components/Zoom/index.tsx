import React from 'react'
import Button from '@/components/Button'
import { InputNumber } from 'antd'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export default ({ value, onChange, zoomIn, zoomOut, min, max, style }) => {
  return (
    <div className={styles.zoom} style={style}>
      <Button tip={intl("缩小")} type="text" onClick={zoomOut} icon={<MinusOutlined />} disabled={value == min} />
      <InputNumber className={styles.scale} value={value.toFixed(2)} onChange={onChange} min={min} max={max} size="small" />
      <Button tip={intl("放大")} type="text" onClick={zoomIn} icon={<PlusOutlined />} disabled={value == max} />
    </div>
  )
}