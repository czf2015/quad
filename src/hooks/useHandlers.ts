import { useEffect, useRef } from "react";

export const useHandlers = (handlers) => {
  const handlersRef = useRef({})
  const clear = () => {
    Object.keys(handlersRef.current).forEach(type => {
      handlersRef.current[type].forEach(handler => {
        window.$eventBus.off(type, handler)
      })
    })
  }
  const renew = () => {
    handlersRef.current = {}
    handlers?.forEach(item => {
      if (item.enable) {
        const IIFE = new Function(`return ${item.handle}`)
        const handler = IIFE()
        window.$eventBus.on(item.type, handler)
        if (!handlersRef.current[item.type]) {
          handlersRef.current[item.type] = []
        }
        handlersRef.current[item.type].push(handler)
      }
    })
  }
  useEffect(() => {
    clear()
    renew()
    return clear
  }, [handlers])
}