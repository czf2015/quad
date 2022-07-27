// @ts-nocheck
import { useState } from 'react'

export const useStore = (initialState) => {
  const [state, setState] = useState(initialState)

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