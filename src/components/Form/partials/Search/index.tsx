/**
 * @Author 
 * @Description 支持搜索的输入框
 * @Create who[when]
 * @Revise what --who[when]
 */

// @ts-nocheck
import React from "react";
import {
  Input
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export default ({ onSearch = () => {}, ...attrs }) => {
  const handlePressEnter = e => onSearch(e.target.value)
  return (
    <Input
      onPressEnter={handlePressEnter}
      suffix={<SearchOutlined style={{ color: 'var(--xdrsec-input-search-color)' }} />}
      {...attrs}
    />
  );
}
