import { useState, useEffect } from "react";
import { message } from "antd";
import request from '@/plugins/request';
// import { fetchData } from "@/components/DataTable/mock";

export const useDataTable = ({ url, method, params, preprocess }) => {
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
    // fetchData(params)
    request({ url, method, params: { ...params, offset: (page.current - 1) * page.pageSize, limit: page.pageSize }, })
      .then(responseData => {
        if (preprocess) {
          try {
            const IIFE = new Function(`return ${preprocess}`)
            return IIFE()(responseData)
          } catch (e) {
            message.error(e)
          }
        }
        return responseData.data
      })
      .then((data) => {
        setData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, method, params, preprocess, page]);

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
