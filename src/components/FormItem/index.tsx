import React, { useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import { renderFormItem } from '@/components/Form/render';
import { useDataSource } from '@/hooks';
import { getMetaCustomize } from './helpers';
import styles from './index.module.less'

export default ({
  id,
  name,
  updateEntity,
  customize = {
    label: {
      text: name,
      span: 8,
      align: 'left'
    },
    control: {
      type: name,
      span: 16,
      size: 'small'
    }
  },
  dataSource = {
    type: 0,
    method: 'post',
    url: "/api/mock/getChartData.json",
    params: {
    },
    interval: 0,
  },
  style = { width: 200, height: 32 },
  ...attrs
} = {}) => {
  const { data = {} } = useDataSource(dataSource)

  useEffect(() => {
    updateEntity?.(id, { style, customize, dataSource })
  }, [])

  useEffect(() => {
    updateEntity?.(id, { meta: { customize: getMetaCustomize(data?.options) }})
  }, [data])

  useEffect(() => {
    const binds = [
      {
        label: customize?.label?.text || name,
        value: id,
      },
    ]
    updateEntity?.(id, { meta: { binds }})
  }, [customize?.label?.text])

  const handleChange = (val) => {
    const payloads = {
      [id]: typeof val?.target == 'undefined' ? val : val?.target?.value
    }
    updateEntity?.(id, { meta: { payloads }})
  }

  return (
    <Row>
      <Col span={customize?.label?.span}>
        <label className={customize?.set?.includes(1) ? styles.required : ''}>{customize?.label?.text}</label>
      </Col>
      <Col span={customize?.control?.span}>{renderFormItem({ ...attrs, ...customize, type: customize?.control?.type, needFormItem: false, bind: id, onChange: handleChange })}</Col>
    </Row>
  )
}
