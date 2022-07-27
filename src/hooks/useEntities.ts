// @ts-nocheck
import { useSnapShot } from "./useSnapShot";
import { useRestore } from "./useRestore";

export const useEntities = (initialEntities = [], isPrinted) => {
  const snapShot = useSnapShot(initialEntities, isPrinted);
  const {
    state: entities,
    setState: setEntities,
    prev,
    next,
    restart,
    undo,
    redo,
    stage,
  } = useRestore(initialEntities, snapShot);

  // 更新
  const updateEntity = (id, updated) => {
    setEntities((entities) => {
      const result = [];
      entities.forEach((item) => {
        if (item.id == id) {
          result.push({ ...item, ...updated });
        } else {
          result.push({ ...item });
        }
      });
      return result;
    });
  };
  // 删除
  const removeEntity = (id, isBlock = false) => {
    setEntities((entities) => {
      if (!isBlock) {
        const result = entities.filter((item) => item.id != id);
        snapShot.take(result, `remove entity of widget: ${id}`);
        return result;
      }
      const result = [];
      const selected_area = entities.find((item) => item.id == id);
      const neighbour_area = entities.find(
        (item) => item.pid == selected_area.pid && item.id != selected_area.id
      );
      entities.forEach((item) => {
        if (item.pid == id || item.id == id || item.id == neighbour_area?.id) {
          return;
        }
        if (item.id == selected_area.pid) {
          result.push({ ...item, hasBlock: neighbour_area?.hasBlock });
        } else if (item.pid == neighbour_area?.id) {
          result.push({
            ...item,
            pid: neighbour_area?.pid,
            widgets: neighbour_area?.widgets,
          });
        } else {
          result.push({ ...item });
        }
      });
      snapShot.take(result, `remove entity of block: ${id}`);
      return result;
    });
  };
  // 分割
  const splitBlock = (id, isHorizontal = false, offset) => {
    setEntities((entities) => {
      const result = [];
      entities.forEach((item) => {
        if (item.id == id) {
          // 子区域
          [0, 1].forEach((idx) => {
            result.push({
              name: "Block",
              id: id * 2 + idx,
              pid: id,
              title: `区域${id * 2 + idx}`,
              quad: isHorizontal
                ? idx > 0
                  ? "bottom"
                  : "top"
                : idx > 0
                ? "right"
                : "left",
              style: {
                width: isHorizontal
                  ? "100%"
                  : idx > 0
                  ? `calc(100% - ${offset}px)`
                  : offset,
                height: isHorizontal
                  ? idx > 0
                    ? `calc(100% - ${offset}px)`
                    : offset
                  : "100%",
              },
              widgets: idx > 0 ? [] : item.widgets,
            });
          });
          result.push({ ...item, hasBlock: true, widgets: [] });
        } else if (item.pid == id) {
          result.push({ ...item, pid: id * 2 });
        } else {
          result.push({ ...item });
        }
      });
      snapShot.take(
        result,
        `${
          isHorizontal ? "horizontal" : "vertical"
        } split block: ${id} by ${offset}px offset`
      );
      return result;
    });
  };
  // 拉伸
  const pullBlock = (id, dragMove) => {
    setEntities((_entities) => {
      const entities = _entities.map((item) => ({ ...item }));
      const selected_area = entities.find((item) => item.id == id);
      const neighbour_area = entities.find(
        (item) => item.pid == selected_area.pid && item.id != id
      );

      const margin = {
        w:
          (selected_area.style.marginLeft || 0) +
          (selected_area.style.marginRight || 0) +
          (neighbour_area.style.marginLeft || 0) +
          (neighbour_area.style.marginRight || 0),
        h:
          (selected_area.style.marginTop || 0) +
          (selected_area.style.marginBottom || 0) +
          (neighbour_area.style.marginTop || 0) +
          (neighbour_area.style.marginBottom || 0),
      };

      const { quad } = selected_area;
      let offset = dragMove.x;
      switch (quad) {
        case "top":
          offset = dragMove.y;
          selected_area.style = {
            ...selected_area.style,
            height: selected_area.style.height + offset,
          };
          neighbour_area.style = {
            ...neighbour_area.style,
            height: `calc(100% - ${selected_area.style.height}px - ${margin.h}px)`,
          };
          break;
        case "bottom":
          offset = dragMove.y;
          neighbour_area.style.height = {
            ...neighbour_area.style,
            height: neighbour_area.style.height - offset,
          };
          selected_area.style = {
            ...selected_area.style,
            height: `calc(100% - ${neighbour_area.style.height}px - ${margin.h}px)`,
          };
          break;
        case "left":
          selected_area.style = {
            ...selected_area.style,
            width: selected_area.style.width + offset,
          };
          neighbour_area.style = {
            ...neighbour_area.style,
            width: `calc(100% - ${selected_area.style.width}px - ${margin.w}px)`,
          };
          break;
        case "right":
          neighbour_area.style = {
            ...neighbour_area.style,
            width: neighbour_area.style.width - offset,
          };
          selected_area.style = {
            ...selected_area.style,
            width: `calc(100% - ${neighbour_area.style.width}px - ${margin.w}px)`,
          };
          break;
        default:
          break;
      }
      snapShot.take(
        entities,
        `pull ${quad} block: ${id} by ${offset}px offset`
      );
      return entities;
    });
  };

  const dragWidget = (dragName, dropId) => {
    const dropEntity = entities.find((item) => item.id == dropId);
    setEntities((entities) => {
      const result = [];
      const dragWidgetId = Date.now();
      entities.forEach((entity) => {
        if (dropEntity?.name == "Block") {
          if (entity.id == dropEntity.id) {
            if (entity.widgets) {
              entity.widgets.push(dragWidgetId);
            } else {
              entity.widgets = [dragWidgetId];
            }
            result.push({ name: dragName, id: dragWidgetId, pid: entity.id });
          }
        } else {
          if (entity.id == dropEntity.pid) {
            if (entity.widgets) {
              const widgets = [];
              entity.widgets.forEach((widgetId, idx) => {
                if (widgetId == dropEntity.id) {
                  widgets.push(dragWidgetId);
                }
                widgets.push(widgetId);
              });
              entity.widgets = widgets;
            } else {
              entity.widgets = [widgetId];
            }
            result.push({
              name: dragName,
              id: dragWidgetId,
              pid: entity.id,
            });
          }
        }
        result.push({ ...entity });
      });
      if (dropEntity?.name == "Block") {
        snapShot.take(
          result,
          `drag widget of ${dragName} in block: ${dropEntity.id}`
        );
      } else {
        snapShot.take(
          result,
          `drag widget of ${dragName} before widget: ${dropEntity.id} of block: ${dropEntity.pid}`
        );
      }
      return result;
    });
  };

  const dragEntity = (dragId, dropId) => {
    const dragWidget = entities.find((item) => item.id == dragId);
    const dragBlock = entities.find((item) => item.id == dragWidget.pid);
    const dropEntity = entities.find((item) => item.id == dropId);
    setEntities((entities) => {
      if (dropEntity?.name == "Block") {
        if (dropEntity.id == dragBlock.id) {
          if (dropEntity?.widgets.length > 0) {
            const widgets = [];
            dropEntity.widgets.forEach((widgetId) => {
              if (widgetId != dragId) {
                widgets.push(widgetId);
              }
            });
            widgets.push(dragId);
            dropEntity.widgets = widgets;
          }
        } else {
          dragWidget.pid = dropEntity.id;
          if (dragBlock?.widgets?.length > 0) {
            dragBlock.widgets = dragBlock?.widgets?.filter(
              (widgetId) => widgetId != dragId
            );
          } else {
            dragBlock.widgets = [];
          }
          if (dropEntity?.widgets?.length > 0) {
            dropEntity.widgets.push(dragId);
          } else {
            dropEntity.widgets = [dragId];
          }
        }
      } else {
        const dropBlock = entities.find((item) => item.id == dropEntity.pid);
        if (dropBlock.id == dragBlock.id) {
          if (dropBlock?.widgets.length > 0) {
            const widgets = [];
            dropBlock.widgets.forEach((widgetId) => {
              if (widgetId == dragId) {
                //
              } else if (widgetId == dropId) {
                widgets.push(dragId);
                widgets.push(dropId);
              } else {
                widgets.push(widgetId);
              }
            });
            Object.assign(dropBlock, { widgets });
          }
        } else {
          dragWidget.pid = dropBlock.id;
          dragBlock.widgets = dragBlock.widgets.filter(
            (widgetId) => widgetId != dragId
          );
          const widgets = [];
          dropBlock.widgets.forEach((widgetId) => {
            if (widgetId == dropId) {
              widgets.push(dragId);
              widgets.push(dropId);
            } else {
              widgets.push(widgetId);
            }
          });
        }
      }
      if (dropEntity?.name == "Block") {
        snapShot.take(
          entities,
          `drag widget: ${dragId} ${
            dropEntity.id == dragBlock.id ? "in" : "to"
          } block: ${dropEntity.id}`
        );
      } else {
        snapShot.take(
          entities,
          `drag widget: ${dragId} before widget: ${dropEntity.id} ${
            dropEntity.pid == dragBlock.id ? "in" : "of"
          } block: ${dropEntity.pid}`
        );
      }
      return [...entities];
    });
  };

  return {
    entities,
    prev,
    next,
    restart,
    undo,
    redo,
    stage,
    updateEntity,
    removeEntity,
    splitBlock,
    pullBlock,
    dragWidget,
    dragEntity,
  };
};
