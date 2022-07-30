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
      const selected_block = entities.find((item) => item.id == id);
      const neighbour_block = entities.find(
        (item) => item.pid == selected_block.pid && item.id != selected_block.id
      );
      entities.forEach((item) => {
        if (item.pid == id || item.id == id || item.id == neighbour_block?.id) {
          return;
        }
        if (item.id == selected_block.pid) {
          result.push({ ...item, hasBlock: neighbour_block?.hasBlock });
        } else if (item.pid == neighbour_block?.id) {
          result.push({
            ...item,
            pid: neighbour_block?.pid,
            widgets: neighbour_block?.widgets,
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
                left: isHorizontal
                  ? item.style.left
                  : idx > 0
                  ? item.style.left + offset.x
                  : item.style.left,
                top: isHorizontal
                  ? idx > 0
                    ? item.style.top + offset.y
                    : item.style.top
                  : item.style.top,
                width: isHorizontal
                  ? item.style.width
                  : idx > 0
                  ? item.style.width - offset.x
                  : offset.x,
                height: isHorizontal
                  ? idx > 0
                    ? item.style.height - offset.y
                    : offset.y
                  : item.style.height,
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
      const entities = JSON.parse(JSON.stringify(_entities));
      let forbiddenFlag = false;

      const handleSubBlock = (block, offset, pid = block.id) => {
        const len = entities.length;
        for (let i = 0; i < len; i++) {
          const entity = entities[i];
          if (entity.pid == pid && entity.name == 'Block') {
            switch (block.quad) {
              // 上下拖拽
              // 上半区
              case "top":
                if (entity.quad !== "top") {
                  if (entity.style.height + offset < 0) {
                    forbiddenFlag = true;
                    return true;
                  }
                  entity.style = {
                    ...entity.style,
                    height: entity.style.height + offset,
                  };
                  if (handleSubBlock(block, offset, entity.id)) {
                    return true;
                  }
                }
                break;
              // 下半区
              case "bottom":
                if (entity.quad !== "bottom") {
                  if (entity.style.height - offset < 0) {
                    forbiddenFlag = true;
                    return true;
                  }
                  entity.style = {
                    ...entity.style,
                    top: entity.style.top + offset,
                    height: entity.style.height - offset,
                  };
                  if (handleSubBlock(block, offset, entity.id)) {
                    return true;
                  }
                }
                break;
              // 左右拖拽
              // 左半区
              case "left":
                if (entity.quad !== "left") {
                  if (entity.style.width + offset < 0) {
                    forbiddenFlag = true;
                    return true;
                  }
                  entity.style = {
                    ...entity.style,
                    width: entity.style.width + offset,
                  };
                  if (handleSubBlock(block, offset, entity.id)) {
                    return true;
                  }
                }
                break;
              // 右半区
              case "right":
                if (entity.quad !== "right") {
                  if (entity.style.width - offset < 0) {
                    forbiddenFlag = true;
                    return true;
                  }
                  entity.style = {
                    ...entity.style,
                    left: entity.style.left + offset,
                    width: entity.style.width - offset,
                  };
                  if (handleSubBlock(block, offset, entity.id)) {
                    return true;
                  }
                }
                break;
              default:
                break;
            }
          }
        }
        return false;
      };

      const selected_block = entities.find((item) => item.id == id);
      const neighbour_block = entities.find(
        (item) => item.pid == selected_block.pid && item.id != selected_block.id
      );
      switch (selected_block.quad) {
        case "top":
          if (
            selected_block.style.height + dragMove.y < 0 ||
            neighbour_block.style.height - dragMove.y < 0
          ) {
            return _entities;
          }
          selected_block.style = {
            ...selected_block.style,
            height: selected_block.style.height + dragMove.y,
          };
          if (handleSubBlock(selected_block, dragMove.y)) {
            return _entities;
          }
          neighbour_block.style = {
            ...neighbour_block.style,
            top: neighbour_block.style.top + dragMove.y,
            height: neighbour_block.style.height - dragMove.y,
          };
          if (handleSubBlock(neighbour_block, dragMove.y)) {
            return _entities;
          }
          break;
        case "left":
          if (
            selected_block.style.width + dragMove.x < 0 ||
            neighbour_block.style.width - dragMove.x < 0
          ) {
            return _entities;
          }
          selected_block.style = {
            ...selected_block.style,
            width: selected_block.style.width + dragMove.x,
          };
          if (handleSubBlock(selected_block, dragMove.x)) {
            return _entities;
          }
          neighbour_block.style = {
            ...neighbour_block.style,
            left: neighbour_block.style.left + dragMove.x,
            width: neighbour_block.style.width - dragMove.x,
          };
          if (handleSubBlock(neighbour_block, dragMove.x)) {
            return _entities;
          }
          break;
        default:
          break;
      }
      if (forbiddenFlag) {
        return _entities;
      }

      snapShot.take(
        entities,
        `pull block: ${id} by (${dragMove.x}px, ${dragMove.y}px) offset`
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
