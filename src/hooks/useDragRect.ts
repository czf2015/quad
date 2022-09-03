import { useRef } from "react";

export const useDragRect = (
  { id, style: { left = 0, top = 0, width = 0, height = 0 } = {}, rotate = 0 },
  updateEntity,
  draggable
) => {
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
        updateEntity(id, {
          style: {
            left: left + dragMove.x,
            top: top + dragMove.y,
            width: width - dragMove.x < 20 ? 20 : width - dragMove.x,
            height: height - dragMove.y < 20 ? 20 : height - dragMove.y,
          },
        });
        break;
      case "top_right":
        updateEntity(id, {
          style: {
            top: top + dragMove.y,
            width: width + dragMove.x < 20 ? 20 : width + dragMove.x,
            height: height - dragMove.y < 20 ? 20 : height - dragMove.y,
          },
        });
        break;
      case "bottom_right":
        updateEntity(id, {
          style: {
            width: width + dragMove.x < 20 ? 20 : width + dragMove.x,
            height: height + dragMove.y < 20 ? 20 : height + dragMove.y,
          },
        });
        break;
      case "bottom_left":
        updateEntity(id, {
          style: {
            left: left + dragMove.x,
            width: width - dragMove.x < 20 ? 20 : width - dragMove.x,
            height: height + dragMove.y < 20 ? 20 : height + dragMove.y,
          },
        });
        break;
      case "top":
        updateEntity(id, {
          style: {
            top: top + dragMove.y,
            height: height - dragMove.y < 20 ? 20 : height - dragMove.y,
          },
        });
        break;
      case "right":
        updateEntity(id, {
          style: {
            width: width + dragMove.x < 20 ? 20 : width + dragMove.x < 20
          },
        });
        break;
      case "bottom":
        updateEntity(id, {
          style: {
            height: height + dragMove.y < 20 ? 20 : height + dragMove.y,
          },
        });
        break;
      case "left":
        updateEntity(id, {
          style: {
            left: left + dragMove.x,
            width: width - dragMove.x < 20 ? 20 : width - dragMove.x,
          },
        });
        break;
      case "move":
        updateEntity(id, {
          style: {
            left: left + dragMove?.x,
            top: top + dragMove?.y,
          },
        });
        break;
      case "rotate":
        const rect = ref.current.getBoundingClientRect();
        const r = rect.height / 2 + 10;
        const rad = (rotate / 180) * Math.PI;
        const sin = Math.sin(rad);
        const cos = Math.cos(rad);
        const rx = r * sin + dragMove.x;
        const ry = r * cos - dragMove.y;
        const _rotate =
          rotate +
          (Math.acos(
            (r + dragMove.x * sin - dragMove.y * cos) /
              Math.sqrt(rx ** 2 + ry ** 2)
          ) *
            180) /
            Math.PI;
        updateEntity(id, {
          styleConfig: {
            rotate:
              _rotate > 360
                ? _rotate - 360
                : _rotate < -360
                ? _rotate + 360
                : _rotate,
          },
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
