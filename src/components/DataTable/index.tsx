import React, { useEffect, useState, useRef } from 'react';
import { /* VirtualTable as  */Table, Popconfirm } from '@/plugins/ui';
import FormModal from "@/components/FormModal";
import FieldsFilter from '@/components/Form/partials/FieldsFilter';
import Upload from '@/components/Form/partials/Upload';
import Button from '@/components/Button';
import { EditableCell, ColumnTitle } from './partials';
import { useDataTable, useRowSelection, useBinds, useHandlers } from '@/hooks';
import { InfoCircleOutlined, FormOutlined, DeleteOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { convertToFormItems } from './helpers';
import { tableColumn } from '@/mock/tableColumn';
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
          <span data-bind="title" data-payload={title}>{title}</span>
          <InfoCircleOutlined style={{ margin: '0 4px' }} />
          <span>共{pagination.total}条{rowSelection.total > 0 ? `, 已选中${rowSelection.total}条` : ''}</span>
        </div>
        <div className={styles.title__right}>
          <Button title="批量xx" onClick={handleBatch} />
          <Upload showUploadList={false}>
            <Button title="导入" onClick={importData} icon={<UploadOutlined />} />
          </Upload>
          <Button title="新增" onClick={open} icon={<PlusOutlined />} />
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
          <FormOutlined onClick={() => open(record)} style={{ color: '#40a9ff', cursor: 'pointer' }} />
          <Popconfirm title="确认是否删除?" onConfirm={console.log}>
            <DeleteOutlined style={{ marginLeft: 16, color: 'red' }} />
          </Popconfirm>
        </>
      )
    }
  })

  const rootRef = useBinds(entity.binds)
  useHandlers({ entity, updateEntity })

  return (
    <div ref={rootRef}>
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
    </div>
  )
};