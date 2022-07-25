// @ts-nocheck
import { useState, useEffect } from 'react'

export const useRestore = (initialState, snapShot) => {
  const [state, setState] = useState(initialState)
  const prev = snapShot.offset
  const next = snapShot.len - 1 - snapShot.offset

  const restart = () => {
    setState(snapShot.restart())
  }

  const undo = () => {
    setState(snapShot.backward())
  }

  const redo = () => {
    setState(snapShot.forward())
  }

  const stage = () => {
    localStorage.setItem('restore', JSON.stringify({ state }))
  }
  useEffect(() => {
    const storage = localStorage.getItem('restore')
    if (storage && storage != 'null') {
      const { state: storageState } = JSON.parse(storage)
      if (storageState) {
        setState(storageState)
      }
    }
  }, [])

  return { state, setState, prev, next, restart, undo, redo, stage }
}