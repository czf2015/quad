import React from 'react'
import { Button, Tooltip, Popover, Input } from 'antd';
import Eye from '@/components/Form/partials/CustomSwitch'
import ColorGradient from '@/components/ColorGradient'
import { getRadialGradient, getLinearGradient } from '@/components/ColorGradient/helpers'
import uuid from '@/plugins/uuid'
import { copyText } from '@/utils/dom'
import { PlusOutlined, MinusOutlined, CopyOutlined } from '@ant-design/icons';
import styles from './index.module.less';


export default ({ title = '填充', store }) => {
  const fill = store('fill');

  const add = () => {
    store('fill', [{ type: 'color', value: '#FFFFFF', hidden: false, id: uuid() }, ...fill])
  };

  return (
    <div className={styles.fill}>
      <div className={styles.title}>
        <h4>{title}</h4>
        <PlusOutlined onClick={add} />
      </div>
      <div>
        {fill.map((item) => {
          const { type, value: defaultValue, id, hidden } = item

          const remove = () => {
            store('fill', fill.filter((item) => item.id != id))
          }

          const subStore = (key, value) => {
            if (typeof key == 'undefined') {
              if (typeof value == 'undefined') {
                return item
              }
              return
            }
            if (typeof value == 'undefined') {
              return item[key]
            }
            const select = fill.find(item => item.id == id)
            if (select) {
              select[key] = value
            }
            store('fill', fill)
          }

          let value/*  = defaultValue */
          switch (type) {
            case 'linear':
              value = getLinearGradient(item)
              break
            case 'radial':
              value = getRadialGradient(item)
              break
            default:
              value = defaultValue
              break
          }

          const copy = () => copyText(value)

          const handleBlur = (e) => {
            if (type != 'linear' && type !== 'radial') {
              subStore('value', e.target.value)
            }
          }

          return (
            <div className={styles.item_wrapper} key={id}>
              <div className={styles.input_group}>
                <div className={styles.color_mode}>
                  <Popover content={<ColorGradient store={subStore} />} placement="leftBottom" trigger='click' >
                    <span className={styles.effect} style={{ background: value }}></span>
                  </Popover>
                  <Input className={styles.input} defaultValue={value} disabled={type == 'linear' || type == 'radial'} size="small" onBlur={handleBlur} bordered={false} />
                </div>
                <Tooltip title="复制">
                  <Button icon={<CopyOutlined />} className={styles.copy} size="small" onClick={copy} />
                </Tooltip>
              </div>
              <div className={styles.icon_group}>
                <Eye value={!hidden} onChange={() => subStore('hidden', !hidden)} />
                <MinusOutlined onClick={remove} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}