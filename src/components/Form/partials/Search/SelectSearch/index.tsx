// @ts-nocheck
/**
 * 过滤选择的 组件
 */
import React, { useState } from 'react';
import Search from '@/components/Form/partials/Search'
import FilterCheckboxGroup from '@/components/Form/partials/CheckboxGroup/Filter'
import './index.less';

export default ({
  title = '展示字段',
  options = [],
  search = (e) => {
    console.log(e.target.value)
  }
}) => {
  const [checked, setChecked] = useState(options.filter(item => item.checked).map(item => item.name))
  return (
    <div className="select-search-wrapper">
      <header>{title}</header>
      <main>
        <Search
          placeholder="请输入字段名称"
          onChange={search}
        />
        <FilterCheckboxGroup options={options} checked={checked} setChecked={setChecked} />
      </main>
    </div>
  );
};
