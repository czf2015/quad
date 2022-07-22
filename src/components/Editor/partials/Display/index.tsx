// @ts-nocheck
import React from 'react'
import * as Widgets from './partials'
import { useWidgets } from '@/hooks'
import { nodeList } from '@/mock/components'


export const Display = (props) => {
  const { widgets, removeWidget, splitArea, pullArea } = useWidgets(nodeList)
  const render = (treeList, pid) => {
    return (
      <>
        {treeList.filter(item => item.pid == pid).map((item) => {
          const Component = Widgets[item.name]
          return item.name == 'Subarea' ? (
            <Component {...item} removeWidget={removeWidget} splitArea={splitArea} pullArea={pullArea} key={item.id}>
              {render(treeList, item.id)}
            </Component>
          ) : (
            <Widgets.Wrapper {...item} removeWidget={removeWidget} key={item.id}>
              <Component {...item} />
            </Widgets.Wrapper>
          )
        })}
      </>
    )
  }
  return render(widgets, 0)
}