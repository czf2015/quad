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
    <div className={`${styles.container} quad-scrollbar`}>
      <Collapse defaultActiveKey="chart" expandIconPosition="end">
        {categories.map(({ category, title, items = [] }) => {
          return (
            <Collapse.Panel header={title} key={category}>
              <div className={styles.grid}>
                {items.map(item => <Widget {...item} key={item.name} />)}
              </div>
            </Collapse.Panel>
          )
        })}
      </Collapse>
    </div>
  )
}