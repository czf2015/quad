import React, { useEffect } from 'react'

export const DataConfigPanel = ({ content }) => {
  useEffect(() => {
    setInterval(() => {
      window.$eventBus.emit('SELECT_TIME', { payload: Date.now()})

    }, 1000)
  }, [])
  return <div>{JSON.stringify(content, undefined, 2)}</div>
}