// @ts-nocheck
import { useState } from "react";
import { useSnapShort } from "./useSnapShort";

export const useEntities = (initialEntities = []) => {
  const [entities, setEntities] = useState(initialEntities);
  const snapShort = useSnapShort([initialEntities])
  // 分割
  const splitSubarea = (id, isHorizontal = false, offset) => {
    setEntities((entities) => {
      const result = [];
      entities.forEach((item) => {
        if (item.pid == id) {
          result.push({ ...item, pid: id * 2 });
        } else {
          result.push({ ...item });
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
      snapShort.take(result, `${isHorizontal ? 'horizontal' : 'vertical'} split subarea: ${id} by ${offset}px offset`)
      return result;
    });
  };
  // 删除
  const removeEntity = (id, isSubarea = false) => {
    setEntities((entities) => {
      if (!isSubarea) {
        const result = entities.filter(item => item.id != id)
        snapShort.take(result, `remove entity of widget: ${id}`)
        return result
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
          result.push({ ...item });
        }
      });
      snapShort.take(result, `remove entity of subarea: ${id}`)
      return result;
    });
  };
  // 拉伸
  const pullSubarea = (id, dragMove) => {
    setEntities((_entities) => {
      const entities = _entities.map(item => ({ ...item }))
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

      const { quad } = selected_area
      let offset = dragMove.x
      switch (quad) {
        case "top":
          offset = dragMove.y
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
          offset = dragMove.y
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
      snapShort.take(entities, `pull ${quad} subarea: ${id} by ${offset}px offset`)
      return entities;
    });
  };

  return {
    entities,
    snapShort,
    removeEntity,
    splitSubarea,
    pullSubarea,
  };
};
