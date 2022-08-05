import { EditableCell } from './partials';


export const convertToColumns = (properties = {}, keys = Object.keys(properties)) => {
  const columns = [];
  keys?.forEach((key) => {
    if (properties?.[key]) {
      const { label: title, type, display = true, ...attrs } = properties[key];
      if (display) {
        const render = (value, record, idx) => {
          return <EditableCell type={type} value={value} {...attrs} />
        }
        columns.push({ title, dataIndex: key, render });
      }
    }
  });
  return columns;
};
