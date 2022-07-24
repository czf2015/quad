import React from 'react'
import { Button, Tooltip } from 'antd'

export default ({ title, onClick, icon }) => (
  <Tooltip title={title} placement="top" color='blue' >
    <Button onClick={onClick} type="text" icon={icon} />
  </Tooltip>
)