// @ts-nocheck
import React from 'react'
import * as Widgets from './partials'
import { useWidgets } from '@/hooks'
import { areas/* , components */ } from '@/mock/components'


export const Display = (props) => {
  const { widgets, removeWidget, splitArea, pullArea } = useWidgets(areas)
  const render = (treeList, pid) => {
    return (
      <>
        {treeList.filter(item => item.pid == pid).map((item) => {
          const Component = Widgets[item.name]
          return item.name == 'Area' ? (
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