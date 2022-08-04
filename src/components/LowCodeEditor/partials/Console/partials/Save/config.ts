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
