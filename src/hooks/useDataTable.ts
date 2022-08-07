import { useState, useEffect, useRef } from "react";
import { message } from "antd";
import request from '@/plugins/request';

const getData = (responseData, preprocess) => {
  let data = responseData.data
  if (preprocess) {
    try {
      const IIFE = new Function(`return ${preprocess}`)
      data = IIFE()(responseData)
    } catch (e) {
      message.error(e)
    }
  }
  return data
}

export const useDataTable = ({ type, url, method = 'post', params, interval, data: jsonData, preprocess }) => {
  const [page, setPage] = useState({
    current: 1,
    pageSize: 10,
  });
  const onChange = (current: number, pageSize: number) => {
    setPage({ current, pageSize });
  };

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ total: 0, list: [] });
  const refresh = () => {
    setLoading(true);
    request({
      url,
      method,
      [method == 'post' || method == 'put' ? 'data' : 'params']: { ...params, offset: (page.current - 1) * page.pageSize, limit: page.pageSize },
    })
      .then(responseData => {
        setData(getData(responseData, preprocess))
      })
      .catch((e) => {
        message.error(e)
      })
      .finally(() => {
        setLoading(false);
      });
  }
  useEffect(() => {
    if (type == 1) {
      try {
        const responseData = JSON.parse(jsonData)
        setData(getData(responseData, preprocess))
      } catch (e) {
        message.error(e)
      }
    } else {
      refresh()
    }
  }, [type, url, method, params, preprocess, page]);

  const timerRef = useRef()
  useEffect(() => {
    clearInterval(timerRef.current)
    if (interval) {
      timerRef.current = setInterval(refresh, interval * 1000)
    }
    return () => {
      clearInterval(timerRef.current)
    }
  }, [interval])

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
