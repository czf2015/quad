// @ts-nocheck
import { useState, useEffect } from 'react'

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

  const stage = () => {
    localStorage.setItem('restore', JSON.stringify({ state }))
  }
  useEffect(() => {
    const storage = localStorage.getItem('restore')
    if (storage && storage !== 'null') {
      const { state: storageState } = JSON.parse(storage)
      if (storageState) {
        setState(storageState)
      }
    }
  }, [])

  return { state, setState, prev, next, undo, redo, stage }
}