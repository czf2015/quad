import { useEffect, useRef } from "react";

export const useBinds = ({ id, binds }) => {
  const rootRef = useRef();
  const bindsRef = useRef({});
  const clear = () => {
    Object.keys(bindsRef.current).forEach((event) => {
      bindsRef.current[event].forEach(({ el, handler }) => {
        el.removeEventListener(event, handler);
      });
    });
  };
  const renew = () => {
    bindsRef.current = {};
    binds?.forEach((item) => {
      if (item.enable) {
        const el = rootRef.current.querySelector(`[data-bind=${item.target}]`);
        if (el) {
          const type = item.type;
          const handler = () => {
            window.$eventBus.emit(type, {
              ...item,
              id,
            });
          };
          el.addEventListener(item.event, handler);
          if (!bindsRef.current[item.event]) {
            bindsRef.current[item.event] = [];
          }
          bindsRef.current[item.event].push({ el, handler });
        }
      }
    });
  };
  useEffect(() => {
    clear();
    renew();
    return clear;
  }, [binds]);
  return rootRef;
};
