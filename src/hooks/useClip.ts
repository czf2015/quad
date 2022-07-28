// @ts-nocheck
import { useState } from "react";
import { useRectRef } from "./useRectRef";

export const useClip = (halt = false) => {
  const ref = useRectRef();

  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const onMouseMove = (e) => {
    e.stopPropagation();
    if (!halt) {
      setOffset({
        x: e.pageX - ref.current.rect?.left,
        y: e.pageY - ref.current?.rect?.top,
      });
    }
  };

  return { ref, offset, onMouseMove };
};
