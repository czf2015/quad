export default [
  {
    name: "Block",
    id: 0b1,
    pid: 0b0,
    title: "页面",
    style: {
      width: 1440,
      height: 1080,
      backgroundColor: "#f9cc9d",
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
      backgroundColor: "#fddd9b",
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
      backgroundColor: "#fff",
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
      backgroundColor: "#8cb6c0",
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
      backgroundColor: "#f9cc9d",
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
      backgroundColor: "#c3d08b",
    },
  },  
  {
    name: 'WidgetsPanel',
    id: 'WidgetsPanel-1',
    pid: 0b110,
    title: "组件栏",
    blocks: ['WidgetsPanel-1-1'],
    style: {
      width: '100%',
      height: '100%',
      backgroundColor: 'red'
    },
  },
  {
    name: 'ConfigPanel',
    id: 'ConfigPanel-1',
    pid: 0b1111,
    title: "配置栏",
  },
  {
    name: "Block",
    id: 'WidgetsPanel-1-1',
    pid: 'WidgetsPanel-1',
    title: "WidgetsPanel-1-1",
    style: {
      width: 100,
      height: 100,
      backgroundColor: 'red'
    },
  },
];
