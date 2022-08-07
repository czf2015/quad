const FORM_ITEM_TYPES = [
  "文字",
  "数字",
  "勾选",
  "单选",
  "多选",
  "日期",
  "时间",
  "附件",
  "评分",
  "标签",
  "类别",
  "文本框",
];

const convertEnumsToOptions = (enums) =>
  enums.map((label, idx) => ({ label, value: Number(idx) }));

export const tableColumn = [
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
    options: convertEnumsToOptions(FORM_ITEM_TYPES),
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
];

export const columns = [
  {
    title: '',
    dataIndex: '',
    key: '',
    width: 120,
    fixed: 'left',
    children: []
  }
]
