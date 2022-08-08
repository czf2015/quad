import React, { useEffect } from 'react'
import { Button, Tooltip } from '@/plugins/ui'
import styles from './index.module.less'

export default ({ id, title/*  = 'button' */, tip, disabled = false, onClick = () => console.log(title || tip), type = 'primary', icon, updateEntity, }) => {

  useEffect(() => {
    updateEntity?.(id, {
      meta: {
        binds: [
          {
            label: '按钮',
            value: 'button'
          }
        ]
      }
    })
  }, [])

  return (
    <Tooltip title={tip} placement="top" color='blue' >
      <Button className={styles.button} type={type} disabled={disabled} data-bind="button" onClick={onClick} icon={icon}>{title}</Button>
    </Tooltip>
  )
}