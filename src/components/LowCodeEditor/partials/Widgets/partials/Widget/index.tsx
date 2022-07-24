// @ts-nocheck
import React from 'react'
import styles from './index.module.less'

const defaultIconSrc = 'https://marketplace.canva.cn/EW8HY/MAB60mEW8HY/2/tl/canva-MAB60mEW8HY.png'

const Icon = ({ src = defaultIconSrc, style = { width: 48, height: 48 } }) => <img src={src || defaultIconSrc} style={style} />

export const Widget = ({ name, title, description = title, icon }: IWidget) => {
  return (
    <div className={styles.widget} title={description} draggable key={name}>
      <Icon src={icon} />
      <span>{title}</span>
    </div>
  )
}