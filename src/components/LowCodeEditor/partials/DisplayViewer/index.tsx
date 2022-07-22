// @ts-nocheck
import React from 'react'
import * as Widgets from './partials'
import { useWidgets } from '@/hooks'
import mock from '@/mock/treeList'


export const DisplayViewer = ({ treeList = mock, pid = 0 }) => {
  const { widgets, removeWidget, splitSubarea, pullSubarea } = useWidgets(treeList)

  const render = (treeList, pid) => {
    return (
      <>
        {treeList.filter(item => item.pid == pid).map((item) => {
          const Component = Widgets[item.name]
          return item.name == 'Subarea' ? (
            <Component {...item} removeWidget={removeWidget} splitSubarea={splitSubarea} pullSubarea={pullSubarea} key={item.id}>
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

  return render(widgets, pid)
}