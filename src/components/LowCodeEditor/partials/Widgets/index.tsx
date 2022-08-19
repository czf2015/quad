// @ts-nocheck
import React from 'react'
import { Collapse } from '@/plugins/ui'
import { Widget } from './partials'
import styles from './index.module.less'
import mock from '@/config/widgets'

interface IWidgetsProps {
  categories: IWidgetCategory[]
}
export const Widgets = ({ categories = mock }: IWidgetsProps) => {
  return (
    <div className={styles.container}>
      <Collapse defaultActiveKey="base" expandIconPosition="end" bordered={false}>
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