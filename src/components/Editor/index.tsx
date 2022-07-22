import React from 'react'
import { WidgetsPanel, DisplayViewer, ConfigPanel } from './partials'
import styles from './index.module.less'

export default (props) => {
  return (
    <div className={styles['low-code-editor']}>
      {/* <WidgetsPanel /> */}
      <DisplayViewer />
      {/* <ConfigPanel /> */}
    </div>
  )
}