import { CSSProperties } from "react";

enum enumFormItemType {
  TEXT,
  NUMBER,
  CHECK,
  SINGLE,
  MULTIPLE,
  DATE,
  ATTACHMENT,
  RATING,
  TAGS,
  KIND,
}

type validatorType = (val: any) => boolean;
type dateType = string;
type optionType = {
  label: string;
  value: number | string;
};

interface IFormItem {
  type: enumFormItemType;
  field: string;
  description?: string;
  label?: string;
  value?: any;
  required?: boolean;
  validator?: validatorType;
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

interface ICheckFormItem extends IFormItem {
  type: enumFormItemType.CHECK;
  value: boolean;
  min?: number;
  max?: number;
  step?: number;
}

interface ISingleFormItem extends IFormItem {
  type: enumFormItemType.SINGLE;
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
  length: number;
  total: number;
}

interface IAttachmentFormItem extends IFormItem {
  type: enumFormItemType.ATTACHMENT;
  value: attachmentType;
  limit?: ILimit;
}

interface IRatingFormItem extends IFormItem {
  type: enumFormItemType.RATING;
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

interface IDataTableColumn {
  field: string;
  label: string;
  render?: Function;
  properties?: IFormItem;
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
interface IDataTable {
  query: Function;
  params: Object;
  dataSource: IDataTableRecord[];
  pagination: IPagination;
  loading?: boolean;
}
