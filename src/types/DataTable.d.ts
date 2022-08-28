import { CSSProperties } from "react";

enum enumFormItemType {
  TEXT,
  NUMBER,
  SWITCH,
  RADIO,
  MULTIPLE,
  DATE,
  TIME,
  ATTACHMENT,
  RATE,
  TAGS,
  KIND,
  RICHTEXT,
  CODE_EDITOR,
  JSON_EDITOR,
}

type validatorType = (val: any) => boolean;
type dateType = string;
type optionType = {
  label: string;
  value: number | string;
};
interface IRule {
  pattern: RegExp;
  message: string;
}
interface IFormItem {
  type: enumFormItemType;
  field: string;
  description?: string;
  label?: string;
  value?: any;
  default?: any;
  required?: boolean;
  // validator?: validatorType;
  rules?: IRule[];
  disabled?: boolean;
  style: CSSProperties;
}

interface ITextFormItem extends IFormItem {
  type: enumFormItemType.TEXT;
  value: string;
  minRows?: number;
  maxRows?: number;
  lineWidth?: number;
  lineHeight?: number;
  maxLength?: munber;
}

interface INumberFormItem extends IFormItem {
  type: enumFormItemType.NUMBER;
  value: number;
  min?: number;
  max?: number;
  step?: number;
}

interface ISwitchFormItem extends IFormItem {
  type: enumFormItemType.SWITCH;
  value: boolean;
}

interface IRadioFormItem extends IFormItem {
  type: enumFormItemType.RADIO;
  vaue: number | string;
  options: optionType[];
}

interface IMultipleFormItem extends IFormItem {
  type: enumFormItemType.MULTIPLE;
  value: (number | string)[];
  options: optionType[];
}

interface IDateFormItem extends IFormItem {
  type: enumFormItemType.DATE;
  value: dateType;
}

interface ILimit {
  size?: number; // 单位字节
  total?: number; // 数量限制
}

interface IAttachmentFormItem extends IFormItem {
  type: enumFormItemType.ATTACHMENT;
  value: attachmentType;
  limit?: ILimit;
}

interface IRateFormItem extends IFormItem {
  type: enumFormItemType.RATE;
  value: number;
  min?: number;
  max?: number;
}

interface ITagsFormItem extends IFormItem {
  type: enumFormItemType.TAGS;
  value: (number | string)[];
  options: optionType[];
}

interface IKindFormItem extends IFormItem {
  type: enumFormItemType.KIND;
  value: number | string;
  options: optionType[];
}
interface IRichTextFormItem extends IFormItem {
  type: enumFormItemType.RICHTEXT;
  value: string;
}

interface IDataTableColumn {
  field: string;
  label: string;
  render?: Function;
  // properties?: IFormItem;
}

interface IDataTableRecord {
  [propName: key]: IDataTableColumn;
}
interface IPagination {
  showQuickJumper: boolean;
  total: number;
  current: number;
  pageSize: number;
  onChange: (page: number, pageSize: number) => any;
  showTotal: (toal: number, range: [number, number]) => string;
}

interface IDataTableProperties {
  [propName: string]: {
    type: string;
    label: string;
    required: boolean;
    defaultValue: any;
    disabled: boolean;
    display: boolean;
    rules: IRule[];
    description: string;
  };
}

interface IDataTable {
  query: Function;
  params: Object;
  dataSource: IDataTableRecord[];
  pagination: IPagination;
  loading?: boolean;
  properties: IDataTableProperties;
  order: string[];
}
