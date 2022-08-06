import React from 'react';
import { Tag } from 'antd';

export default ({ checked: inputValue = [], onChange: setInputValue, options = [] }) => {
  const handleChange = (tag: string, checked: boolean) => {
    const newInputValue = checked ? [...inputValue, tag] : inputValue.filter(t => t != tag);
    setInputValue(newInputValue);
  };

  return options.map(({ label, value }) => (
    <Tag.CheckableTag
      key={value}
      checked={inputValue.indexOf(value) > -1}
      onChange={checked => handleChange(value, checked)}
    >
      {label}
    </Tag.CheckableTag>
  ))
};
