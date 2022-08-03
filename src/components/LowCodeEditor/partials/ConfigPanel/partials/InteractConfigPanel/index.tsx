import React from 'react'
import TabsPanel from '@/components/TabsPanel'
import { Handlers, Binds } from './partials'

export const InteractConfigPanel = () => {
  const tabs = [
    {
      tab: '事件绑定',
      content: <Binds />,
    },
    {
      tab: '事件处理',
      content: <Handlers />,
    },
  ]

  return <TabsPanel tabs={tabs} />
}