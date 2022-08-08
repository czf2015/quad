/**
 * @Author 
 * @Description 
 * @Create who[when]
 * @Revise what --who[when]
 */

// @ts-nocheck
import React, { useState, } from "react";
import { Select } from "antd";

export default ({ id, options = [], value, onChange, ...attrs }) => {
  const [inputValue, setInputValue] = useState(value ? [] : [value])

  const handleChange = (values = []) => {
    onChange(values[values.length - 1])
    if (values.length > 0) {
      setInputValue(values.slice(-1))
    } else {
      setInputValue([])
    }
  }

  return <Select  {...attrs} mode="tags" options={options} value={inputValue} onChange={handleChange} />
}
