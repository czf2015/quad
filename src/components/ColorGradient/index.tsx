import React from 'react'
import { Select } from '@/plugins/ui'
import { LinearGradient, RadialGradient, ColorPicker, handleTypeChange } from './partials'
import { BACKGROUND_OPTIONS } from '@/constants/OPTIONS'
import styles from './index.module.less'

export default ({ store }) => {
  const type = store('type')
  const Gradient = type == 'radial' ? RadialGradient : type == 'linear' ? LinearGradient : ColorPicker

  return (
    <div className={styles.color_gradient}>
      <Select className={styles.select} value={type} onChange={handleTypeChange(store)} options={BACKGROUND_OPTIONS} /* bordered={false} */ />
      <Gradient store={store} />
    </div>
  )
}