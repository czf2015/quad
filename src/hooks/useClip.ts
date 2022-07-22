// @ts-nocheck
import { useState } from "react";
import { useRectRef } from "./useRectRef";

export const useClip = (halt = false) => {
  const ref = useRectRef();

  const [offset, setOffset] = useState({ rect: {}, offset: { width: 0, height: 0 } });
  const onMouseMove = (e) => {
    e.stopPropagation();
    if (!halt) {
      setOffset({
        width: e.pageX - ref.current.rect?.left,
        height: e.pageY - ref.current?.rect?.top,
      });
    }
  };

  return { ref, offset, onMouseMove };
};
