import React from 'react'
import Picker from '@/components/ColorPicker'
import styles from './index.module.less'


export const ColorPicker = ({ store }) => {
  const handleChange = (value) => {
    store('color', value)
  }

  return (
    <div className={styles.color_picker}>
      <div className={styles.effect} style={{ background: store('color') }}></div>
      <div className={styles.range}>
        <Picker value={store('color')} onChange={handleChange} />
      </div>
    </div>
  )
}
