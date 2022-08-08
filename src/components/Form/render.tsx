// @ts-nocheck
import React from "react";
import { LockOutlined } from "@ant-design/icons";
import { Form, Input, Select, Switch, Radio, Checkbox, InputNumber, Rate } from "@/plugins/ui";
import JsonEdit from '@/components/Form/partials/JsonEdit'
import CodeEdit from '@/components/Form/partials/CodeEdit'
import Upload from './partials/Upload/ImageUpload'
import Cascader from './partials/Cascader'
import TreeSelect from "./partials/TreeSelect";
import FormList from "./partials/List";
import Multiple from "./partials/Multiple";
import { CaretDownOutlined } from "@ant-design/icons";
import DatePicker from "./partials/DatePicker";

export const renderFormItem = ({
  name,
  type,
  mode,
  options,
  defaultValue,
  placeholder,
  prefix,
  suffix,
  addonBefore,
  addonAfter,
  needFormItem = true,
  render,
  size/*  = 'small' */,
  disabled = false,
  min,
  max,
  step,
  schema,
  action,
  accept,
  listType,
  fileList,
  limit,
  picker,
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
      case "Number":
        formItem = (
          <InputNumber
            placeholder={placeholder}
            disabled={disabled}
            min={min}
            max={max}
            step={step}
            size={size}
            prefix={prefix}
            suffix={suffix}
            addonBefore={addonBefore}
            addonAfter={addonAfter}
            style={{ width: 120 }}
            allowClear
          />
        );
        break;
      case "TextArea":
      case "RichText":
        formItem = (
          <Input.TextArea
            size={size}
            autoSize={{ minRows: 3, maxRows: 10 }}
            placeholder={placeholder}
            disabled={disabled}
            allowClear
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
            allowClear
          />
        );
        break;
      case "Select":
        formItem = (
          <Select
            mode={mode}
            size={size}
            options={options}
            suffixIcon={<CaretDownOutlined style={{ color: "var(--xdrsec-select-suffix-icon-color)" }} />}
            placeholder={placeholder}
            disabled={disabled}
            allowClear
          />
        );
        break;
      case "Tags":
        formItem = (
          <Select
            mode="tags"
            size={size}
            options={options}
            suffixIcon={<CaretDownOutlined style={{ color: "var(--xdrsec-select-suffix-icon-color)" }} />}
            placeholder={placeholder}
            disabled={disabled}
            allowClear
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
        formItem = <Radio.Group size={size} options={options} disabled={disabled} defaultValue={defaultValue} />;
        break;
      case "Checkbox":
        formItem = <Checkbox.Group size={size} options={options} disabled={disabled} />;
        break;
      case 'Multiple':
        formItem = <Multiple mode={mode} size={size} options={options} disabled={disabled} />;
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
      case "Json":
        formItem = <JsonEdit disabled={disabled} />;
        break;
      case "Code":
        formItem = <CodeEdit disabled={disabled} />;
        break;
      case "Rate":
        formItem = <Rate disabled={disabled} />
        break
      case "Attachment":
        formItem = <Upload action={action} fileList={fileList} accept={accept} listType={listType} limit={limit} />
        break
      case 'DatePicker':
      case 'Date':
        formItem = <DatePicker mode={mode} picker={picker} {...attrs} />
        break
      case "FormList":
        return <FormList name={name} list={schema} disabled={disabled} {...attrs} />
      default:
        break;
    }
  }

  return needFormItem ? (
    <Form.Item name={name} {...attrs} key={name}>
      {formItem}
    </Form.Item>
  ) : <React.Fragment key={name}>{formItem}</React.Fragment>
}
