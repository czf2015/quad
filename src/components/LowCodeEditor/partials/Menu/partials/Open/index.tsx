import React, { useState, useRef } from 'react';
import { Popconfirm, Input, Modal, Table } from "@/plugins/ui";
import { renderTags } from "@/components/DataTable/render";
import Button from '@/components/Button'
import { FolderOpenOutlined, DeleteOutlined, FilterOutlined } from '@ant-design/icons'
import { data } from './config';


export const Open = ({ disabled, open }) => {
  const [visible, setVisible] = useState(false)
  const openModal = () => {
    setVisible(true)
  }
  const handleCancel = () => {
    setVisible(false)
  }

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

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
      render: (_, record: { key: React.Key }) => {
        const view = () => {
          open()
          setVisible(false)
        }
        return (
          <>
            <FolderOpenOutlined onClick={view} style={{ color: 'var(--quad-primary-color)', cursor: 'pointer' }} />
            <Popconfirm title="确认是否删除?" onConfirm={console.log}>
              <DeleteOutlined style={{ marginLeft: 16, color: 'red' }} />
            </Popconfirm>
          </>
        )
      },
    },
  ];

  return (
    <>
      <Button title="打开" disabled={disabled} onClick={openModal} icon={<FolderOpenOutlined />} />
      <Modal title={<div style={{ color: 'var(--quad-primary-color)' }}><FolderOpenOutlined /><span style={{ marginLeft: 4 }}>打开页面</span></div>} visible={visible} onCancel={handleCancel} width={'75%'} bodyStyle={{ maxHeight: 720, overflow: 'auto', padding: '0px 16px 32px 16px' }} footer={null}>
        <Table columns={columns} dataSource={data} onChange={onChange} pagination={false} size="small" sticky />
      </Modal>
    </>
  )
}