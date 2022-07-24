// @ts-nocheck
import React from 'react'
import { useToggle } from '@/hooks'
import { UpOutlined } from '@ant-design/icons'
import { renderList } from '@/components/helpers'
import mock from '@/mock/categoryWidgetsList'
import styles from './index.module.less'

const defaultIconSrc = 'https://marketplace.canva.cn/EW8HY/MAB60mEW8HY/2/tl/canva-MAB60mEW8HY.png'

const Icon = ({ src = defaultIconSrc, style = { width: 48, height: 48 } }) => <img src={src || defaultIconSrc} style={style} />

const Category = ({ title, description = title, items = [] }: IWidgetCategory) => {
  const [collapsed, toggleCollapsed] = useToggle()

  return (
    <dl className={styles.category}>
      <dt className={styles.summary} onClick={toggleCollapsed}>
        <span title={description}>{title}</span>
        <UpOutlined rotate={collapsed ? 180 : 0} />
      </dt>
      <dd className={styles.details} style={{ display: collapsed ? 'none' : 'block' }}>
        {items.map(({ name, title, description = title, icon }, idx) => {
          return (
            <div className={styles.widget} title={description} draggable key={name}>
              <Icon src={icon} />
              <span>{title}</span>
            </div>
          )
        })}
      </dd>
    </dl>
  )
}

// =======================================================================
interface IWidgetsProps {
  categories: IWidgetCategory[]
}

export const Widgets = ({ categories = mock }: IWidgetsProps) => {
  return (
    <div className={styles.categories}>
      {renderList(categories, Category, 'category')}
    </div>
  )
}