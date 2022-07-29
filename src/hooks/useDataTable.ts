import React, { useState, useEffect } from "react";

const defaultParams = { limit: 10, offset: 0 };

export const useDataTable = (query, params = defaultParams) => {
  const [page, setPage] = useState({ current: 1, pageSize: 10 });
  const onChange = (current: number, pageSize: number) => {
    setPage({ current, pageSize });
  };

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    total: 0,
    list: [],
  });
  useEffect(() => {
    setLoading(true);
    query(params)
      .then((data) => {
        setData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params, page]);

  const { total = 0, list: dataSource = [] } = data;
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

  return { params, dataSource, pagination, loading };
};
