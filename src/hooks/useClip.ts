// @ts-nocheck
import { useState } from "react";
import { useRectRef } from "./useRectRef";

export const useClip = (halt = false, zoom) => {
  const ref = useRectRef();

  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const onMouseMove = (e) => {
    e.stopPropagation();
    if (!halt) {
      const rect = ref.current.getBoundingClientRect();
      setOffset({
        x: (e.pageX - rect?.left) * zoom,
        y: (e.pageY - rect?.top) * zoom,
      });
    }
  };

  return { ref, offset, onMouseMove };
};
