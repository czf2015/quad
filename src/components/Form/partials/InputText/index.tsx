/**
 * @Author 
 * @Description 
 * @Create who[when]
 * @Revise what --who[when]
 */

// @ts-nocheck
import React, { useState } from "react";
import { Select } from "antd";

export default ({ id, options = [], value, onChange, ...attrs }) => {
  const [inputValue, setInputValue] = useState(typeof value == 'undefined' ? [] : [value])

  const handleChange = (values = []) => {
    setInputValue(values.length > 0 ? values.slice(-1) : [])
    onChange(values[values.length - 1])
  }

  return <Select {...attrs} mode="tags" options={options} value={inputValue} onChange={handleChange}  />
}
