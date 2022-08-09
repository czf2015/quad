import { message } from "antd";
import { useEffect, useRef } from "react";

export const useHandlers = ({ id, handlers, updateEntity }) => {
  const handlersRef = useRef({});
  const clear = () => {
    Object.keys(handlersRef.current).forEach((type) => {
      handlersRef.current[type].forEach((handler) => {
        window.$eventBus.off(type, handler);
      });
    });
  };
  const renew = () => {
    handlersRef.current = {};
    handlers?.forEach((item) => {
      if (item.enable) {
        try {
          const handle = new Function(`return ${item.handle}`)();
          const handler = (params) => {
            updateEntity(id, (entities) => handle({ ...params, payload: entities?.find(item => item.id == params?.id)?.meta?.payloads[params.target] }));
          };
          window.$eventBus.on(item.type, handler);
          if (!handlersRef.current[item.type]) {
            handlersRef.current[item.type] = [];
          }
          handlersRef.current[item.type].push(handler);
        } catch (e) {
          message.error(e)
        }
      }
    });
  };
  useEffect(() => {
    clear();
    renew();
    return clear;
  }, [handlers]);
};
