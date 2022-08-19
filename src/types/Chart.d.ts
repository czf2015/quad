interface ChartOption {
  wrapper: {
    type: "card";
  };
  type: "BarChart" | "PieChart";
  layout: "horizontal" | "vertical";
  // subtype: 'base' |
  group: "year";
  stack: "region";
  numeric: 0; // -数值 -百分比
  scale: 0; // 坐标比例尺
  dimensions: [
    {
      type: 0;
      label: "维度(X轴)";
      value: "name";
      unit: "天";
    },
    {
      type: 1;
      label: "数量(Y轴)";
      value: "number";
      unit: "个";
    }
  ];
  refer: {};
  animation: {
    enable: boolean;
    duration: number;
  }
  coordinate: '',
  darkMode: boolean;
  color: [];
  
}
