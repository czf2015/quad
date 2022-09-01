import React from 'react'
import styles from './index.module.less'


export default ({ className = '', visible = true, style }) => <div className={`${styles.mask} ${className}`} style={{ display: visible ? undefined : 'none', ...style }} />