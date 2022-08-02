// @ts-nocheck
import React from "react";
import { LockOutlined } from "@ant-design/icons";
import { Form, Input, Select, Switch, Radio, Code } from "@/plugins/ui";
import Cascader from './partials/Cascader'
import TreeSelect from "./partials/TreeSelect";
import { CaretDownOutlined } from "@ant-design/icons";

export const renderFormItem = ({
  name,
  type,
  options,
  placeholder,
  prefix,
  needFormItem = true,
  render,
  ...attrs
}) => {
  let formItem = (
    <Input
      prefix={prefix}
      placeholder={placeholder || "请输入"}
      allowClear
    />
  );
  if (typeof render == "function") {
    formItem = render({ name, options, placeholder, prefix, ...attrs });
  } else {
    switch (type) {
      case "TextArea":
        formItem = (
          <Input.TextArea
            autoSize={{ minRows: 2, maxRows: 10 }}
            placeholder={placeholder}
          />
        );
        break;
      case "Switch":
        formItem = <Switch />;
        break;
      case "TreeSelect":
        formItem = (
          <TreeSelect
            placeholder={placeholder || "请选择"}
            treeData={options}
          />
        );
        break;
      case "Select":
        formItem = (
          <Select
            options={options}
            suffixIcon={
              <CaretDownOutlined
                style={{ color: "var(--xdrsec-select-suffix-icon-color)" }}
              />
            }
            allowClear
            placeholder={placeholder}
          />
        );
        break;
      case "Cascader":
        formItem = (
          <Cascader
            options={options}
            placeholder={placeholder}
            {...attrs}
          />
        );
        break;
      case "Radio":
        formItem = <Radio.Group options={options} />;
        break;
      case "Checkbox":
        formItem = <Checkbox.Group options={options} />;
        break;
      case "Password":
        formItem = (
          <Input.Password
            placeholder={placeholder}
            prefix={<LockOutlined />}
          />
        );
        break;
      case "Code":
        formItem = <Code />;
        break;
      default:
        break;
    }
  }

  return needFormItem ? (
    <Form.Item name={name} {...attrs} key={name}>
      {formItem}
    </Form.Item>
  ) : formItem
}
