export const tabList = [
  {
    tab: "事件绑定",
    key: "binds",
    schema: [
      {
        name: "target",
        label: "绑定对象",
        rules: [{ required: true, message: "请输入消息类型！" }],
        type: "Select",
        placeholder: "请输入消息类型",
      },
      {
        name: "event",
        label: "事件类型",
        type: "Select",
        options: [{ label: "单击", value: "onClick" }],
      },
      {
        name: "type",
        label: "消息类型",
        type: "Select",
        mode: "tags",
        options: [{ label: "打开弹窗", value: "OPEN_DRAWER" }],
      },
      {
        name: "description",
        label: "描述说明",
        type: "TextArea",
      },
    ],
  },
  {
    tab: "事件处理",
    key: "handlers",
    schema: [
      {
        name: "type",
        label: "消息类型",
        rules: [{ required: true, message: "请输入消息类型！" }],
        type: "Input",
        placeholder: "请输入消息类型",
      },
      {
        name: "id",
        label: "消息来源组件id",
        type: "Input",
      },
      {
        name: "handle",
        label: "处理函数",
        type: "Code",
      },
    ],
  },
];
