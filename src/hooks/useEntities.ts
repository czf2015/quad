// @ts-nocheck
import { useState } from "react";

export const useEntities = (initialEntities = []) => {
  const [entities, setEntities] = useState(initialEntities);
  // 分割
  const splitSubarea = (id, isHorizontal = false, offset) => {
    setEntities((entities) => {
      const result = [];
      entities.forEach((item) => {
        if (item.pid == id) {
          result.push({ ...item, pid: id * 2 });
        } else {
          result.push(item);
        }
      });
      // 子区域
      [0, 1].forEach((idx) => {
        result.push({
          name: "Subarea",
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
        });
      });
      return result;
    });
  };
  // 删除
  const removeEntity = (id, isArea = false) => {
    setEntities((entities) => {
      if (!isArea) {
        return entities.filter(item => item.id != id)
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
          result.push({ ...item, pid: neighbour_area?.pid });
        } else {
          result.push(item);
        }
      });
      return result;
    });
  };
  // 拉伸
  const pullSubarea = (id, dragMove) => {
    setEntities((entities) => {
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

      switch (selected_area.quad) {
        case "top":
          selected_area.style = {
            ...selected_area.style,
            height: selected_area.style.height + dragMove.y,
          };
          neighbour_area.style = {
            ...neighbour_area.style,
            height: `calc(100% - ${selected_area.style.height}px - ${margin.h}px)`,
          };
          break;
        case "bottom":
          neighbour_area.style.height = {
            ...neighbour_area.style,
            height: neighbour_area.style.height - dragMove.y,
          };
          selected_area.style = {
            ...selected_area.style,
            height: `calc(100% - ${neighbour_area.style.height}px - ${margin.h}px)`,
          };
          break;
        case "left":
          selected_area.style = {
            ...selected_area.style,
            width: selected_area.style.width + dragMove.x,
          };
          neighbour_area.style = {
            ...neighbour_area.style,
            width: `calc(100% - ${selected_area.style.width}px - ${margin.w}px)`,
          };
          break;
        case "right":
          neighbour_area.style = {
            ...neighbour_area.style,
            width: neighbour_area.style.width - dragMove.x,
          };
          selected_area.style = {
            ...selected_area.style,
            width: `calc(100% - ${neighbour_area.style.width}px - ${margin.w}px)`,
          };
          break;
          default:
            break;
      }

      return [...entities];
    });
  };

  return {
    entities,
    removeEntity,
    splitSubarea,
    pullSubarea,
  };
};
