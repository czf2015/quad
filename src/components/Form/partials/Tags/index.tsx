import React from 'react';
import { Tag } from 'antd';
import styles from './index.module.less'

export default ({ value: inputValue = [], onChange: setInputValue, options = [] }) => {
  const handleChange = (tag: string, checked: boolean) => {
    const newInputValue = checked ? [...inputValue, tag] : inputValue.filter(t => t != tag);
    setInputValue(newInputValue);
  };

  return (
    <div className={styles.tags}>
      {options.map(({ label, value }) => (
        <Tag.CheckableTag
          key={value}
          checked={inputValue.indexOf(value) > -1}
          onChange={checked => handleChange(value, checked)}
        >
          {label}
        </Tag.CheckableTag>
      ))}
    </div>
  )
};
