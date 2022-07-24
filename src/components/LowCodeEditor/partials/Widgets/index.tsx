// @ts-nocheck
import React from 'react'
import { Collapse } from 'antd'
import { Widget } from './partials'
import styles from './index.module.less'
import mock from '@/mock/categoryWidgetsList'

interface IWidgetsProps {
  categories: IWidgetCategory[]
}
export const Widgets = ({ categories = mock }: IWidgetsProps) => {
  return (
    <Collapse defaultActiveKey="chart">
      {categories.map(({ category, title, items = [] }) => {
        return (
          <Collapse.Panel header={title} key={category}>
            <div className={styles.columns}>
              {items.map(item => <Widget {...item} key={item.name} />)}
            </div>
          </Collapse.Panel>
        )
      })}
    </Collapse>
  )
}