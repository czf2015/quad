import React, { useState } from 'react';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import styles from './index.module.less'


export default ({ value, onChange, options = [], addonBefore, style, }) => {
  const [selectKey, setSelectKey] = useState(value)

  const menuItems = options.map(item => ({ ...item, key: item.value }))
  const menuItem = menuItems.find(item => item.key == selectKey)
  const handleClick = ({ key }) => {
    setSelectKey(key)
    onChange?.(key)
  }
  const overlay = (
    <Menu
      selectable
      onClick={handleClick}
      selectedKeys={[menuItem?.key]}
      items={menuItems}
    />
  )

  return (
    <Dropdown overlay={overlay}>
      <label className={styles.select_control} style={style}>
        {addonBefore}
        <span>{menuItem?.label}</span>
        <DownOutlined className={styles.select_arrow} />
      </label>
    </Dropdown>
  )
}