import { Popconfirm } from "@/plugins/ui";
import { EditableCell } from './partials';
import { FormOutlined, DeleteOutlined } from '@ant-design/icons'


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
  columns.push({
    title: '操作',
    key: 'operate',
    render(record) {
      return (
        <>
          <FormOutlined style={{ color: '#40a9ff', cursor: 'pointer' }} />
          <Popconfirm title="确认是否删除?" onConfirm={console.log}>
            <DeleteOutlined style={{ marginLeft: 16, color: 'red' }} />
          </Popconfirm>
        </>
      )
    }
  })
  return columns;
};

export const convertToFormItems = (properties = {}, keys = Object.keys(properties)) => {
  const formItems = [];
  keys?.forEach((key) => {
    if (properties?.[key]) {
      formItems.push({ field: key, ...properties[key] });
    }
  });
  return formItems;
};