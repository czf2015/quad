// @ts-nocheck
import React, { useState } from 'react'
import * as Entities from './partials'
import { useEntities } from '@/hooks'
import mock from '@/mock/treeList'


export const DisplayViewer = ({ treeList = mock, pid = 0, initials = { isHorizontal: false, hiddenClip: false } }) => {
  const { entities, snapShort, removeEntity, splitSubarea, pullSubarea } = useEntities(treeList)
  const [isHorizontal, setIsHorizontal] = useState(initials.isHorizontal)
  const [hiddenClip, setHiddenClip] = useState(initials.hiddenClip)

  const render = (treeList, pid) => {
    return (
      <>
        {treeList.filter(item => item.pid == pid).map((item) => {
          const Component = Entities[item.name]
          return item.name == 'Subarea' ? (
            <Component {...item} removeEntity={removeEntity} isHorizontal={isHorizontal} setIsHorizontal={setIsHorizontal} hiddenClip={hiddenClip} setHiddenClip={setHiddenClip} splitSubarea={splitSubarea} pullSubarea={pullSubarea} key={item.id}>
              {render(treeList, item.id)}
            </Component>
          ) : (
            <Entities.Wrapper {...item} removeEntity={removeEntity} key={item.id}>
              <Component {...item} />
            </Entities.Wrapper>
          )
        })}
      </>
    )
  }

  return render(entities, pid)
}