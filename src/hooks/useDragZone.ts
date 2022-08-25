import { useRef } from "react";
import uuid from "@/plugins/uuid";

export const useDragZone = (handle, interval = 25) => {
  const zoneRef = useRef({ dragging: false });

  const getEntity = (e, zoneRef) => {
    return {
      id: zoneRef.current.id,
      left: zoneRef.current.pageX,
      top: zoneRef.current.pageY,
      width: e.pageX - zoneRef.current.pageX,
      height: e.pageY - zoneRef.current.pageY,
      active: true,
      rotate: 0,
    };
  };

  const onMouseDown = (e) => {
    e.stopPropagation();
    if (!zoneRef.current.dragging) {
      zoneRef.current.dragging = true;
      zoneRef.current.now = Date.now();
      zoneRef.current.id = uuid();
      zoneRef.current.pageX = e.pageX;
      zoneRef.current.pageY = e.pageY;
      handle(getEntity(e, zoneRef), true);
    }
  };
  const onMouseMove = (e) => {
    e.stopPropagation();
    if (zoneRef.current.dragging) {
      const now = Date.now();
      if (now - zoneRef.current.now > interval) {
        zoneRef.current.now = now;
        handle(getEntity(e, zoneRef), false);
      }
    }
  };
  const onMouseUp = (e) => {
    e.stopPropagation();
    zoneRef.current.dragging = false;
    handle(getEntity(e, zoneRef), false);
  };

  return { onMouseDown, onMouseMove, onMouseUp };
};
