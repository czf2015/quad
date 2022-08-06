export const ColumnTitle = ({ title, orderKey, setOrder }) => {
  const handleDragStart = (e) => {
    console.log({ orderKey })
    e.dataTransfer.setData("dragColumnKey", orderKey);
  }
  const handleDragOver = (e) => {
    e.preventDefault()
  }
  const handleDrop = (e) => {
    const dragColumnKey = e.dataTransfer.getData("dragColumnKey")
    setOrder(keys => {
      const result = []
      let flag = 0
      keys.forEach(item => {
        if (item == dragColumnKey) {
          flag = 1
        } else if (item == orderKey) {
          if (flag == 1) {
            result.push(orderKey)
            result.push(dragColumnKey)
          } else {
            result.push(dragColumnKey)
            result.push(orderKey)
          }
        } else {
          result.push(item)
        }
      })
      return result
    })
  }
  return <div onDragStart={handleDragStart} onDragOver={handleDragOver} onDrop={handleDrop} draggable>{title}</div>
}


export const convertToFormItems = (properties = {}, keys = Object.keys(properties)) => {
  const formItems = [];
  keys?.forEach((key) => {
    if (properties?.[key]) {
      formItems.push({ field: key, ...properties[key] });
    }
  });
  return formItems;
};