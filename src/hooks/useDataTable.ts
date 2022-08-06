import { useState, useEffect } from "react";

const defaultParams = { limit: 10, offset: 0 };

export const useDataTable = (query, params = defaultParams) => {
  const [page, setPage] = useState({
    current: params?.offset + 1,
    pageSize: params?.limit,
  });
  const onChange = (current: number, pageSize: number) => {
    setPage({ current, pageSize });
  };

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ total: 0, list: [] });
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

  const {
    total = 0,
    list: dataSource = [],
    properties = {},
    order: defaultOrder = Object.keys(properties),
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

  const [order, setOrder] = useState(defaultOrder);
  useEffect(() => {
    setOrder(defaultOrder);
  }, [defaultOrder.length]);

  return {
    params,
    dataSource,
    properties,
    order,
    setOrder,
    pagination,
    loading,
  };
};
