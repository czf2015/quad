// @ts-nocheck
import { useState } from "react";
import { usePropsState } from "./usePropsState";
import { update, copy } from "@/utils/object";

export const useStore = (initialState = {}, cb) => {
  // const [state, setState] = useState(initialState);

  const store = (key, value) => {
    if (typeof key == "undefined") {
      if (typeof value == "undefined") {
        return copy(initialState);
      }
      const newState = {
        ...initialState,
        ...value,
      };
      if (typeof cb == 'function') {
        cb?.(newState)
      }
      // else {
      //   setState(newState);
      // }
    }
    if (typeof value == "undefined") {
      return copy(initialState[key]);
    }
    const newState = {
      ...initialState,
      ...update(initialState, { [key]: value }),
    };

    if (typeof cb == 'function') {
      cb?.(newState)
    }
    // else {
    //   setState(newState);
    // }
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
