import { useEffect, useRef } from 'react'
import { getKeyboard } from '@/utils/dom'

export const useKeyboard = ({ handleKeydown, handleKeyup, handleKeypress } = {}) => {
  const keyboradRef = useRef(null)
  
  useEffect(() => {
    let onKeydown, onKeyup, onKeypress
    if (handleKeydown) {
      onKeydown = (e) => {
        keyboradRef.current = getKeyboard(e)
        // console.log(keyboradRef.current)
        handleKeydown(e)
      }
      document.addEventListener('keydown', onKeydown)
    }
    if (handleKeyup) {
      onKeyup = (e) => {
        keyboradRef.current = getKeyboard(e)
        // console.log(keyboradRef.current)
        handleKeyup(e)
      }
      document.addEventListener('keyup', onKeyup)
    }
    if (handleKeypress) {
      onKeypress = (e) => {
        keyboradRef.current = getKeyboard(e)
        // console.log(keyboradRef.current)
        handleKeypress(e)
      }
      document.addEventListener('keypress', onKeypress)
    }

    return () => {
      if (handleKeydown) {
        document.removeEventListener('keydown', onKeydown)
      }
      if (handleKeyup) {
        document.removeEventListener('keyup', onKeyup)
      }
      if (handleKeypress) {
        document.removeEventListener('keypress', onKeypress)
      }
    }
  }, [])

  return keyboradRef
}