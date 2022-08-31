import React, { useState } from 'react'
import { Button, Tooltip } from 'antd';
import { copyText } from '@/utils/dom'
import { CopyOutlined } from '@ant-design/icons';
import styles from './index.module.less'

export default ({ value, className = '', style }) => {
  const [tooltip, setTooltip] = useState('复制')
  const copy = () => {
    copyText(value)
    setTooltip('复制成功！')
    setTimeout(() => {
      setTooltip('复制')
    }, 1000)
  }

  return (
    <Tooltip title={tooltip}>
      <Button icon={<CopyOutlined />} className={`${styles.copy} ${className}`} style={style} size="small" onClick={copy} />
    </Tooltip>
  )
}