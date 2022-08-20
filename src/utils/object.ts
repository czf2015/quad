export const update = (raw, updates) => {
  if (updates) {
    Object.keys(updates).forEach((key) => {
      if (typeof raw[key] == "object" && typeof updates[key] == "object" && !Array.isArray(updates[key])) {
        updates[key] = update(raw[key], { ...raw[key], ...updates[key] });
      }
    });
  }
  return updates;
};

export const copy = (value) => {
  switch (Object.prototype.toString.call(value)) {
    case '[object Object]':
      return { ...value }
    case '[object Array]':
      return [...value]
    default:
      return value
  }
}
