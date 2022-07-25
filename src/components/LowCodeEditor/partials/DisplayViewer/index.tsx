// @ts-nocheck
import React from 'react'
import { Block, Wrapper } from './partials'
import { components } from '@/register'
import { useStore } from '@/hooks'


export const DisplayViewer = ({ entities = [], updateEntity, removeEntity, splitBlock, pullBlock, pid = 0 }) => {
  const store = useStore({ isHorizontal: false, hiddenClip: true })

  const render = (pid) => {
    return (
      <>
        {entities.filter(item => item.pid == pid).map((item) => {
          if (item.name == 'Block') {
            return (
              <Block {...item} store={store} removeEntity={removeEntity} splitBlock={splitBlock} pullBlock={pullBlock} key={item.id}>
                {render(item.id)}
              </Block>
            )
          }

          const { name, id, blocks = {}, ...attrs } = item
          const Widget = components[name]
          if (Widget) {
            const slots = {}
            for (let key in blocks) {
              slots[key] = render(blocks[key])
            }
            return (
              <Wrapper {...attrs} removeEntity={removeEntity} key={id}>
                <Widget id={id} {...attrs} slots={slots} />
              </Wrapper>
            )
          }

          return null
        })}
      </>
    )
  }

  return render(pid)
}