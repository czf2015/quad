import React, { useState, useRef, useEffect } from 'react';
import { Popconfirm, Input, Modal, Table } from "@/plugins/ui";
import { renderTags } from "@/components/DataTable/render";
import Button from '@/components/Button'
import { FolderOpenOutlined, DeleteOutlined, FilterOutlined, EyeOutlined } from '@ant-design/icons'


export const Open = ({ disabled, open, service }) => {
  const [visible, setVisible] = useState(false)
  const [dataSource, setDataSource] = useState([])
  const refresh = () => {
    if (visible) {
      service.getList().then(({ data: { list } }) => {
        setDataSource(list)
      })
    }
  }
  useEffect(refresh, [visible])
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
    filterIcon: (filtered) => <FilterOutlined style={{ color: filtered ? 'var(--quad-primary-color)' : undefined }} />,
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
      width: "20%",
      ...getColumnSearchProps('title'),
    },
    {
      title: "页面路径",
      dataIndex: "path",
      width: "20%",
      ...getColumnSearchProps('path')
    },
    {
      title: "标签",
      dataIndex: "tags",
      width: '20%',
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
      title: "创建时间",
      dataIndex: "create_time",
      // width: "30%",
    },
    {
      title: "更新时间",
      dataIndex: "update_time",
      // width: "30%",
    },
    {
      title: "操作",
      dataIndex: "id",
      align: 'center',
      width: 120,
      render: (_, record: { key: React.Key }) => {
        const view = () => {
          open(record.id).then(() => {
            setVisible(false)
          })
        }
        const remove = () => {
          service.delete({ id: record.id }).then(refresh)
        }
        return (
          <>
            <EyeOutlined onClick={view} style={{ color: '#40a9ff'}} />
            <Popconfirm title="确认是否删除?" onConfirm={remove}>
              <DeleteOutlined style={{ marginLeft: 16, color: '#e33e38' }} />
            </Popconfirm>
          </>
        )
      },
    },
  ];

  return (
    <>
      <Button type="text" title="打开" disabled={disabled} onClick={openModal} icon={<FolderOpenOutlined />} />
      <Modal title={<div style={{ color: 'var(--quad-primary-color)' }}><FolderOpenOutlined /><span style={{ marginLeft: 4 }}>打开页面</span></div>} visible={visible} onCancel={handleCancel} width={'75%'} bodyStyle={{ maxHeight: 720, overflow: 'auto', padding: '0px 16px 32px 16px' }} footer={null}>
        <Table columns={columns} dataSource={dataSource} onChange={onChange} pagination={false} size="small" sticky />
      </Modal>
    </>
  )
}