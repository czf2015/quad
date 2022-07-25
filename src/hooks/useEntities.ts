// @ts-nocheck
import { useSnapShort } from "./useSnapShort";
import { useRestore } from "./useRestore";

export const useEntities = (initialEntities = [], isPrinted) => {
  const snapShort = useSnapShort(initialEntities, isPrinted);
  const {
    state: entities,
    setState: setEntities,
    prev,
    next,
    restart,
    undo,
    redo,
    stage,
  } = useRestore(initialEntities, snapShort);

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
        snapShort.take(result, `remove entity of widget: ${id}`);
        return result;
      }
      const result = [];
      const selected_area = entities.find((item) => item.id == id);
      const neighbour_area = entities.find(
        (item) => item.pid == selected_area.pid && item.id !== selected_area.id
      );
      entities.forEach((item) => {
        if (item.pid == id || item.id == id || item.id == neighbour_area?.id) {
          return;
        }
        if (item.pid == neighbour_area?.id) {
          result.push({ ...item, pid: neighbour_area?.pid, widgets: neighbour_area?.widgets  });
        } else {
          result.push({ ...item });
        }
      });
      snapShort.take(result, `remove entity of block: ${id}`);
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
                backgroundColor: "#fddd9b",
              },
              widgets: idx > 0 ? [] : item.widgets,
            });
          });
          result.push({ ...item, widgets: [] });
        } else if (item.pid == id) {
          result.push({ ...item, pid: id * 2 });
        } else {
          result.push({ ...item });
        }
      });
      snapShort.take(
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
      snapShort.take(
        entities,
        `pull ${quad} block: ${id} by ${offset}px offset`
      );
      return entities;
    });
  };

  const dragWidget = (dropId, name) => {
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
            result.push({ name: "Button", id: dragWidgetId, pid: entity.id });
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
              name: "Button",
              title: "fsfsfsf",
              id: dragWidgetId,
              pid: entity.id,
            });
          }
        }
        result.push({ ...entity });
      });
      if (dropEntity?.name == "Block") {
        snapShort.take(result, `drag widget of ${name} in block: ${dropEntity.id}`)
      } else {
        snapShort.take(result, `drag widget of ${name} before widget: ${dropEntity.id} of block: ${dropEntity.pid}`)
      }
      return result;
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
  };
};
