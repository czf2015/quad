import React from 'react'
import { Button, Tooltip } from 'antd'
import styles from './index.module.less'

export default ({ title, tip, disabled = false, onClick = () => console.log(title || tip), type = 'primary', icon }) => (
  <Tooltip title={tip} placement="top" color='blue' >
    <Button className={styles.button} type={type} disabled={disabled} onClick={onClick} icon={icon}>{title}</Button>
  </Tooltip>
)