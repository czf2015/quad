import React from 'react';
import { Table } from '@/plugins/ui';
import { useDataTable } from '@/hooks';
import { columns, fetchData } from './mock'


export default () => {
  const { params, ...attrs } = useDataTable(fetchData)

  return (
      <Table
        columns={columns}
        {...attrs}
        bordered
        size="middle"
        scroll={{
          x: 'calc(700px + 50%)',
          y: 240,
        }}
      />
  )
};