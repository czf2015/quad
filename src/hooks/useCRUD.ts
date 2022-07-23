// @ts-nocheck
import { useState } from 'react'

const delayPromise = (fn, duration) => (...params) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        resolve(await fn(...params))
      } catch (e) {
        reject(e)
      }
    }, duration)
  })
}

export const useCRUD = ($query, initials) => {
  const [loading, setLoading] = useState(false)
  const [queryParams, setQueryParams] = useState(initials?.queryParams)
  const [data, setData] = useState(initials?.data)
  const [error, setError] = useState()

  const query = ({ params = queryParams, limit = 1 } = {}) => {
    setQueryParams(params)
    setLoading(true)
    return $query(params)
      .then(res => {
        setData(res.data)
        return res
      })
      .catch(error => {
        limit--
        if (limit) {
          return query({ params, limit })
        }
        setError(error)
        return Promise.reject(error)
      })
      .finally(_ => {
        setLoading(false)
      })
  }

  const crud = (request) => {
    if (request) {
      return ({ data, isRefresh = false, delay = false }) => {
        setLoading(true)
        return request(data)
          .then(res => {
            if (isRefresh) {
              if (delay) {
                return delayPromise(query, delay)()
              }
              return query()
            }
            return res
          })
          .catch(error => {
            setError(error)
            return Promise.reject(error)
          })
          .finally(_ => {
            setLoading(false)
          })
      }
    }

    return query
  }

  return { loading, queryParams, data, error, query, crud }
}