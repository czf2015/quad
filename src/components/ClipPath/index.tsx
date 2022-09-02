import React from 'react'
import { Dropdown, Menu } from 'antd'
import { Inset, Circle, Ellipse } from './partials'
import { BorderOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export default ({ className = '', boxStyle = {} }) => {
  // const { ref, handleDragStart, ...attrs } = useDragRect(entity, updateEntity, editable)

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

  return (
    <>
      {/* <Inset boxStyle={boxStyle} /> */}
      {/* <Circle boxStyle={boxStyle} /> */}
      <Ellipse boxStyle={boxStyle} />
      <Dropdown overlay={<Menu items={clipMenuItems} selectedKeys={['none']} />} >
        <img src="/icons/Clip.svg" className={`${styles.clip} ${className}`} />
      </Dropdown>
    </>
  )
}