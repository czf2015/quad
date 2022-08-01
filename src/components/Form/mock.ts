export const formProps = {
  initialValues: {
    type: 0,
  },
  disabled: false,
  requiredMark: true,
  layout: "horizontal",
  wrapperCol: {
    span: 14,
  },
  labelCol: {
    span: 4,
  },
  labelAlign: "right",
  children: [
    {
      name: "type",
      label: "类型",
      type: "Radio",
      options: [
        {
          label: "接口",
          value: 0,
        },
        {
          label: "手填",
          value: 1,
        },
      ],
    },
    {
      name: "url",
      label: "地址",
      type: "Input",
      required: true,
      placeholder: "请输入接口地址！",
      prerequisites: [
        {
          field: "type",
          options: {
            all: [0],
          },
        },
      ],
    },
    {
      name: "query",
      label: "参数",
      type: "TextArea",
      // required: true,
      placeholder: "请输入参数信息！",
      prerequisites: [
        {
          field: "type",
          options: {
            all: [0],
          },
        },
      ],
    },
    {
      name: "data",
      label: "数据",
      type: "TextArea",
      required: true,
      placeholder: "请输入数据！",
      prerequisites: [
        {
          field: "type",
          options: {
            all: [1],
          },
        },
      ],
    },
  ],
};
