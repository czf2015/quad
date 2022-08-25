import { useEffect, useState } from "react";
import { update } from "@/utils/object";

export const useUpdateState = (propsState) => {
  const [state, setState] = useState(propsState);
  
  const updateState = (updates) => {
    setState((state) => ({ ...state, ...update(state, updates) }));
  };

  useEffect(() => {
    setState(propsState);
  }, [propsState]);

  return { state, updateState };
};
