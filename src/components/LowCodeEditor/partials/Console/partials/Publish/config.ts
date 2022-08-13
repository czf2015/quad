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
      name: "version",
      label: "版本号",
      type: "Input",
      placeholder: "请输入版本号",
    },
    {
      name: "tags",
      label: "标签",
      type: "Select",
      mode: "tags",
    },
  ],
};
