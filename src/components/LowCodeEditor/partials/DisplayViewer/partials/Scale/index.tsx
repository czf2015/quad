// @ts-nocheck
import React from 'react'
import { getNumbers } from './helpers'
import styles from './index.module.less'

export const Scale = ({ len = 1920, gap = 5, direction = 'left', style }) => {
  const numbers = getNumbers(len, gap)

  const isHorizontal = direction == 'left'
  const scaleStyle = isHorizontal ? { width: len, borderTop: '1px solid #222' } : { flexDirection: 'column', height: len, borderLeft: '1px solid #222' }

  return (
    <div className={styles.scale} style={{ ...scaleStyle, ...style }}>
      {numbers.map((number, idx) => {
        const isShow = idx % 10 == 0
        const length = isShow ? 16 : idx % 5 == 0 ? 8 : 4
        const splitlineStyle = isHorizontal ? { width: 1, height: length } : { width: length, height: 1 }
        const numberStyle = isHorizontal ? { top: 4, left: 2 } : { top: 0, left: 4 }
        return (
          <div className={styles.splitline} style={splitlineStyle} key={idx}>
            <span style={{ display: isShow ? '' : 'none', ...numberStyle }}>{number || ''}</span>
          </div>
        )
      })}
    </div>
  )
}
