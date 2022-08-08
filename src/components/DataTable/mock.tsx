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
          return <EditableCell type="date" value={text} />;
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
                dataIndex: "date",
                key: "date",
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
        <FormOutlined style={{ color: 'var(--quad-primary-color)', cursor: 'pointer' }} />
        <Popconfirm title="确认是否删除?" onConfirm={console.log}>
          <DeleteOutlined style={{ marginLeft: 16, color: 'red' }} />
        </Popconfirm>
      </>
    ),
  },
];