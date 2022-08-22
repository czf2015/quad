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
  percentage: boolean;
  unit: string;
  axis?: string;
}

type cartesian2dCoordinateType = {
  type: "cartesian2d";
  xAxis?: indexType;
  yAxis?: indexType;
}

type polarCoordinateType = {
  type: "polar";
  angle?: indexType;
  radius?: indexType;
}

type categoryCoordinate {
  type: "category";
  category?: indexType;
  value?: indexType;
}

type coordinateType = cartesian2dCoordinateType | polarCoordinateType | categoryCoordinateType

type animationType = number

interface ChartOption {
  title: string;
  type: "BarChart" | "PieChart";
  layout?: "horizontal" | "vertical" | 'TB' | 'BT' | 'LR' | 'RL'; // 水平或垂直 
  dimensions: IDimension[];
  coordinate: coordinateType;
  group?: string;
  stack?: string;
  animation?: animationType;
  color: (colorType | linearGradientType | radialGradientType)[];
}
