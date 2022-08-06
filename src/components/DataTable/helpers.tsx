export const convertToFormItems = (properties = {}, keys = Object.keys(properties)) => {
  const formItems = [];
  keys?.forEach((key) => {
    if (properties?.[key]) {
      formItems.push({ name: key, ...properties[key] });
    }
  });
  return formItems;
};