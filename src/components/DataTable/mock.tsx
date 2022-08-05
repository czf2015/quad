import { Popconfirm } from "@/plugins/ui";
import { EditableCell } from './partials';
import { FormOutlined, DeleteOutlined } from '@ant-design/icons'

export const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 100,
    fixed: "left",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "John",
        value: "John",
      },
    ],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    render(text, record, idx) {
      return <EditableCell type="string" value={text} />;
    },
  },
  {
    title: "Other",
    children: [
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
        width: 150,
        sorter: (a, b) => a.age - b.age,
        render(text, record, idx) {
          return <EditableCell type="number" value={text} />;
        },
      },
      {
        title: "Address",
        children: [
          {
            title: "Street",
            dataIndex: "street",
            key: "street",
            width: 150,
          },
          {
            title: "Block",
            children: [
              {
                title: "Building",
                dataIndex: "building",
                key: "building",
                width: 100,
                render(text, record, idx) {
                  return <EditableCell type="file" value={[]} />;
                },
              },
              {
                title: "Door No.",
                dataIndex: "number",
                key: "number",
                width: 100,
                render(text, record, idx) {
                  return <EditableCell type="tags" value={[0, 1]} options={[{ label: 'label1', value: 0 }, { label: 'label2', value: 1 }]} />;
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Company",
    children: [
      {
        title: "Company Address",
        dataIndex: "companyAddress",
        key: "companyAddress",
        width: 200,
      },
      {
        title: "Company Name",
        dataIndex: "companyName",
        key: "companyName",
      },
    ],
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    width: 80,
    fixed: "right",
    render(text, record, idx) {
      return <EditableCell type="boolean" value={text} />;
    },
  },
  {
    title: "操作",
    dataIndex: "operation",
    align: 'center',
    width: 120,
    render: (_, record: { key: React.Key }) => (
      <>
        <FormOutlined style={{ color: '#40a9ff', cursor: 'pointer' }} />
        <Popconfirm title="确认是否删除?" onConfirm={console.log}>
          <DeleteOutlined style={{ marginLeft: 16, color: 'red' }} />
        </Popconfirm>
      </>
    ),
  },
];

export const fetchData = async ({ limit, offset }) => {
  const list = [];
  for (let i = 0; i < limit; i++) {
    list.push({
      key: offset,
      name: "John Brown",
      age: offset,
      street: "Lake Park",
      building: "C",
      number: 2035,
      companyAddress: "Lake Street 42",
      companyName: "SoftLake Co",
      gender: "M",
      index: i,
    });
    offset++;
  }

  return {
    total: 100,
    list,
    properties: {
      name: {
        label: '姓名',
        type: 'TEXT'
      },
      age: {
        label: '年龄',
        type: 'NUMBER',
      }
    },
    order: ['age', 'name'],
  };
};
