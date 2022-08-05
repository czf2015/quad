import React from 'react';
import { Table } from '@/plugins/ui';
import { useDataTable, useRowSelection } from '@/hooks';
import { convertToColumns } from './helpers';
import { columns as _columns, fetchData } from './mock'

export default ({ query = fetchData, params, size = "small", scroll = { x: 'calc(700px + 50%)', y: 240 }, bordered = true }) => {
  const { dataSource, pagination, properties, order, loading } = useDataTable(query, params)
  const rowSelection = useRowSelection()

  const columns = convertToColumns(properties, order)

  return (
    <Table
      columns={columns}
      rowSelection={rowSelection}
      dataSource={dataSource}
      pagination={pagination}
      loading={loading}
      size={size}
      scroll={scroll}
      bordered={bordered}
    />
  )
};