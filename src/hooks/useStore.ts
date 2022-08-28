// @ts-nocheck
import { useState } from "react";
import { update, copy } from "@/utils/object";

export const useStore = (initialState = {}, cb) => {
  const [state, setState] = useState(initialState);

  const store = (key, value) => {
    if (typeof key == "undefined") {
      if (typeof value == "undefined") {
        return copy(state);
      }
      setState((state) => {
        const newState = {
          ...state,
          ...value,
        };
        cb?.(newState)
        return newState
      });
    }
    if (typeof value == "undefined") {
      return copy(state[key]);
    }
    setState((state) => {
      const newState = {
        ...state,
        ...update(state, { [key]: value }),
      };
      cb?.(newState)
      return newState
    });
  };

  return store;
};

export const useSubStore = (store, field, id) => {
  const subStore = (key, value) => {
    const values = store(field);
    const select = values.find((item) => item.id == id);

    if (typeof key == "undefined") {
      if (typeof value == "undefined") {
        return select;
      }
      store(
        field,
        values.map((item) =>
          item.id == id ? { ...item, ...update(item, value) } : item
        )
      );
    } else {
      if (typeof value == "undefined") {
        return select[key];
      }
      if (select) {
        select[key] =
        Object.prototype.toString.call(value) == "object Object"
            ? { ...select[key], ...update(select[key], value) }
            : value;
      }
      store(field, values);
    }
  };

  return subStore;
};
