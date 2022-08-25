import { useRef } from "react";

export const useDragRect = (updateEntity, draggable) => {
  const ref = useRef(null);

  const dragRef = useRef({
    pageX: 0,
    pageY: 0,
    now: Date.now(),
    flag: "",
  });

  const handleDrag = (dragMove) => {
    switch (dragRef.current.flag) {
      case "top_left":
        updateEntity((state) => ({
          ...state,
          width: state.width - dragMove.x,
          height: state.height - dragMove.y,
          left: state.left + dragMove.x,
          top: state.top + dragMove.y,
        }));
        break;
      case "top_right":
        updateEntity((state) => ({
          ...state,
          width: state.width + dragMove.x,
          height: state.height - dragMove.y,
          top: state.top + dragMove.y,
        }));
        break;
      case "bottom_right":
        updateEntity((state) => ({
          ...state,
          width: state.width + dragMove.x,
          height: state.height + dragMove.y,
        }));
        break;
      case "bottom_left":
        updateEntity((state) => ({
          ...state,
          width: state.width - dragMove.x,
          height: state.height + dragMove.y,
          left: state.left + dragMove.x,
        }));
        break;
      case "top":
        updateEntity((state) => ({
          ...state,
          height: state.height - dragMove.y,
          top: state.top + dragMove.y,
        }));
        break;
      case "right":
        updateEntity((state) => ({ ...state, width: state.width + dragMove.x }));
        break;
      case "bottom":
        updateEntity((state) => ({ ...state, height: state.height + dragMove.y }));
        break;
      case "left":
        updateEntity((state) => ({
          ...state,
          width: state.width - dragMove.x,
          left: state.left + dragMove.x,
        }));
        break;
      case "move":
        updateEntity((state) => {
          return {
            ...state,
            left: state?.left + dragMove?.x,
            top: state?.top + dragMove?.y,
          };
        });
        break;
      case "rotate":
        updateEntity((state) => {
          const rect = ref.current.getBoundingClientRect();
          const r = rect.height / 2 + 20;
          const rad = (state.rotate / 180) * Math.PI;
          const sin = Math.sin(rad);
          const cos = Math.cos(rad);
          const rx = r * sin + dragMove.x;
          const ry = r * cos - dragMove.y;
          const rotate = state.rotate + (Math.acos((r + dragMove.x * sin - dragMove.y * cos) / Math.sqrt(rx ** 2 + ry ** 2) ) * 180) / Math.PI;
          console.log({
            ...state,
            rotate,
          })
          return {
            ...state,
            rotate,
          };
        });
        break;
      default:
        break;
    }
  };

  const handleDragStart = (flag) => (e) => {
    e.stopPropagation();
    const img = new Image(16, 16);
    e.dataTransfer.setDragImage(img, 0, 0);
    dragRef.current.pageX = e.pageX;
    dragRef.current.pageY = e.pageY;
    dragRef.current.now = Date.now();
    dragRef.current.flag = flag;
  };
  const onDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (dragRef.current?.flag) {
      const now = Date.now();
      if (now - dragRef.current.now > 25) {
        const dragMove = {
          x: e.pageX - dragRef.current.pageX,
          y: e.pageY - dragRef.current.pageY,
        };
        handleDrag(dragMove);
        dragRef.current.pageX = e.pageX;
        dragRef.current.pageY = e.pageY;
        dragRef.current.now = now;
      }
    }
  };
  const onDragEnd = (e) => {
    e.stopPropagation();
    const dragMove = {
      x: e.pageX - dragRef.current.pageX,
      y: e.pageY - dragRef.current.pageY,
    };
    handleDrag(dragMove);
    dragRef.current.flag = "";
  };

  return {
    ref,
    draggable,
    handleDragStart,
    onDragOver,
    onDragEnd,
  };
};
