export const toJson = (obj) => JSON.stringify(obj, (k, v) => {
  if (typeof v === 'function') {
    return `${v}`
  } else {
    return v
  }
}, 2)