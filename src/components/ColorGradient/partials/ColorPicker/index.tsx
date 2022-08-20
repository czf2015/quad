import React from 'react'
import Picker from '@/components/ColorPicker'
import styles from './index.module.less'


export const ColorPicker = ({ store }) => {
  const handleChange = (value) => {
    store('value', value)
  }

  return (
    <div className={styles.color_picker}>
      <div className={styles.effect} style={{ background: store('value') }}></div>
      <div className={styles.range}>
        <Picker value={store('value')} onChange={handleChange} />
      </div>
    </div>
  )
}
