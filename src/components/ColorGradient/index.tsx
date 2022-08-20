import React from 'react'
import { Select } from '@/plugins/ui'
import { LinearGradient, RadialGradient } from './partials'
import { useStore } from '@/hooks'
import styles from './index.module.less'

const options = [
  {
    label: '线性渐变',
    value: 'linear'
  },
  {
    label: '径向渐变',
    value: 'radial'
  }
]

export default ({ color = { type: 'linear' } }) => {
  const store = useStore(color)
  const handleChange = (value) => {
    store('type', value)
  }

  const type = store('type')
  const Gradient = type == 'radial' ? RadialGradient : LinearGradient

  return (
    <div className={styles.color_gradient}>
      <Select value={type} onChange={handleChange} options={options} />
      <Gradient store={store} />
    </div>
  )
}