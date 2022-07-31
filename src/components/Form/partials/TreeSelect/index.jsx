/* eslint-disable */
/**
 * 属性选择器 组件
 */
import React, { useEffect, useState } from 'react';
import { TreeSelect } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { count } from './helpers';

const { SHOW_ALL } = TreeSelect;

export default ({
  treeData = [],
  placeholder,
  value,
  defaultValue = value /*  = [''] */,
  ...extra
}) => {
  const [maxTagCount, setMaxTagCount] = useState(1);
  const [maxTagPlaceholder, setMaxTagPlaceholder] = useState();

  const total = count(treeData);
  const handleChange = (value = [], label, extra) => {
    const isAll = value.filter(item => item !== '').length === total && value.length > 0;
    setMaxTagCount(isAll ? 0 : 1);
    setMaxTagPlaceholder(isAll ? '全部' : `+${value.length}...`);
  };

  useEffect(() => {
    handleChange(value)
  }, [])

  return (
    <TreeSelect getPopupContainer={triggerNode => triggerNode.parentNode} 
      {...extra}
      treeData={treeData}
      showCheckedStrategy={SHOW_ALL}
      treeCheckable
      treeDefaultExpandAll
      maxTagTextLength={3}
      maxTagCount={maxTagCount}
      maxTagPlaceholder={maxTagPlaceholder}
      allowClear
      showArrow
      dropdownMatchSelectWidth={false}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={(...params) => {
        handleChange(...params);
        return extra.onChange(...params);
      }}
      style={{ width: '100%', backgroundColor: 'var(--xdrsec-secondary-background-color)' }}
      suffixIcon={<CaretDownOutlined style={{ color: 'var(--xdrsec-switch-background-color)' }} />}
    />
  );
};
