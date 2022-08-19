import React, { useState } from 'react'
import { ChromePicker as ColorPicker } from 'react-color'

export default ({ value, onChange }) => {
  const [color, setColor] = useState(value)
  const handleChange = (value) => {
    onChange?.(value)
    setColor(value)
  }
  return <ColorPicker color={color} onChange={handleChange} />
}