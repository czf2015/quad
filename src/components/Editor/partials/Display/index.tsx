// @ts-nocheck
import React from 'react'
import * as components from './partials'
import { useWidgets } from '@/hooks'
import { areas/* , components */ } from '@/mock/components'


export const Display = (props) => {
  const { widgets, ...extras } = useWidgets(areas)
  console.log(widgets)
  const render = (treeList, pid) => {
    return (
      <>
        {treeList.filter(item => item.pid == pid).map(item => {
          const Component = components[item.name]
          return (
            <Component {...item} {...extras} key={item.id}>
              {render(treeList, item.id)}
            </Component>
          )
        })}
      </>
    )
  }
  return render(widgets, 0)
}