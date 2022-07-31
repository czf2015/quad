export const formProps = {
  initialValues: {
    // FieldA: "xxx",
    // FieldB: "",
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
      name: "FieldA",
      value: "xxxx",
      type: "Select",
      options: [
        {
          label: "最近30天",
          value: 0,
        },
        {
          label: "最近7天",
          value: 1,
        },
        {
          label: "最近24小时",
          value: 2,
        },
      ],
    },
    {
      name: "FieldB",
      value: "xxxx",
      type: "Input",
      placeholder: "input placeholder",
      prerequisites: [
        {
          field: "FieldA",
          options: {
            all: [1],
          },
        },
      ],
    },
  ],
};
