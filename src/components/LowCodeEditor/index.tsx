import React from 'react'
import { WidgetsPanel, DisplayViewer, ConfigPanel } from './partials'
import { useEntities } from '@/hooks'
import styles from './index.module.less'
import page from '@/mock/page'


export default (props) => {
  const { entities, ...attrs } = useEntities(page?.content, false)

  return (
    <div className={styles['low-code-editor']}>
      {/* <WidgetsPanel /> */}
      <DisplayViewer entities={entities} {...attrs} />
      {/* <ConfigPanel /> */}
    </div>
  )
}