import React, { useState } from 'react';
import { /* VirtualTable as  */Table } from '@/plugins/ui';
import { useDataTable, useRowSelection } from '@/hooks';
import FormModal from "@/components/FormModal";
import { convertToColumns, convertToFormItems } from './helpers';
import { InfoCircleOutlined } from '@ant-design/icons';
import { columns as _columns, fetchData } from './mock'
import Button from '@/components/Button';
import styles from './index.module.less'

export default ({ query = fetchData, params, size = "small", scroll = { x: 'calc(700px + 50%)', y: 240 }, bordered = true }) => {
  const { title = '列表', dataSource, pagination, properties, order, loading } = useDataTable(query, params)
  const rowSelection = useRowSelection()

  const [visible, setVisible] = useState(false)
  const [record, setRecord] = useState()
  const formItems = convertToFormItems(properties, order)
  const open = (_record) => {
    setVisible(true)
    setRecord(_record)
  }
  const handleCancel = () => {
    setVisible(false)
  }

  const columns = convertToColumns(properties, order)
  const renderTitle = (currentPageData) => {
    return (
      <div className={styles.title}>
        <div className={styles.title__left}>
          <span>{title}</span>
          <InfoCircleOutlined />
          <span>共{pagination.total}条{rowSelection.total > 0 ? `, 已选中${rowSelection.total}条` : ''}</span>
        </div>
        <div className={styles.title__left}>
          <Button title="批量xx" />
          <Button title="新增" onClick={open} />
        </div>
      </div>
    )
  }

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
      <FormModal title={title} value={record} visible={visible} children={formItems} onOk={open} onCancel={handleCancel} />
    </>
  )
};