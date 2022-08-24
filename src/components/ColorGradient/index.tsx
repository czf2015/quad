import React from 'react'
import { Select } from '@/plugins/ui'
import { LinearGradient, RadialGradient, ColorPicker } from './partials'
import { useStore } from '@/hooks'
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
  const handleTypeChange = (type) => {
    const oldStore = store()
    switch (type) {
      case 'color':
        store(undefined, { ...oldStore, type, value: '#ccc', hidden: false, })
        break
      case 'linear':
        store(undefined, {
          ...oldStore,
          type,
          x1: 0,
          y1: 0,
          x2: 1,
          y2: 1,
          colorStops: [],
          repeat: 'no-repeat',
          hidden: false,
        })
        break
      case 'radial':
        store(undefined, {
          ...oldStore,
          type,
          cx: 0,
          cy: 0,
          rx: 0.5,
          ry: 0.5,
          colorStops: [],
          repeat: 'no-repeat',
          hidden: false,
        })
        break
      case 'image':
        store(undefined, {
          ...oldStore,
          type,
          url: '',
          position: {
            left: 0, // 0-100百分比
            top: 0, // ...
          },
          size: {
            width: {
              type: 0, // 0 百分比 1 像素 2 原比例,
              value: 100, // 0-100%, px, auto
            },
            height: {
              type: 0, // 0 百分比 1 像素 2 auto,
              value: 100, // 0-100%, px, auto
            }
          },
          repeat: 'no-repeat',
          hidden: false,
        })
        break
      default:
        break
    }
  }

  const type = store('type')
  const Gradient = type == 'radial' ? RadialGradient : type == 'linear' ? LinearGradient : ColorPicker

  return (
    <div className={styles.color_gradient}>
      <Select className={styles.select} value={type} onChange={handleTypeChange} options={options} /* bordered={false} */ />
      <Gradient store={store} />
    </div>
  )
}