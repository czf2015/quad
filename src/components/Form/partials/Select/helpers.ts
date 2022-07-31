// @ts-nocheck
export const getValueFromEvent = (value, options) => {
  const index = value.indexOf("");
  if (index !== -1) {
    if (index == value.length - 1) {
      return [""];
    }
    value.splice(index, 1);
  } else {
    if (value.length == options.filter((item) => item.value !== "").length) {
      return [""];
    }
  }
  return value;
};

export const getInitialValue = (value, options) =>
  value.length == options.filter((item) => item.value !== "").length
    ? [""]
    : value;
