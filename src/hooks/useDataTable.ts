import { useState, useEffect } from "react";

export const useDataTable = (query, params) => {
  const [page, setPage] = useState({
    current: 1,
    pageSize: 10,
  });
  const onChange = (current: number, pageSize: number) => {
    setPage({ current, pageSize });
  };

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ total: 0, list: [] });
  useEffect(() => {
    setLoading(true);
    query({ ...params, offset: (page.current - 1) * page.pageSize, limit: page.pageSize })
      .then((data) => {
        setData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params, page]);

  const {
    title = '列表',
    total = 0,
    list: dataSource = [],
    properties = {},
    orderKeys = Object.keys(properties),
  } = data;
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
