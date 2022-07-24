// @ts-nocheck
import React from 'react'
import * as Entities from './partials'
import { useStore } from '@/hooks'


export const DisplayViewer = ({ entities, updateEntity, removeEntity, splitBlock, pullBlock, pid = 0 }) => {
  const store = useStore({ isHorizontal: false, hiddenClip: true })

  const render = (treeList, pid) => {
    return (
      <>
        {treeList.filter(item => item.pid == pid).map((item) => {
          const Component = Entities[item.name]
          return item.name == 'Block' ? (
            <Component {...item} store={store} removeEntity={removeEntity} splitBlock={splitBlock} pullBlock={pullBlock} key={item.id}>
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