import { useState, useEffect, useRef } from 'react'
import request from '@/plugins/request'
import { message } from 'antd'

const preprocessResponseData = (responseData, preprocess) => {
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

export const useDataSource = ({
  type, 
  url, 
  method = 'post', 
  params, 
  interval, 
  data: jsonData, 
  preprocess
} = {}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const refresh = () => {
    setLoading(true);
    request({
      url,
      method,
      [method == 'post' || method == 'put' ? 'data' : 'params']: params,
    })
      .then(responseData => {
        setData(preprocessResponseData(responseData, preprocess))
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
        setData(preprocessResponseData(responseData, preprocess))
      } catch (e) {
        message.error(e)
      }
    } else {
      refresh()
    }
  }, [/* type, url, method, params, preprocess */]);

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

  return { loading, data }
}