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

type indexType = number

interface IDimension {
  label: string;
  field: string;
  sort: 0 | 1 | -1; // 原序 正序 倒序
  scale: 0; // 
  unit: string;
}

interface ICoordinate {
  type: "cartesian2d" | "polar" = "cartesian2d";
  xAxis?: indexType;
  yAxis?: indexType;
}

interface IAnimation {
  enable: boolean;
  duration: number;
}

interface ChartOption {
  title: string;
  type: "BarChart" | "PieChart";
  layout?: "horizontal" | "vertical" | 'TB' | 'BT' | 'LR' | 'RL'; // 水平或垂直 
  group?: string;
  stack?: string;
  percentage: boolean; // 是否百分比值
  dimensions: IDimension[];
  coordinate: ICoordinate;
  animation: IAnimation;
  colors: (colorType | linearGradientType | radialGradientType)[];
}
