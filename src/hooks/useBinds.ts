import { useEffect, useRef } from "react";

export const useBinds = ({ id, binds, updateEntity, setEntities }) => {
  const rootRef = useRef();
  const bindsRef = useRef({});
  const handlersRef = useRef({});
  const clear = () => {
    Object.keys(bindsRef.current).forEach((event) => {
      bindsRef.current[event].forEach(({ el, handler }) => {
        el.removeEventListener(event, handler);
      });
    });
    Object.keys(handlersRef.current).forEach((type) => {
      handlersRef.current[type].forEach((handler) => {
        window.$eventBus.off(type, handler);
      });
    });
  };
  const renew = () => {
    bindsRef.current = {};
    binds?.forEach((item) => {
      if (item.enable) {
        const el = rootRef.current.querySelector(`[data-bind=${item.target}]`);
        if (el) {
          switch (item.type) {
            case "OPEN_MODAL":
              // ${id}-${target}-${event}-${type}
              const modalId = `${id}-${item.target}-${item.event}-${item.type}`;
              // TODO: 解除绑定时，暂时不清除创建的组件，待保存时统一清理
              setEntities((entities) => {
                const widget = entities.find((entity) => entity.id == id);
                const block = entities.find((entity) => entity.id == widget?.pid);
                if (block?.widgets?.includes(modalId)) {
                  return entities;
                }
                const modal = {
                  name: "Modal",
                  pid: widget.pid,
                  id: modalId,
                  title: modalId,
                  blocks: {
                    title: `${modalId}-title`,
                    content: `${modalId}-content`,
                  },
                  occupied: true,
                };
                block.widgets.push(modalId);
                const slots = [
                  {
                    pid: modalId,
                    id: `${modalId}-title`,
                    title: `${modalId}-title`,
                    name: "Block",
                    editable: true,
                    style: {
                      width: 600,
                      height: 24,
                    },
                  },
                  {
                    pid: modalId,
                    id: `${modalId}-content`,
                    title: `${modalId}-content`,
                    name: "Block",
                    editable: true,
                    style: {
                      width: 620,
                      height: 640,
                    },
                  },
                ];
                return [...entities, modal, ...slots];
              });
              const openModalHandler = (params) => {
                if (modalId == `${params.id}-${params.target}-${params.event}-${params.type}`) {
                  updateEntity(modalId, { visible: true });
                }
              };
              window.$eventBus.on(item.type, openModalHandler);
              if (!handlersRef.current[item.type]) {
                handlersRef.current[item.type] = [];
              }
              handlersRef.current[item.type].push(openModalHandler);
              break;
            case "OPEN_DRAWER":
              // ${id}-${target}-${event}-${type}
              const drawerId = `${id}-${item.target}-${item.event}-${item.type}`;
              // TODO: 解除绑定时，暂时不清除创建的组件，待保存时统一清理
              setEntities((entities) => {
                const widget = entities.find((entity) => entity.id == id);
                const block = entities.find((entity) => entity.id == widget?.pid);
                if (block?.widgets?.includes(drawerId)) {
                  return entities;
                }
                const drawer = {
                  name: "Drawer",
                  pid: widget.pid,
                  id: drawerId,
                  title: drawerId,
                  blocks: {
                    title: `${drawerId}-title`,
                    content: `${drawerId}-content`,
                  },
                  occupied: true,
                };
                block.widgets.push(drawerId);
                const slots = [
                  {
                    pid: drawerId,
                    id: `${drawerId}-title`,
                    title: `${drawerId}-title`,
                    name: "Block",
                    editable: true,
                    style: {
                      width: 400,
                      height: 24,
                    },
                  },
                  {
                    pid: drawerId,
                    id: `${drawerId}-content`,
                    title: `${drawerId}-content`,
                    name: "Block",
                    editable: true,
                    style: {
                      width: 400,
                      height: 500,
                    },
                  },
                ];
                return [...entities, drawer, ...slots];
              });
              const openDrawerHandler = (params) => {
                if (drawerId == `${params.id}-${params.target}-${params.event}-${params.type}`) {
                  updateEntity(drawerId, { visible: true });
                }
              };
              window.$eventBus.on(item.type, openDrawerHandler);
              if (!handlersRef.current[item.type]) {
                handlersRef.current[item.type] = [];
              }
              handlersRef.current[item.type].push(openDrawerHandler);
              break;
            default:
              break;
          }
          const handler = () => {
            window.$eventBus.emit(item.type, {
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
