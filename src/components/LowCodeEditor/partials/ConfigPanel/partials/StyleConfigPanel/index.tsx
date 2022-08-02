// @ts-nocheck
import React from 'react'
import { Code } from '@/plugins/ui';
import styles from './index.module.less'


export const StyleConfigPanel = ({ content }) => {
  return (
    <div className={styles.container}>
      <Code
        value={content}
        options={{
          mode: 'css',
        }}
        onChange={(editor: any, data: any, value: string) => { }}
        onBeforeChange={(editor: any, data: any, value: string) => { }}
      />
    </div>
  )
}