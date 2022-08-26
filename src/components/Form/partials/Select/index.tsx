import React from 'react';
import { Dropdown, Menu, Space, Typography } from 'antd';
import { DownOutlined } from '@ant-design/icons';


export default ({ value, defaultValue, options, onChange }) => {
  const menuItems = options.map(item => ({ key: item.value, lable: item.lable }))
  const handleClick = console.log
  const overlay = (
    <Menu
      selectable
      onClick={handleClick}
      defaultSelectedKeys={[defaultValue]}
      selectedKeys={[value]}
      items={menuItems}
    />
  )

  return (
    <Dropdown overlay={overlay}>
      <Typography.Link>
        <Space>
          Selectable
          <DownOutlined />
        </Space>
      </Typography.Link>
    </Dropdown>
  )
}