import React, { useState } from 'react'
import { LinearGradient, RadialGradient } from './partials'
import { useStore } from '@/hooks'
import styles from './index.module.less'

export default ({ type: initialType = 'linear', value }) => {
  const [type, setType] = useState(initialType)
  const Gradient = type == 'radial' ? RadialGradient : LinearGradient
  const store = useStore(value)

  return (
    <div className={styles.color_gradient}>
      <div></div>
      <Gradient store={store} />
    </div>
  )
}