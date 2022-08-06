// 用于将页面上用户的某些操作本地化保存，因json字符串不能保存函数类型，故不能包含函数，否则会出现意料之外的错误
import { useEffect, useState } from 'react'

export const useStorage = (key, initialValue) => {
  const [state, setState] = useState(initialValue);
  
  const { pathname } = window.location;

  const updateStorageState = (current) => {
    setState((preState) => {
      const newState = typeof current == 'function' ? current(preState) : current
      if (key) {
        let storageValue
        const storageStr = localStorage.getItem(pathname)
        if (storageStr && storageStr !== 'null') {
          try {
            storageValue = JSON.parse(storageStr)
          } catch (e) {
            console.error(e)
            localStorage.removeItem(pathname)
            storageValue = {}
          }
        }
        localStorage.setItem(pathname, JSON.stringify({ ...storageValue, [key]: newState }));
      }
      return newState      
    });
  }

  useEffect(() => {
    if (key) {
      try {
        const valueStr = localStorage.getItem(pathname)
        if (valueStr) {
          const storageState = JSON.parse(valueStr)[key];
          if (typeof storageState !== 'undefined') {
            setState(storageState)
          }
        }
      } catch (e) {
        console.error(e)
        localStorage.removeItem(pathname)
      }
    }
  }, [])

  return [
    state,
    updateStorageState,
  ]
}

