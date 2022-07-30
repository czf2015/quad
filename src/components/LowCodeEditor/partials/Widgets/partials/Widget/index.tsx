// @ts-nocheck
import React from 'react'
import { icons } from '@/register'
import styles from './index.module.less'


export const Widget = ({ name, title, description = title, icon }: IWidget) => {
  const onDragStart = (e) => {
    e.dataTransfer.setData("dragWidgetName", name);
  };

  const DefaultIcon = () => <img src={`/icons/${name}.svg`} style={{ width: 24, height: 24 }} />
  const Icon = icons[name] || DefaultIcon

  return (
    <div className={`${styles.widget} quad-card`} title={description} onDragStart={onDragStart} draggable key={name}>
      <Icon style={{ fontSize: 24 }} />
      <span className={styles.title}>{title}</span>
    </div>
  )
}