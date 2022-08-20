import React from 'react'
import { InputNumber, Input, Select } from 'antd';
import ColorPicker from '@/components/ColorPicker'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import uuid from '@/plugins/uuid'
import styles from './index.module.less'

const options = [
  {
    label: '%',
    value: 0,
  },
  {
    label: 'px',
    value: 1,
  },
]

export default ({ title = '色标点', store }) => {
  const colorStops = store('colorStops')
  const add = () => {
    store('colorStops', [...colorStops, { type: 0, offset: 1, color: '#ccc', id: uuid() }])
  }
  const remove = (id) => {
    store('colorStops', colorStops.filter((item) => item.id != id))
  }
  const handleColorStopChange = (field, id) => (value) => {
    const colorStop = colorStops.find(item => item.id == id)
    if (colorStop) {
      colorStop[field] = value
    }
    store('colorStops', colorStops)
  }

  return (
    <div className={styles.color_stops}>
      <h4 className={styles.flex}>
        <span>{title}</span>
        <PlusOutlined onClick={add} />
      </h4>
      <div className={styles.content}>
        {colorStops.map(({ id, type, color, offset }) => {
          return (
            <div className={styles.flex} key={id}>
              <ColorPicker value={color} onChange={handleColorStopChange('color', id)} />
              <Input.Group compact>
                <InputNumber className={styles.input} size="small" value={offset} onChange={handleColorStopChange('offset', id)} min={0} max={type == 1 ? undefined : 100} controls={false} />
                <Select options={options} value={type} onChange={handleColorStopChange('type', id)} size="small" />
              </Input.Group>
              <MinusOutlined onClick={() => remove(id)} />
            </div>
          )
        })}
      </div>
    </div>
  )
}