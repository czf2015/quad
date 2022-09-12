import React, { useEffect, useState } from 'react';
import { /* VirtualTable as  */Table, Popconfirm, Button } from '@/plugins/ui';
import FormModal from "@/components/FormModal";
import FieldsFilter from '@/components/Form/partials/FieldsFilter';
import Upload from '@/components/Form/partials/Upload';
import { EditableCell, ColumnTitle } from './partials';
import { useDataTable, useRowSelection } from '@/hooks';
import { InfoCircleOutlined, FormOutlined, DeleteOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { convertToFormItems, getMetaCustomize } from './helpers';
import { tableColumn } from '@/config/table';
import styles from './index.module.less'


export default ({ size = "small", scroll = { x: 'calc(700px + 50%)', y: 240 }, bordered = true, updateEntity, ...entity }) => {
  const { title, dataSource, pagination, properties, orderKeys: defaultOrderKeys, loading } = useDataTable(entity.dataSource)
  const [orderKeys = defaultOrderKeys, setOrderKeys] = useState();
  const formItems = convertToFormItems(properties, orderKeys)
  const rowSelection = useRowSelection()

  const [visible, setVisible] = useState(false)
  const [record, setRecord] = useState()
  const open = (_record) => {
    setRecord(_record)
    setVisible(true)
  }
  const handleCancel = () => {
    setVisible(false)
  }

  const options = formItems.map(item => ({ label: item.label, value: item.name }))
  const [checked = formItems.filter(({ display = true }) => display).map(item => item.name), setChecked] = useState()
  const handleBatch = () => {
    console.log(rowSelection.selectedRowKeys)
  }
  const importData = () => {
    console.log('导入')
  }
  const [columnVisible, setColumnVisible] = useState(false)
  const openColumn = () => {
    setColumnVisible(true)
  }
  const handleColumnOk = () => {
    setColumnVisible(false)
  }
  const handleColumnCancel = () => {
    setColumnVisible(false)
  }
  const renderTitle = (currentPageData) => {
    return (
      <div className={styles.title}>
        <div className={styles.title__left}>
          <span>{title}</span>
          <InfoCircleOutlined style={{ margin: '0 4px' }} />
          <span>共{pagination.total}条{rowSelection.total > 0 ? `, 已选中${rowSelection.total}条` : ''}</span>
        </div>
        <div className={styles.title__right}>
          <Button type="primary" /* onClick={handleBatch}  */ data-bind="batch">批量操作</Button>
          <Upload showUploadList={false}>
            <Button type="primary" onClick={importData} icon={<UploadOutlined />} style={{ marginLeft: 4 }}>导入</Button>
          </Upload>
          <Button type="primary" onClick={open} icon={<PlusOutlined />} style={{ marginLeft: 4 }}>新增</Button>
          <FieldsFilter checked={checked} options={options} onChange={setChecked} />
        </div>
      </div>
    )
  }

  const columns = []
  orderKeys?.forEach((orderKey) => {
    if (properties?.[orderKey]) {
      const { label: title, type, ...attrs } = properties[orderKey];
      if (checked?.includes(orderKey)) {
        const render = (value, record, idx) => {
          return <EditableCell type={type} value={value} {...attrs} />
        }
        columns.push({ title: <ColumnTitle title={title} orderKey={orderKey} orderKeys={orderKeys} setOrderKeys={setOrderKeys} openColumn={openColumn} />, dataIndex: orderKey, render });
      }
    }
  });
  columns.push({
    title: '操作',
    key: 'operate',
    align: 'center',
    render(record) {
      return (
        <>
          <FormOutlined onClick={() => open(record)} style={{ color: 'var(--quad-primary-color)', cursor: 'pointer' }} />
          <Popconfirm title="确认是否删除?" onConfirm={console.log}>
            <DeleteOutlined style={{ marginLeft: 16, color: 'red' }} />
          </Popconfirm>
        </>
      )
    }
  })

  useEffect(() => {
      const { 
        id, 
        dataSource = {
          type: 0,
          method: 'post',
          url: "/api/mock/getTableData.json",
          params: {
            offset: 0,
            limit: 10,
          },
          interval: 0,
          data: `{
          "title": "标题",
          "description": "描述",
          "params": {
            "id": 1
          }
        }`,
        preprocess: "(res) => {\n  console.log(res)\n  return res.data\n}",
      },
    } = entity
    updateEntity?.(id, { dataSource })
  }, [])

  useEffect(() => {
    updateEntity?.(entity?.id, {
      meta: {
        binds: [{
          label: '批量操作',
          value: 'batch',
        }],
        payloads: {
          batch: rowSelection.selectedRowKeys,
        },
      }
    })
  }, [rowSelection.selectedRowKeys])

  useEffect(() => {
    updateEntity?.(entity?.id, {
      meta: {
        customize: getMetaCustomize()
      }
    })
  }, [])

  return (
    <>
      <Table
        className={styles.data_table}
        title={renderTitle}
        columns={columns}
        rowSelection={rowSelection}
        dataSource={dataSource}
        pagination={pagination}
        loading={loading}
        size={size}
        scroll={scroll}
        bordered={bordered}
      />
      <FormModal title={title} value={record} visible={visible} children={formItems} onOk={handleCancel} onCancel={handleCancel} />
      <FormModal title="添加字段" value={{ type: 0, set: [4] }} visible={columnVisible} children={tableColumn} onOk={handleColumnOk} onCancel={handleColumnCancel} />
    </>
  )
};