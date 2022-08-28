import React, { useEffect } from 'react'
import Chart from '@/components/Chart'
import { useDataSource } from '@/hooks';
import { getOption, getMeta } from './helpers';


export default ({
  id,
  updateEntity,
  customize,
  dataSource = {
    type: 0,
    method: 'post',
    url: "/api/mock/getChartData.json",
    params: {
    },
    interval: 0,
  },
  ...attrs
} = {}) => {
  const { loading, data = {} } = useDataSource(dataSource)

  useEffect(() => {
    updateEntity?.(id, { dataSource })
  }, [])

  useEffect(() => {
    updateEntity?.(id, getMeta(data?.properties))
  }, [data])


  return <Chart {...attrs} option={getOption({ data, customize })} />;
};
