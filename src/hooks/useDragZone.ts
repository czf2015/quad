import { useRef } from "react";
import uuid from "@/plugins/uuid";

export const useDragZone = (handle, interval = 25) => {
  const zoneRef = useRef({ dragging: false });
  const rootRef = useRef(null);

  const getEntity = (e) => {
    const offsetX = e.pageX - zoneRef.current.pageX
    const offsetY = e.pageY - zoneRef.current.pageY
    const left = zoneRef.current.pageX - rootRef.current.left + (offsetX < 0 ? offsetX : 0)
    const top = zoneRef.current.pageY - rootRef.current.top + (offsetY < 0 ? offsetY : 0)
    const width = offsetX < 0 ? -offsetX : offsetX
    const height = offsetY < 0 ? -offsetY : offsetY
    return {
      id: zoneRef.current.id,
      name: "DragBlock",
      style: {
        left,
        top,
        width: width < 20 ? 20 : width,
        height: height < 20 ? 20 : height,
      },
      active: true,
      rotate: 0,
    };
  };

  const onDragStart = (e) => {
    const img = new Image(16, 16);
    e.dataTransfer.setDragImage(img, 0, 0);
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
    if (zoneRef.current.dragging) {
      const now = Date.now();
      if (now - zoneRef.current.now > interval) {
        zoneRef.current.now = now;
        handle(getEntity(e), false);
      }
    }
  };
  const onDragEnd = (e) => {
    if (zoneRef.current.dragging) {
      zoneRef.current.dragging = false;
      handle(getEntity(e), false);
    }
  }

  return { draggable: true, onDragStart, onDragOver, onDragEnd };
};
