import React, { useEffect } from 'react'

export const InteractConfigPanel = ({ content }) => {
  useEffect(() => {
    content?.handlers.forEach(({ id, type, handle }) => {
      window.$eventBus.on(type, (payload) => handle(payload))
    })

    // Object.keys(content.binds).forEach(bindKey => {
    //   content.binds[bindKey].forEach(msg => {
    //     window.$eventBus.emit(msg.type, msg)
    //   })
    // })

    // return () => content?.handlers.forEach(({ id, type, handle, payload, description }) => {
    //   window.$eventBus.off(type, () => handle(payload))
    // })
  }, [])

  const json = JSON.stringify(content, (k, v) => {
    if (typeof v === 'function') {
      return `${v}`
    } else {
      return v
    }
  }, 2)
  return <div>{json}</div>
}