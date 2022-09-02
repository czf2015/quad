import React from 'react'
import { Dropdown, Menu } from 'antd'
import { Inset, Circle, Ellipse } from './partials'
import { BorderOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export default ({ className = '', boxStyle = {}, value = { type: 'none' }, onChange, disabled = false, }) => {
  const clipMenuItems = [
    {
      label: '清除',
      key: 'none',
      icon: <img src="/icons/Brush.svg" />
    },
    {
      label: '矩形',
      key: 'inset',
      icon: <BorderOutlined />
    },
    {
      label: '圆形',
      key: 'circle',
      icon: <img src="/icons/Circle.svg" />
    },
    {
      label: '椭圆形',
      key: 'ellipse',
      icon: <img src="/icons/Ellipse.svg" />
    },
    {
      label: '多边形',
      key: 'polygon',
      icon: <img src="/icons/Polygon.svg" />
    },
    {
      label: '路径',
      key: 'path',
      icon: <img src="/icons/Path.svg" />
    }
  ]

  const Clip = value.type == 'inset' ? Inset : value.type == 'circle' ? Circle : value.type == 'ellipse' ? Ellipse : () => <div />

  const handleMenuItemClick = ({ key: type }) => {
    switch (type) {
      case 'inset':
        onChange?.({ type, top: 0, right: 0, bottom: 0, left: 0, round: 0 })
        break
      case 'circle':
        onChange?.({ type, r: boxStyle.width < boxStyle.height ? boxStyle.width / 2 : boxStyle.height / 2, offsetX: boxStyle.width / 2, offsetY: boxStyle.height / 2 })
        break
      case 'ellipse':
        onChange?.({ type, rx: boxStyle.width / 2, ry: boxStyle.height / 2, offsetX: boxStyle.width / 2, offsetY: boxStyle.height / 2 })
        break
      case 'none':
        onChange?.({ type })
        break
      default:
        break
    }
  }
  const overlay = <Menu items={clipMenuItems} selectedKeys={[value.type]} onClick={handleMenuItemClick} />

  return (
    <>
      <Clip boxStyle={boxStyle} value={value} onChange={onChange} disabled={disabled} />
      <Dropdown overlay={overlay} >
        <img src="/icons/Clip.svg" className={`${styles.clip} ${className}`} />
      </Dropdown>
    </>
  )
}