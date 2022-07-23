// @ts-nocheck
import { useState } from 'react'

export const useRestore = (initialState, snapShort) => {
  const [state, setState] = useState(initialState)
  const prev = snapShort.offset
  const next = snapShort.len - 1 - snapShort.offset

  const undo = () => {
    setState(snapShort.backward())
  }

  const redo = () => {
    setState(snapShort.forward())
  }

  return { state, setState, prev, next, undo, redo }
}