// @ts-nocheck
import React from "react";
import { LockOutlined } from "@ant-design/icons";
import { Form, Input, Select, Switch, Radio, Checkbox, InputNumber } from "@/plugins/ui";
import Code from '@/components/Form/partials/Code'
import Cascader from './partials/Cascader'
import TreeSelect from "./partials/TreeSelect";
import { CaretDownOutlined } from "@ant-design/icons";

export const renderFormItem = ({
  name,
  type,
  mode,
  options,
  placeholder,
  prefix,
  suffix,
  addonBefore,
  addonAfter,
  needFormItem = true,
  render,
  size/*  = 'small' */,
  disabled = false,
  ...attrs
}) => {
  let formItem = (
    <Input
      size={size}
      prefix={prefix}
      suffix={suffix}
      addonBefore={addonBefore}
      addonAfter={addonAfter}
      placeholder={placeholder || "请输入"}
      disabled={disabled}
      allowClear
    />
  );
  if (typeof render == "function") {
    formItem = render({ name, options, placeholder, prefix, ...attrs });
  } else {
    switch (type) {
      case "InputNumber":
        formItem = (
          <InputNumber
            size={size}
            placeholder={placeholder}
            disabled={disabled}
          />
        );
        break;
      case "TextArea":
        formItem = (
          <Input.TextArea
            size={size}
            autoSize={{ minRows: 4, maxRows: 10 }}
            placeholder={placeholder}
            disabled={disabled}
          />
        );
        break;
      case "Switch":
        formItem = <Switch size={size} disabled={disabled} />;
        break;
      case "TreeSelect":
        formItem = (
          <TreeSelect
            size={size}
            placeholder={placeholder || "请选择"}
            treeData={options}
            disabled={disabled}
          />
        );
        break;
      case "Select":
        formItem = (
          <Select
            mode={mode}
            size={size}
            options={options}
            suffixIcon={
              <CaretDownOutlined
                style={{ color: "var(--xdrsec-select-suffix-icon-color)" }}
              />
            }
            allowClear
            placeholder={placeholder}
            disabled={disabled}
          />
        );
        break;
      case "Cascader":
        formItem = (
          <Cascader
            size={size}
            options={options}
            placeholder={placeholder}

            disabled={disabled}
            {...attrs}
          />
        );
        break;
      case "Radio":
        formItem = <Radio.Group size={size} options={options} disabled={disabled} />;
        break;
      case "Checkbox":
        formItem = <Checkbox.Group size={size} options={options} disabled={disabled} />;
        break;
      case "Password":
        formItem = (
          <Input.Password
            size={size}
            placeholder={placeholder}
            prefix={<LockOutlined />}
            disabled={disabled}
          />
        );
        break;
      case "Code":
        formItem = <Code size={size} height="120px" disabled={disabled} />;
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
