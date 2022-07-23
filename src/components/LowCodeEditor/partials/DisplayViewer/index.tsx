// @ts-nocheck
import React from 'react'
import * as Entities from './partials'
import { useStore } from '@/hooks'


export const DisplayViewer = ({ entities, updateEntity, removeEntity, splitSubarea, pullSubarea, pid = 0 }) => {
  const store = useStore({ isHorizontal: false, hiddenClip: false })

  const render = (treeList, pid) => {
    return (
      <>
        {treeList.filter(item => item.pid == pid).map((item) => {
          const Component = Entities[item.name]
          return item.name == 'Subarea' ? (
            <Component {...item} store={store} removeEntity={removeEntity} splitSubarea={splitSubarea} pullSubarea={pullSubarea} key={item.id}>
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