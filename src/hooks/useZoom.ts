import { useState } from "react";

export const useZoom = ({ value = 1, min, max, step = 0.25 }) => {
  const [zoom, setZoom] = useState(value);

  const zoomIn = () => {
    setZoom((zoom) => {
      const newVal = zoom * (1 + step);
      if (typeof max == "number") {
        if (newVal > max) {
          return max;
        }
      }
      return newVal;
    });
  };

  const zoomOut = () => {
    setZoom((zoom) => {
      const newVal = zoom * (1 - step);
      if (typeof min == "number") {
        if (newVal < min) {
          return min;
        }
      }
      return newVal;
    });
  };

  const reset = () => {
    setZoom(value);
  };

  const onChange = (value) => {
    if (typeof value == "number") {
      if (
        (typeof min !== "number" || value >= min) &&
        (typeof max !== "number" || value <= max)
      ) {
        setZoom(value);
      }
    }
  };

  return { zoom, zoomIn, zoomOut, setZoom, reset, onChange, min, max };
};
