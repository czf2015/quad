/**
 * @Author
 * @Description 带分组选项的的选择器
 * @Create who[when]
 * @Revise what --who[when]
 */

// @ts-nocheck
import React from "react";
import { Select } from "antd";
import { CaretDownOutlined } from '@ant-design/icons';

const { Option, OptGroup } = Select;

export default ({
  mode = "multiple", // 'tags' null
  options = [],
  optionLabelProp = "label",
  allowClear = true,
  disabled = false,
  size = "middle",
  suffixIcon = <CaretDownOutlined style={{ color: "var(--xdrsec-select-suffix-icon-color)" }} />,
  style = { width: 200 },
  ...attrs
}) => (
  <Select
    mode={mode}
    optionLabelProp={optionLabelProp}
    allowClear={allowClear}
    disabled={disabled}
    suffixIcon={suffixIcon}
    size={size}
    style={style}
    {...attrs}
  >
    {options.map(({ label, children = [] }) => (
      <OptGroup label={label} key={label}>
        {children.map(({ label, value }) => (
          <Option value={value} key={value}>
            {label}
          </Option>
        ))}
      </OptGroup>
    ))}
  </Select>
);
