// @ts-nocheck
import { useState } from "react";
import { useRectRef } from "./useRectRef";

export const useClip = (halt = false, zoom) => {
  const ref = useRectRef();

  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const onMouseMove = (e) => {
    e.stopPropagation();
    if (!halt) {
      setOffset({
        x: (e.pageX - ref.current.rect?.left) / zoom,
        y: (e.pageY - ref.current?.rect?.top) / zoom,
      });
    }
  };

  return { ref, offset, onMouseMove };
};
