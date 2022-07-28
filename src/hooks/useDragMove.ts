// @ts-nocheck
import { useRef } from "react";

export const useDragMove = (handleDragMove) => {
  const dragRef = useRef({ pageX: 0, pageY: 0 });
  const onDragStart = (e) => {
    dragRef.current = { pageX: e.pageX, pageY: e.pageY };
  };
  const onDragOver = (e) => {
    e.preventDefault();
  };
  const onDragEnd = (e) => {
    const dragMove = {
      x: e.pageX - dragRef.current.pageX,
      y: e.pageY - dragRef.current.pageY,
    };
    handleDragMove(dragMove);
  };

  return { draggable: true, onDragStart, onDragOver, onDragEnd };
};
