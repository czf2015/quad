import { useEffect, useRef } from "react";
import { update} from "@/utils/object";


export const useHandlers = ({ entity, updateEntity }) => {
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
    entity.handlers?.forEach(item => {
      if (item.enable) {
        const handle = new Function(`return ${item.handle}`)()
        const handler = (params) => {
          updateEntity(entity.id, update(entity, handle(params)))
        }
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
  }, [entity.handlers])
}