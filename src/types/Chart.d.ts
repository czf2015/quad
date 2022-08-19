type colorType = string;
type offsetType = number;

type colorStopType = {
  offset: offsetType;
  color: colorType; // 0% 处的颜色
};

type linearGradientType = {
  type: "linear";
  x: offsetType;
  y: offsetType;
  x2: offsetType;
  y2: offsetType;
  colorStops: colorStopType[];
};

type radialGradientType = {
  type: "radial";
  x: offsetType;
  y: offsetType;
  r: offsetType;
  colorStops: colorStopType[];
};

interface ChartOption {
  type: "BarChart" | "PieChart";
  layout: "horizontal" | "vertical"; // 水平或垂直 TB BT LR RL
  group: string;
  stack: string;
  percentage: boolean; // 是否百分比值
  dimensions: [
    {
      label: string;
      field: string;
      sort: 0 | 1 | -1; // 原序 正序 倒序
      scale: 0; //
      unit: string;
    },
    {
      label: string;
      field: string;
      sort: 0 | 1 | -1; // 原序 正序 倒序
      scale: 0; //
      unit: string;
    }
  ];
  coordinate: {
    type: "cartesian2d" | "polar" = "cartesian2d";
    xAxis: {
      index: number = 0;
      unique?: string;
    };
    yAxis: {
      index: number = 1;
      unique?: string;
    };
  };
  animation: {
    enable: boolean;
    duration: number;
  };
  colors: (colorType | linearGradientType | radialGradientType)[];
  title: string;
  style: {
    // width: number;
    // height: number;
    // margin: number;
    // padding: number;
    // border:
    // borderRadius
  };
}
