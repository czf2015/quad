export default [
  {
    name: "Block",
    id: 0b1,
    pid: 0b0,
    title: "页面",
    hasBlock: true,
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
    hasBlock: true,
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
    hasBlock: true,
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
];
