// @ts-nocheck
import { useState } from 'react'
import { update } from '@/utils/object'

export const useStore = (initialState = {}) => {
  const [state, setState] = useState(initialState)

  const store = (key, value) => {
    if (typeof value == 'undefined') {
      return state[key]
    }
    setState(state => {
      return {
        ...state,
        ...update(state, { [key]: value }),
      }
    })
  }

  return store
}