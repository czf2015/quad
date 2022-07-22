// @ts-nocheck
import React, { useState } from 'react'
import * as Widgets from './partials'
import { useWidgets } from '@/hooks'
import mock from '@/mock/treeList'


export const DisplayViewer = ({ treeList = mock, pid = 0, initials = { isHorizontal: false, hiddenClip: false } }) => {
  const { widgets, removeWidget, splitSubarea, pullSubarea } = useWidgets(treeList)
  const [isHorizontal, setIsHorizontal] = useState(initials.isHorizontal)
  const [hiddenClip, setHiddenClip] = useState(initials.hiddenClip)

  const render = (treeList, pid) => {
    return (
      <>
        {treeList.filter(item => item.pid == pid).map((item) => {
          const Component = Widgets[item.name]
          return item.name == 'Subarea' ? (
            <Component {...item} removeWidget={removeWidget} isHorizontal={isHorizontal} setIsHorizontal={setIsHorizontal} hiddenClip={hiddenClip} setHiddenClip={setHiddenClip} splitSubarea={splitSubarea} pullSubarea={pullSubarea} key={item.id}>
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