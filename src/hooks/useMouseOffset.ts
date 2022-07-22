// @ts-nocheck
import { useState } from "react";

const getOffset = (e, isHorizontal = false) => {
  const rect = e.target.getBoundingClientRect();
  if (isHorizontal) {
    return e.pageY - rect.top;
  }
  return e.pageX - rect.left;
};

export const useMouseOffset = () => {
  const [offset, setOffset] = useState(0);
  const [flag, setFlag] = useState(0);

  const listeners = {
    onMouseMove(e) {
      switch (flag) {
        case 0:
          setOffset(getOffset(e, false));
          break;
        case 1:
          setOffset(getOffset(e, true));
          break;
        default:
          break;
      }
    },
  };

  return { offset, flag, setFlag, listeners };
};