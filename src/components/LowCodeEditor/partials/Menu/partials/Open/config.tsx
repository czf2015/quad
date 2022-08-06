import { useState, useRef } from 'react'
import { renderTags } from "@/components/DataTable/render";
import { FolderOpenOutlined, DeleteOutlined, FilterOutlined } from '@ant-design/icons'
import { Popconfirm, Input } from "@/plugins/ui";

export const useColumns = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <Input.Search
        value={selectedKeys[0]}
        onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
        onSearch={() => handleSearch(selectedKeys, confirm, dataIndex)}
        placeholder="input search text"
        enterButton
      />
    ),
    filterIcon: (filtered) => <FilterOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) => searchedColumn === dataIndex ? <div style={{ background: '#ffc069' }}>{text}</div> : text,
  });

  const columns = [
    {
      title: "页面标题",
      dataIndex: "title",
      width: "30%",
      ...getColumnSearchProps('title'),
    },
    {
      title: "页面路径",
      dataIndex: "path",
      width: "30%",
      ...getColumnSearchProps('path')
    },
    {
      title: "标签",
      dataIndex: "tags",
      filters: [
        {
          text: "Park",
          value: 0,
        },
        {
          text: "Store",
          value: 1,
        },
      ],
      onFilter: (value, record) => record.tags.includes(value),
      filterSearch: true,
      render: (tags, record, idx) => renderTags(tags, [{ label: 'Park', value: 0 }, { label: 'Store', value: 1 }, { label: 'Bank', value: 2 }, { label: 'School', value: 3 }]),
    },
    {
      title: "操作",
      dataIndex: "operation",
      align: 'center',
      width: 120,
      render: (_, record: { key: React.Key }) => (
        <>
          <FolderOpenOutlined style={{ color: '#40a9ff', cursor: 'pointer' }} />
          <Popconfirm title="确认是否删除?" onConfirm={console.log}>
            <DeleteOutlined style={{ marginLeft: 16, color: 'red' }} />
          </Popconfirm>
        </>
      ),
    },
  ];

  return columns
}

export const data = [
  {
    key: "1",
    title: "John Brown",
    path: 32,
    tags: [0],
  },
  {
    key: "2",
    title: "Jim Green",
    path: 42,
    tags: [3],
  },
  {
    key: "3",
    title: "Joe Black",
    path: 32,
    tags: [2],
  },
  {
    key: "4",
    title: "Jim Red",
    path: 32,
    tags: [1],
  },
  {
    key: "5",
    title: "John Brown",
    path: 32,
    tags: [0],
  },
  {
    key: "6",
    title: "Jim Green",
    path: 42,
    tags: [3],
  },
  {
    key: "7",
    title: "Joe Black",
    path: 32,
    tags: [2],
  },
  {
    key: "8",
    title: "Jim Red",
    path: 32,
    tags: [1],
  },
  {
    key: "9",
    title: "John Brown",
    path: 32,
    tags: [0],
  },
  {
    key: "10",
    title: "Jim Green",
    path: 42,
    tags: [3],
  },
  {
    key: "11",
    title: "Joe Black",
    path: 32,
    tags: [2],
  },
  {
    key: "12",
    title: "Jim Red",
    path: 32,
    tags: [1],
  },
];
