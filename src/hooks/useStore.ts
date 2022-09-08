// @ts-nocheck
import { useState } from "react";
import { update, copy } from "@/utils/object";

export const useStore = (propsState = {}, setPropsState) => {
  const [state, setState] = useState(propsState);

  const store = (key, value) => {
    if (typeof setPropsState == 'function') {
      if (typeof key == "undefined") {
        if (typeof value == "undefined") {
          return copy(propsState);
        }
        setPropsState(value)
      } else {
        if (typeof value == "undefined") {
          return copy(propsState[key]);
        }
        setPropsState?.({
          ...propsState,
          ...update(propsState, { [key]: value }),
        })
      }
    } else {
      if (typeof key == "undefined") {
        if (typeof value == "undefined") {
          return copy(state);
        }
        setState(value)
      } else {
        if (typeof value == "undefined") {
          return copy(state[key]);
        }
        setState?.({
          ...state,
          ...update(state, { [key]: value }),
        })
      }
    }
  }

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
