// @ts-nocheck
import { useRef } from "react";

export const useDragMove = (handleDragMove) => {
  const dragRef = useRef({ pageX: 0, pageY: 0, now: Date.now() });
  const onDragStart = (e) => {
    dragRef.current = { pageX: e.pageX, pageY: e.pageY, now: Date.now() };
  };
  const onDragOver = (e) => {
    e.preventDefault();
    console.log(dragRef.current.now);
    const now = Date.now();
    console.log(now - dragRef.current.now)
    if (now - dragRef.current.now > 50) {
      console.log("3243242423");
      const dragMove = {
        x: e.pageX - dragRef.current.pageX,
        y: e.pageY - dragRef.current.pageY,
      };
      handleDragMove(dragMove);
      dragRef.current = {
        pageX: e.pageX,
        pageY: e.pageY,
        now,
      };
    }
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
