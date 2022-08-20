import React from 'react'
import { Button, Tooltip, Dropdown, Input } from 'antd';
import Eye from '@/components/Form/partials/CustomSwitch'
import ColorGradient from '@/components/ColorGradient'
import { getRadialGradient, getLinearGradient } from '@/components/ColorGradient/helpers'
import uuid from '@/plugins/uuid'
import { PlusOutlined, MinusOutlined, CopyOutlined } from '@ant-design/icons';
import { copyText } from '@/utils/dom'
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
          
          return (
            <div className={styles.item_wrapper} key={id}>
              <div className={styles.input_group}>
                <div className={styles.color_mode}>
                  <Dropdown overlay={<ColorGradient store={subStore} />} trigger={['click']} >
                    <span className={styles.effect} style={{ background: value }}></span>
                  </Dropdown>
                  <Input className={styles.input} value={value} disabled={type == 'linear' || type == 'radial'} size="small" bordered={false} />
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