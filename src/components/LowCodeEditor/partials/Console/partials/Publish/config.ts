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
      name: 'id',
      type: 'Input',
      hidden: true,
    },
    {
      name: "version",
      label: "版本号",
      type: "Input",
      rules: [{ required: true, message: "请输入版本号信息" }],
      required: true,
    },
    {
      name: "path",
      label: "路径",
      type: "Input",
      rules: [{ required: true, message: "请输入页面路径" }],
      required: true,
    },
    {
      name: "remark",
      label: "备注",
      type: "TextArea",
      placeholder: "版本信息",
    },
  ],
};
