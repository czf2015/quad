// @ts-nocheck
import React from "react";
import { LockOutlined } from "@ant-design/icons";
import { Form, Input, Select, Switch, Radio } from "@/plugins/ui";
import Code from '@/components/Form/partials/Code'
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
  size = 'small',
  ...attrs
}) => {
  let formItem = (
    <Input
      size={size}
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
            size={size}
            autoSize={{ minRows: 2, maxRows: 10 }}
            placeholder={placeholder}
          />
        );
        break;
      case "Switch":
        formItem = <Switch size={size} />;
        break;
      case "TreeSelect":
        formItem = (
          <TreeSelect
            size={size}
            placeholder={placeholder || "请选择"}
            treeData={options}
          />
        );
        break;
      case "Select":
        formItem = (
          <Select
            size={size}
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
            size={size}
            options={options}
            placeholder={placeholder}
            {...attrs}
          />
        );
        break;
      case "Radio":
        formItem = <Radio.Group size={size} options={options} />;
        break;
      case "Checkbox":
        formItem = <Checkbox.Group size={size} options={options} />;
        break;
      case "Password":
        formItem = (
          <Input.Password
            size={size}
            placeholder={placeholder}
            prefix={<LockOutlined />}
          />
        );
        break;
      case "Code":
        formItem = <Code size={size} height="120px" />;
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
