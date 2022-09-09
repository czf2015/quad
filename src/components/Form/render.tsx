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
import FormTable from "./partials/Table";
import Compact from "./partials/Compact";
import Multiple from "./partials/Multiple";
import InputText from "./partials/InputText";
import Colors from "./partials/Colors";
import Eye from "./partials/Eye";
import ColorPicker from "@/components/ColorPicker";
import { CaretDownOutlined } from "@ant-design/icons";
import DatePicker from "./partials/DatePicker";

export const renderFormItem = ({
  name: field,
  field: name = field,
  set = [],
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
  required = set?.includes(1),
  disabled = set?.includes(2),
  hidden = set?.includes(4),
  key = name,
  allowClear = true,
  checkedChildren = '开',
  unCheckedChildren = '关',
  ...attrs
}) => {
  let item = (
    <Input
      size={size}
      prefix={prefix}
      suffix={suffix}
      addonBefore={addonBefore}
      addonAfter={addonAfter}
      placeholder={placeholder || `请输入${attrs?.label || '内容'}`}
      disabled={disabled}
      allowClear={allowClear}
    />
  );
  if (typeof render == "function") {
    item = render({ name, options, placeholder, prefix, ...attrs });
  } else {
    switch (type) {
      case "InputText":
      case "Text":
        item = (
          <InputText
            options={options}
            placeholder={placeholder}
            disabled={disabled}
            prefix={prefix}
            suffix={suffix}
            addonBefore={addonBefore}
            addonAfter={addonAfter}
            style={{ width: 120 }}
            allowClear={allowClear}
          />
        );
        break;
      case "InputNumber":
      case "Number":
        item = (
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
            allowClear={allowClear}
          />
        );
        break;
      case "TextArea":
      case "RichText":
        item = (
          <Input.TextArea
            size={size}
            autoSize={{ minRows: 3, maxRows: 10 }}
            placeholder={placeholder}
            disabled={disabled}
            allowClear={allowClear}
          />
        );
        break;
      case "Switch":
        item = <Switch size={size} disabled={disabled} checkedChildren={checkedChildren} unCheckedChildren={unCheckedChildren} />;
        break;
      case "TreeSelect":
        item = (
          <TreeSelect
            size={size}
            placeholder={placeholder || "请选择"}
            treeData={options}
            disabled={disabled}
            allowClear={allowClear}
          />
        );
        break;
      case "Select":
        item = (
          <Select
            mode={mode}
            size={size}
            options={options}
            suffixIcon={<CaretDownOutlined style={{ color: "var(--xdrsec-select-suffix-icon-color)" }} />}
            placeholder={placeholder}
            disabled={disabled}
            allowClear={allowClear}
          />
        );
        break;
      case "Tags":
        item = (
          <Select
            mode="tags"
            size={size}
            options={options}
            suffixIcon={<CaretDownOutlined style={{ color: "var(--xdrsec-select-suffix-icon-color)" }} />}
            placeholder={placeholder}
            disabled={disabled}
            allowClear={allowClear}
          />
        );
        break;
      case "Cascader":
        item = (
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
        item = <Radio.Group size={size} options={options} disabled={disabled} defaultValue={defaultValue} />;
        break;
      case "Checkbox":
        item = <Checkbox.Group size={size} options={options} disabled={disabled} />;
        break;
      case 'Multiple':
        item = <Multiple mode={mode} size={size} options={options} disabled={disabled} />;
        break;
      case "Password":
        item = (
          <Input.Password
            size={size}
            placeholder={placeholder}
            prefix={<LockOutlined />}
            disabled={disabled}
          />
        );
        break;
      case "Json":
        item = <JsonEdit disabled={disabled} />;
        break;
      case "Code":
        item = <CodeEdit disabled={disabled} />;
        break;
      case "Rate":
        item = <Rate disabled={disabled} />
        break
      case "Attachment":
        item = <Upload action={action} fileList={fileList} accept={accept} listType={listType} limit={limit} />
        break
      case 'DatePicker':
      case 'Date':
        item = <DatePicker mode={mode} picker={picker} {...attrs} />
        break
      case "FormList":
        item = <FormList name={name} schema={schema} disabled={disabled} {...attrs} />
        break
      case "FormTable":
        item = <FormTable name={name} schema={schema} disabled={disabled} {...attrs} />
        break
      case "Compact":
        item = <Compact name={name} schema={schema} disabled={disabled} {...attrs} />
        break
      case "Colors":
        item = <Colors />
        break
      case "ColorPicker":
        item = <ColorPicker />
        break
      case "Eye":
        item = <Eye />
        break
      default:
        break;
    }
  }

  return needFormItem ? (
    <Form.Item name={type == "Compact" ? undefined : name} style={{ display: hidden ? 'none' : undefined }} required={required} {...attrs} key={key}>
      {item}
    </Form.Item>
  ) : <React.Fragment key={key}>{item}</React.Fragment>
}