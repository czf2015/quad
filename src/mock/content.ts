export default [
  {
    name: "Block",
    id: 0b1,
    pid: 0b0,
    title: "页面",
    style: {
      width: 1440,
      height: 1080,
    },
  },
  {
    name: "Block",
    id: 0b10,
    pid: 0b1,
    title: "页面-顶部栏",
    quad: "top",
    style: {
      width: "100%",
      height: 64,
    },
  },
  {
    name: "Block",
    id: 0b11,
    pid: 0b1,
    title: "页面-编辑区",
    quad: "bottom",
    style: {
      width: "100%",
      height: "calc(100% - 64px)",
    },
  },
  {
    name: "Block",
    id: 0b110,
    pid: 0b11,
    title: "页面-编辑区-左侧组件面板",
    quad: "left",
    style: {
      width: 216,
      height: "100%",
    },
  },
  {
    name: "Block",
    id: 0b111,
    pid: 0b11,
    title: "页面-编辑区-右侧",
    quad: "right",
    style: {
      width: "calc(100% - 216px)",
      height: "100%",
    },
  },
  {
    name: "Block",
    id: 0b1110,
    pid: 0b111,
    title: "页面-编辑区-右侧-中间显示区",
    quad: "left",
    style: {
      width: 960,
      height: "100%",
    },
  },
  {
    name: "Block",
    id: 0b1111,
    pid: 0b111,
    title: "页面-编辑区-右侧 -右侧配置面板",
    quad: "right",
    style: {
      width: "calc(100% - 960px)",
      height: "100%",
    },
  },
  {
    name: "Button",
    id: "Widget-1",
    pid: 0b110,
    title: "组件栏",
    blocks: {
      left: "Widget-1-left",
      right: "Widget-1-right",
    },
    style: {
      // width: '100%',
      // height: '100%',
    },
  },
  {
    name: "ConfigPanel",
    id: "ConfigPanel-1",
    pid: 0b1111,
    title: "配置栏",
  },
  {
    name: "Block",
    id: "Widget-1-left",
    pid: "Widget-1",
    title: "Widget-1-left",
    style: {
      width: 100,
      height: 100,
    },
  },
  {
    name: "Block",
    id: "Widget-1-right",
    pid: "Widget-1",
    title: "Widget-1-right",
    style: {
      width: 100,
      height: 100,
    },
  },
];
