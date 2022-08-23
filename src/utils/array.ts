// @ts-nocheck

// 分片
export const chunk = (arr, size) => {
  const result = []
  for (let i = 0, len = arr.length; i < len; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}

export const dragSort = (arr, dragId, dropId) => {
  const result = []
  let flag = 0
  const dragItem = arr.find(item => item.id == dragId)
  arr.forEach(item => {
    if (item.id == dragId) {
      flag = 1
    } else if (item.id == dropId) {
      if (flag == 1) {
        result.push(item)
        result.push(dragItem)
      } else {
        result.push(dragItem)
        result.push(item)
      }
    } else {
      result.push(item)
    }
  })
  return result
}
