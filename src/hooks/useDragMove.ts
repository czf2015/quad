// @ts-nocheck
import { useRef } from "react";

export const useDragMove = (handleDragMove, zoom = 1) => {
  const dragRef = useRef({
    pageX: 0,
    pageY: 0,
    now: Date.now(),
    dragging: false,
  });
  const onDragStart = (e) => {
    e.stopPropagation();
    const img = new Image(16, 16);
    e.dataTransfer.setDragImage(img, 0, 0);
    dragRef.current = {
      pageX: e.pageX,
      pageY: e.pageY,
      now: Date.now(),
      dragging: true,
    };
  };
  const onDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
    // if (dragRef.current?.dragging) {
    //   const now = Date.now();
    //   if (now - dragRef.current.now > 25) {
    //     const dragMove = {
    //       x: (e.pageX - dragRef.current.pageX) * zoom,
    //       y: (e.pageY - dragRef.current.pageY) * zoom,
    //     };
    //     handleDragMove(dragMove);
    //     dragRef.current = {
    //       pageX: e.pageX,
    //       pageY: e.pageY,
    //       now,
    //       dragging: true
    //     };
    //   }
    // }
  };
  const onDragEnd = (e) => {
    e.stopPropagation();
    if (dragRef.current.dragging) {
      const dragMove = {
        x: (e.pageX - dragRef.current.pageX) * zoom,
        y: (e.pageY - dragRef.current.pageY) * zoom,
      };
      handleDragMove(dragMove);
      dragRef.current.dragging = false;
    }
  };

  return { draggable: true, onDragStart, onDragOver, onDragEnd };
};
