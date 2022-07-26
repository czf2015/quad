export default [
  {
    name: "Block",
    id: 0b1,
    pid: 0b0,
    title: "页面",
    hasBlock: true,
    style: {
      top: 0,
      left: 0,
      width: 1440,
      height: 1080,
      backgroundColor: '#fff'
    },
  },
  {
    name: "Block",
    id: 0b10,
    pid: 0b1,
    title: "页面-顶部栏",
    quad: "top",
    style: {
      top: 0,
      left: 0,
      width: 1440,
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
      top: 64,
      left: 0,
      width: 1440,
      height: 1016,
    },
  },
  {
    name: "Block",
    id: 0b110,
    pid: 0b11,
    title: "页面-编辑区-左侧组件面板",
    quad: "left",
    style: {
      top: 64,
      left: 0,
      width: 216,
      height: 1016,
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
      top: 64,
      left: 216,
      width: 1224,
      height: 1016,
    },
  },
  {
    name: "Block",
    id: 0b1110,
    pid: 0b111,
    title: "页面-编辑区-右侧-中间显示区",
    quad: "left",
    style: {
      top: 64,
      left: 216,
      width: 960,
      height: 1016,
    },
  },
  {
    name: "Block",
    id: 0b1111,
    pid: 0b111,
    title: "页面-编辑区-右侧 -右侧配置面板",
    quad: "right",
    style: {
      top: 64,
      left: 1176,
      width: 264,
      height: 1016,
    },
  },
];
