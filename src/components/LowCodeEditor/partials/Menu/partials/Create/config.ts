export const formProps = {
  disabled: false,
  requiredMark: true,
  layout: "horizontal",
  wrapperCol: {
    span: 16,
  },
  labelCol: {
    span: 5,
  },
  labelAlign: "right",
  children: [
    {
      name: "path",
      label: "路径",
      type: "Input",
      required: true,
    },
    {
      name: "query",
      label: "参数",
      type: "Code",
    },
    {
      name: "template",
      label: "模板",
      type: "Select",
      required: true,
      options: [
        {
          label: "空白页面",
          value: 0,
        },
        {
          label: "圣杯布局(1920px * 1080px)",
          value: 1,
        },
      ],
    },
    {
      name: "width",
      label: "页面宽度",
      type: "InputNumber",
      addonAfter: "px",
      required: true,
      prerequisites: [
        {
          field: "template",
          options: {
            all: [0],
          },
        },
      ],
    },
    {
      name: "height",
      label: "页面高度",
      type: "InputNumber",
      addonAfter: "px",
      required: true,
      prerequisites: [
        {
          field: "template",
          options: {
            all: [0],
          },
        },
      ],
    },
    {
      name: "title",
      label: "标题",
      type: "Input",
      placeholder: "请输入页面标题",
    },
    {
      name: "icon",
      label: "图标",
      type: "Upload",
      placeholder: "请输入页面图标",
    },
    {
      name: "keywords",
      label: "关键词",
      type: "Select",
      mode: "tags",
    },
    {
      name: "description",
      label: "描述",
      type: "TextArea",
    },
    {
      name: "lang",
      label: "语言",
      type: "Select",
      options: [
        {
          label: "中文",
          value: "zh",
        },
        {
          label: "英文",
          value: "en",
        },
      ],
    },
    {
      name: "timezone",
      label: "时区",
      type: "Select",
      options: [
        {
          label: "中国标准时区",
          value: "China Standard Time",
        },
      ],
    },
    {
      name: "tags",
      label: "标签",
      type: "Select",
      mode: "tags",
    },
  ],
};
