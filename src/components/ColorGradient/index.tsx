import React, { useState } from 'react'
import { LinearGradient, RadialGradient } from './partials'
import { useStore } from '@/hooks'
import styles from './index.module.less'

export default ({ type: initialType = 0, value, onChange }) => {
  const [type, setType] = useState(initialType)
  const Gradient = type == 1 ? RadialGradient : LinearGradient
  const [color, setColor] = useStore(value)
  const handleChange = (value) => {
    onChange?.(value)
    setColor(value)
  }
  
  return (
    <div className={StyleSheet.color_gradient}>
      <div></div>
      <Gradient color={color} onChange={handleChange} />
    </div>
  )
}