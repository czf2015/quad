import content from "./content";

export default {
  id: 'xxx',
  tilte: "xxxx",
  icon: "/favicon.svg",
  lang: "en",
  keywords: ["低代码"],
  description: "",
  content,
  width: 1440 /*  * 2 */,
  height: 1080 /*  * 4 */,
  tags: [],
  path: "/custom/demo",
  query: {
    id: 1,
  },
  template: "圣杯布局-1",
  timezone: "China Standard Time",
  published: 0, // 预览 发布
  version: "<% major %>.<% minor %>.<% modify %>", // 随发布变更
  logs: [
    {
      info: "", // 信息
      timestamp: "2022-07-23 23:58:55",
      version: "<% version %>",
    },
  ], // 日志信息, 追加时间，可以按时间轴方式或按天进行汇总显示
  errors: [
    {
      name: "XxxError",
      message: "xxxxxxx",
    },
  ], // 错误信息
  operations: [
    {
      name: "xxx",
      message: "yyyy",
    },
  ], // 操作记录
};
