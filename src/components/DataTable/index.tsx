import React, { useEffect, useState } from 'react';
import { /* VirtualTable as  */Table, Popconfirm } from '@/plugins/ui';
import FormModal from "@/components/FormModal";
import FieldsFilter from '@/components/Form/partials/FieldsFilter';
import Button from '@/components/Button';
import { EditableCell, ColumnTitle } from './partials';
import { useDataTable, useRowSelection } from '@/hooks';
import { InfoCircleOutlined, FormOutlined, DeleteOutlined } from '@ant-design/icons';
import { convertToFormItems } from './helpers';
import styles from './index.module.less'
import { fetchData } from './mock'

export default ({ query = fetchData, params, size = "small", scroll = { x: 'calc(700px + 50%)', y: 240 }, bordered = true }) => {
  const { title = '列表', dataSource, pagination, properties = {}, order, setOrder, loading } = useDataTable(query, params)
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

  const options = formItems.map(item => ({ label: item.label, value: item.field }))
  const [checked = options.filter(({ display = true }) => display).map(item => item.value), setChecked] = useState()
  const renderTitle = (currentPageData) => {
    return (
      <div className={styles.title}>
        <div className={styles.title__left}>
          <span>{title}</span>
          <InfoCircleOutlined />
          <span>共{pagination.total}条{rowSelection.total > 0 ? `, 已选中${rowSelection.total}条` : ''}</span>
        </div>
        <div className={styles.title__right}>
          <Button title="批量xx" />
          <Button title="新增" onClick={open} />
          <FieldsFilter checked={checked} options={options} onChange={setChecked} />
        </div>
      </div>
    )
  }

  const columns = []
  order?.forEach((key) => {
    if (properties?.[key]) {
      const { label: title, type, ...attrs } = properties[key];
      if (checked?.includes(key)) {
        const render = (value, record, idx) => {
          return <EditableCell type={type} value={value} {...attrs} />
        }
        columns.push({ title: <ColumnTitle title={title} orderKey={key} setOrder={setOrder} />, dataIndex: key, render });
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