import React from 'react'
import InputDigital from '@/components/Form/partials/InputDigital'
import styles from './index.module.less'
import ColorStops from '@/components/ColorStops'
import { getLinearGradient, getInputDigitalProps } from '@/components/ColorGradient/helpers'


export const LinearGradient = ({ store }) => {
  return (
    <div className={styles.linear_gradient}>
      <div className={styles.effect} style={{ background: getLinearGradient(store()) }}></div>
      <div className={styles.range}>
        <div className={styles.flex}>
          <span>起始</span>
          <InputDigital {...getInputDigitalProps(store, 'x1')} />
          <InputDigital {...getInputDigitalProps(store, 'y1')} />
        </div>
        <div className={styles.flex}>
          <span>终止</span>
          <InputDigital {...getInputDigitalProps(store, 'x2')} />
          <InputDigital {...getInputDigitalProps(store, 'y2')} />
        </div>
        <ColorStops store={store} />
      </div>
    </div>
  )
}
