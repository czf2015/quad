export const FORM_ITEM_TYPES_OPTIONS = [
  { label: "文字", value: 'Text' },
  { label: "数字", value: 'Number' },
  { label: "勾选", value: 'Switch' },
  { label: "单选", value: 'Radio' },
  { label: "多选", value: 'Checkbox' },
  { label: "日期", value: 'Date' },
  { label: "时间", value: 'Time' },
  { label: "附件", value: 'Attachment' },
  { label: "评分", value: 'Rate' },
  { label: "标签", value: 'Tags' },
  // { label: "类别", value: 'Text' },
  { label: "文本框", value: 'Texture' },
];

const convertEnumsToOptions = (enums) =>
  enums.map((label, idx) => ({ label, value: Number(idx) }));

export const tableColumn = [
  {
    name: "id",
    label: "id",
    type: "Input",
    hidden: true
  },
  {
    name: "label",
    label: "名称",
    type: "Input",
  },
  {
    name: "description",
    label: "描述",
    type: "TextArea",
  },
  {
    name: "field",
    label: "字段",
    required: true,
    type: "Input",
    rules: [
      {
        pattern: /^[a-zA-Z_]([a-zA-Z0-9_-]{0,200})$/,
        message: "只能包含字母、下划线或数字，并以下划线或字母开头！",
      },
    ],
  },
  {
    name: "type",
    label: "类型",
    required: true,
    type: "Select",
    options: FORM_ITEM_TYPES_OPTIONS,
    allowClear: false,
  },
  {
    name: "options",
    label: "校验",
    type: "FormList",
    schema: [
      {
        name: "label",
        label: "标签名称",
        type: "Input",
        placeholder: "请输入标签名称",
      },
      {
        name: "value",
        label: "值",
        type: "Input",
      },
    ],
    prerequisites: [
      {
        field: 'type',
        options: {
          include: ['Radio', 'Checkbox']
        }
      }
    ]
  },
  {
    name: 'set',
    label: '设置',
    type: 'Checkbox',
    options: [
      {
        label: '必填',
        value: 1,
      },
      {
        label: '禁用',
        value: 2,
      },
      {
        label: '显示',
        value: 4,
      }
    ],
    // defaultValue: [4]
  },
  // {
  //   name: "required",
  //   label: "是否必填",
  //   type: "Switch",
  //   defaultValue: false,
  // },
  {
    name: "defaultValue",
    label: "默认值",
    type: "Input",
    prerequisites: [
      {
        field: 'type',
        options: {
          equal: [0]
        }
      }
    ]
  },
  {
    name: "defaultValue",
    label: "默认值",
    type: "InputNumber",
    prerequisites: [
      {
        field: 'type',
        options: {
          equal: [1]
        }
      }
    ]
  },
  {
    name: "defaultValue",
    label: "默认值",
    type: "Switch",
    prerequisites: [
      {
        field: 'type',
        options: {
          equal: [2]
        }
      }
    ]
  },
  {
    name: "defaultValue",
    label: "默认值",
    type: "Select",
    prerequisites: [
      {
        field: 'type',
        options: {
          equal: [3]
        }
      }
    ]
  },
  {
    name: "rules",
    label: "校验",
    type: "FormList",
    schema: [
      {
        name: "pattern",
        label: "正则匹配",
        type: "Input",
        placeholder: "请输入正则表达式",
      },
      {
        name: "message",
        label: "错误提示",
        type: "Input",
      },
    ],
  },
  // {
  //   name: "disabled",
  //   label: "是否禁用",
  //   type: "Switch",
  //   defaultValue: false,
  // },
  // {
  //   name: "display",
  //   label: "是否显示",
  //   type: "Switch",
  //   defaultValue: true,
  // },
  {
    name: "wrapperCol",
    label: "控件",
    type: "Compact",
    schema: [
      {
        name: "span",
        label: '跨距',
        type: "InputNumber",
        min: 1,
        max: 24,
      },
      {
        name: "offset",
        label: '偏移',
        type: "InputNumber",
        min: 0,
        max: 24,
      },
      {
        name: "size",
        label: '大小',
        type: "Select",
        options: [
          {
            label: '偏小',
            value: 'small'
          },
          {
            label: '中等',
            value: 'middle'
          },
          {
            label: '偏大',
            value: 'large'
          }
        ]
      },
    ],
    value: {
      offset: 0,
      span: 16,
      size: 'small'
    },
    required: true,
  },
  {
    name: "autocomplete",
    label: "自动完成",
    type: "Switch",
  },
];
