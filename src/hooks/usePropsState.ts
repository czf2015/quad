import { useEffect, useState } from "react";

export const usePropsState = (propsState) => {
  const [state, setState] = useState(propsState);

  useEffect(() => {
    setState(propsState);
  }, [Object.values(propsState)]);

  return [state, setState];
};
