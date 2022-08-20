import React from 'react'
import InputDigital from '@/components/Form/partials/InputDigital'
import styles from './index.module.less'
import ColorStops from '@/components/ColorStops'
import { getRadialGradient, getInputDigitalProps } from '@/components/ColorGradient/helpers'

export const RadialGradient = ({ store }) => {
  return (
    <div className={styles.radial_gradient}>
      <div className={styles.effect} style={{ background: getRadialGradient(store()) }}></div>
      <div className={styles.range}>
        <div className={styles.flex}>
          <span>圆心</span>
          <InputDigital {...getInputDigitalProps(store, 'cx')} />
          <InputDigital {...getInputDigitalProps(store, 'cy')} />
        </div>
        <div className={styles.flex}>
          <span>轴半径</span>
          <InputDigital {...getInputDigitalProps(store, 'rx')} />
          <InputDigital {...getInputDigitalProps(store, 'ry')} />
        </div>
        <ColorStops store={store} />
      </div>
    </div>
  )
}
