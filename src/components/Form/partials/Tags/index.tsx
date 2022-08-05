import React, { useState } from 'react';
import { Tag } from 'antd';

export default ({ checked: inputValue = [], onChange: setInputValue, options = [] }) => {
  // const [inputValue, setInputValue] = useState<string[]>(checked);
  console.log(inputValue)

  const handleChange = (tag: string, checked: boolean) => {
    const newInputValue = checked ? [...inputValue, tag] : inputValue.filter(t => t != tag);
    console.log({ tag, checked, newInputValue })
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
