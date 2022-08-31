import { useRef } from "react";
import uuid from "@/plugins/uuid";

export const useDragZone = (handle, interval = 25) => {
  const zoneRef = useRef({ dragging: false });
  const rootRef = useRef(null);

  const getEntity = (e) => {
    return {
      id: zoneRef.current.id,
      name: "DragBlock",
      style: {
        left: zoneRef.current.pageX - rootRef.current.left,
        top: zoneRef.current.pageY - rootRef.current.top,
        width: e.pageX - zoneRef.current.pageX,
        height: e.pageY - zoneRef.current.pageY,
      },
      active: true,
      rotate: 0,
    };
  };

  const onDragStart = (e) => {
    e.stopPropagation();
    if (!zoneRef.current.dragging) {
      const rootEle = document.getElementById("display_viewer");
      rootRef.current = rootEle.getBoundingClientRect();
      zoneRef.current.dragging = true;
      zoneRef.current.now = Date.now();
      zoneRef.current.id = uuid();
      zoneRef.current.pageX = e.pageX;
      zoneRef.current.pageY = e.pageY;
      handle(getEntity(e), true);
    }
  }
  const onDragOver = (e) => {
    e.stopPropagation();
    if (zoneRef.current.dragging) {
      const now = Date.now();
      if (now - zoneRef.current.now > interval) {
        zoneRef.current.now = now;
        handle(getEntity(e), false);
      }
    }
  };
  const onDragEnd = (e) => {
    e.stopPropagation();
    if (zoneRef.current.dragging) {
      zoneRef.current.dragging = false;
      handle(getEntity(e), false);
    }
  }

  return { onDragStart, onDragOver, onDragEnd };
};
