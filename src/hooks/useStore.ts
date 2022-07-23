// @ts-nocheck
import { useState } from 'react'

export const useStore = (initials) => {
  const [state, setState] = useState(initials)

  const store = (key, value) => {
    if (typeof value == 'undefined') {
      return state[key]
    }
    setState(state => {
      return {
        ...state,
        [key]: value,
      }
    })
  }

  return store
}