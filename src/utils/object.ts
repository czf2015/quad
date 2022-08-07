export const update = (raw, updates) => {
  Object.keys(updates).forEach(key => {
    if (typeof updates[key] == 'object' && !Array.isArray(updates[key])) {
      updates[key] = update(raw[key], { ...raw[key], ...updates[key] })
    }
  })
  return updates
}