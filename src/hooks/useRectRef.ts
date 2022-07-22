// @ts-nocheck
import { useRef, useEffect } from "react";

export const useRectRef = () => {
  const ref = useRef({ rect: {} });
  useEffect(() => {
    ref.current.rect = ref.current.getBoundingClientRect();
  }, []);
  
  return ref
}