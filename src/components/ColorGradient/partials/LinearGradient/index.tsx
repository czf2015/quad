import React from 'react'
import ColorPicker from '@/components/ColorPicker'
import InputDigital from '@/components/Form/partials/InputDigital'
import { PlusOutlined } from '@ant-design/icons';
import styles from './index.module.less'

export const LinearGradient = (props) => {
  const { store } = props
  const attrs = {
    min: 0,
    max: 1,
    controls: false
  }
  const getLinearGradient = (angle, colorStops) => {
    colorStops = colorStops.map(({ type, offset, color }) => `${color} ${offset}${type == 1 ? 'px' : '%' }`).join(', ')
    return `linear-gradient(0deg, )` 
  }
  return (
    <div className={styles.linear_gradient}>
      <div className={styles.effect} style={{ backgroundImage: }}></div>
      <div className={styles.range}>
        <div className={styles.flex}>
          <span>起始</span>
          <InputDigital label="x" value={store('x')} onChange={(value) => store('x', value)} {...attrs} />
          <InputDigital label="y" value={store('x')} onChange={(value) => store('y', value)} {...attrs} />
        </div>
        <div className={styles.flex}>
          <span>终止</span>
          <InputDigital label="x2" value={store('x2')} onChange={(value) => store('x2', value)} {...attrs} />
          <InputDigital label="y2" value={store('y2')} onChange={(value) => store('y2', value)} {...attrs} />
        </div>
      </div>
      <div>
        <h4 className={styles.flex}><span>中色点</span><PlusOutlined /></h4>
        <ColorPicker />
      </div>
      <div></div>
    </div>
  )
}
