import { useState } from "react";
import { useDataSource } from "./useDataSource";

export const useDataTable = ({ params, ...rest } = {}) => {
  const [page, setPage] = useState({
    current: 1,
    pageSize: 10,
  });
  const onChange = (current: number, pageSize: number) => {
    setPage({ current, pageSize });
  };

  const { loading, data: {
    title = '列表',
    total = 0,
    list: dataSource = [],
    properties = {},
    orderKeys = Object.keys(properties),
  } = {} } = useDataSource({ params: { ...params, offset: (page.current - 1) * page.pageSize, limit: page.pageSize }, ...rest })

  const pagination = {
    total,
    ...page,
    onChange,
    showTotal: (total: number, range: [number, number]) =>
      range[1] === range[0]
        ? `第${range[0]}条/总共${total}条`
        : `第${range[0]}-${range[1]}条/总共${total}条`,
    showQuickJumper: true,
  };

  return {
    title,
    dataSource,
    pagination,
    loading,
    properties,
    orderKeys,
  };
};
