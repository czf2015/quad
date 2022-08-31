import React, { useState } from 'react'
import { ChromePicker as ColorPicker } from 'react-color'


export default ({ value, onChange, width, height }) => {
  const [color, setColor] = useState(value)
  const handleChange = ({ hex: value }) => {
    setColor(value)
    onChange?.(value)
  }

  return (
    <ColorPicker color={color} onChange={handleChange} width={width} height={height} />
  )
}