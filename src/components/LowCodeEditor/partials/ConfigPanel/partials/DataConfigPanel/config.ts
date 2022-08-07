export const formProps = {
  disabled: false,
  requiredMark: true,
  layout: "horizontal",
  wrapperCol: {
    span: 18,
  },
  labelCol: {
    span: 6,
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
            equal: [0],
          },
        },
      ],
    },
    {
      name: "method",
      label: "方法",
      type: "Select",
      options: [
        {
          label: "POST",
          value: 'post',
        },
        {
          label: "GET",
          value: 'get',
        },
        {
          label: "PUT",
          value: 'put',
        },
        {
          label: "DELETE",
          value: 'delete',
        },
      ],
      required: true,
      placeholder: "请选择请求方法！",
      prerequisites: [
        {
          field: "type",
          options: {
            equal: [0],
          },
        },
      ],
    },
    {
      name: "params",
      label: "参数",
      type: "Json",
      placeholder: "请输入参数信息！",
      prerequisites: [
        {
          field: "type",
          options: {
            equal: [0],
          },
        },
      ],
    },
    {
      name: "interval",
      label: "刷新间隔",
      type: "InputNumber",
      addonAfter: '秒',
      prerequisites: [
        {
          field: "type",
          options: {
            equal: [0],
          },
        },
      ],
    },
    {
      name: "data",
      label: "数据",
      type: "Code",
      prerequisites: [
        {
          field: "type",
          options: {
            equal: [1],
          },
        },
      ],
    },
    {
      name: "preprocess",
      label: "预处理",
      type: "Code",
    },
  ],
};
