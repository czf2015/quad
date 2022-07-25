// @ts-nocheck

// 分片
export const chunk = (arr, size) => {
  const result = []
  for (let i = 0, len = arr.length; i < len; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}
