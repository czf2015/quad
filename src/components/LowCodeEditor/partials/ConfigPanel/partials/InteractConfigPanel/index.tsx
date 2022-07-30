import React from 'react'

export const InteractConfigPanel = ({ content }) => {
  const json = JSON.stringify(content, (k, v) => {
    if (typeof v === 'function') {
      return `${v}`
    } else {
      return v
    }
  }, 2)
  return <div>{json}</div>
}