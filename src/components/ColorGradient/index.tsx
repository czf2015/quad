import React from 'react'
import { Select } from '@/plugins/ui'
import { LinearGradient, RadialGradient, ColorPicker, handleTypeChange } from './partials'
import styles from './index.module.less'

const options = [
  {
    label: '颜色',
    value: 'color'
  },
  {
    label: '线性渐变',
    value: 'linear'
  },
  {
    label: '径向渐变',
    value: 'radial'
  }
]

const defaultColor = {
  type: 'linear',
  x1: 0,
  y1: 0,
  x2: 1,
  y2: 1,
  colorStops: [
    { type: 0, offset: 0, color: 'red' },
    { type: 0, offset: 50, color: 'green' },
    { type: 0, offset: 100, color: 'blue' },
  ],
  repeat: 'no-repeat'
}

export default ({ store }) => {
  const type = store('type')
  const Gradient = type == 'radial' ? RadialGradient : type == 'linear' ? LinearGradient : ColorPicker

  return (
    <div className={styles.color_gradient}>
      <Select className={styles.select} value={type} onChange={handleTypeChange(store)} options={options} /* bordered={false} */ />
      <Gradient store={store} />
    </div>
  )
}