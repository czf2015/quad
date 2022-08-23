import React, { useState } from 'react'
import ColorPicker from '@/components/ColorPicker'
import Eye from '@/components/Form/partials/CustomSwitch'
import uuid from '@/plugins/uuid'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import styles from './index.module.less'


export default ({ value = [], onChange }) => {
  const [colors, setColors] = useState(value)
  const add = () => {
    setColors(colors => {
      const result = [...colors, { value: '#ccc', id: uuid(), hidden: false }]
      onChange?.(result)
      return result
    })

  }
  const remove = (id) => {
    setColors(colors => {
      const result = colors.filter((item) => item.id !== id)
      onChange?.(result)
      return result
    })
  }
  const handleColorChange = (field, id) => (value) => {
    setColors(colors => {
      const result = colors.map((item) => {
        if (item.id == id) {
          item[field] = value
        }
        return item
      })
      onChange?.(result)
      return result
    })
  }

  return (
    <div className={styles.colors}>
      <h4 className={styles.title}>
        <PlusOutlined onClick={add} />
      </h4>
      <div className={styles.content}>
        {colors?.map(({ value, id, hidden }) => {
          return (
            <div className={styles.flex} key={id}>
              <ColorPicker value={value} onChange={handleColorChange('color', id)} />
              <Eye value={!hidden} onChange={handleColorChange('hidden', id)} />
              <MinusOutlined onClick={() => remove(id)} />
            </div>
          )
        })}
      </div>
    </div>
  )
}