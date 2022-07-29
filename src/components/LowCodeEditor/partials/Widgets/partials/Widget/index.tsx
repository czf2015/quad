// @ts-nocheck
import React from 'react'
import { icons } from '@/register'
import styles from './index.module.less'


export const Widget = ({ name, title, description = title, icon }: IWidget) => {
  const onDragStart = (e) => {
    e.dataTransfer.setData("dragWidgetName", name);
  };

  const DefaultIcon = () => <img src={`/icons/${name}.svg`} />
  const Icon = icons[name] || DefaultIcon

  return (
    <div className={styles.widget} title={description} onDragStart={onDragStart} draggable key={name}>
      <Icon style={{ fontSize: 32 }} />
      <span>{title}</span>
    </div>
  )
}