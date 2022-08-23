/**
 * @Author
 * @Description 下拉选择框
 * @Create who[when]
 * @Revise what --who[when]
 */
/* eslint-disable */
// @ts-nocheck
import React from "react";
import { Select } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

export default ({
  mode = null, // "multiple", // 'tags'
  allowClear = true,
  disabled = false,
  size = "middle",
  suffixIcon = (
    <CaretDownOutlined
      style={{ color: "var(--xdrsec-select-suffix-icon-color)" }}
    />
  ),
  options = [],
  ...attrs
}) => {
  return (
    <Select
      mode={mode}
      allowClear={allowClear}
      disabled={disabled}
      suffixIcon={suffixIcon}
      size={size}
      getPopupContainer={(triggerNode) => triggerNode.parentNode}
      options={options}
      {...attrs}
    />
  );
};
