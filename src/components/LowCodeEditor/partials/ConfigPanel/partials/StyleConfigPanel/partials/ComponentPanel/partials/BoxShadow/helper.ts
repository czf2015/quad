export const dragSort = (arr, dragId, dropId) => {
  if (dropId == dragId) {
    return arr;
  }
  const result = [];
  let flag = 0;
  const dragItem = arr.find((item, index) => index == dragId);
  arr.forEach((item, index) => {
    if (index == dragId) {
      flag = 1;
    } else if (index == dropId) {
      if (flag == 1) {
        result.push(item);
        result.push(dragItem);
      } else {
        result.push(dragItem);
        result.push(item);
      }
    } else {
      result.push(item);
    }
  });
  return result;
};
