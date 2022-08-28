type colorType = string;
type offsetType = number;

type colorStopType = {
  offset: offsetType;
  color: colorType; // 0% 处的颜色
};

type linearGradientType = {
  type: "linear";
  x1: offsetType;
  y1: offsetType;
  x2: offsetType;
  y2: offsetType;
  colorStops: colorStopType[];
};
type angleType = number
type radialGradientType = {
  type: "radial";
  cx: offsetType;
  cy: offsetType;
  rx: offsetType;
  ry: offsetType;
  angle: angleType;
  colorStops: colorStopType[];
};

enum enumTransform {
  RAW,
  POWER,
  LOG
}
type scaleType = {
  transform: enumTransform; // 
  base: number
}
enum enumSort {
  ORIGINAL,
  POSITIVE,
  NEGATIVE,
}
type axisType = 'xAxis' | 'yAxis' | 'angle' | 'radius'
interface IDimension {
  axis?: axisType;
  field: string;
  label: string;
  sort: enumSort; // 原序 正序 倒序
  scale: scaleType;
  unit: string;
}

type animationType = number

// type indexType = number
// type cartesian2dCoordinateType = {
//   type: "cartesian2d";
//   xAxis?: indexType;
//   yAxis?: indexType;
// }

// type polarCoordinateType = {
//   type: "polar";
//   angle?: indexType;
//   radius?: indexType;
// }

// type categoryCoordinate {
//   type: "category";
//   category?: indexType;
//   value?: indexType;
// }

// type coordinateType = cartesian2dCoordinateType | polarCoordinateType | categoryCoordinateType

interface ChartOption {
  title: string;
  type: "bar" | "line";
  layout?: "horizontal" | "vertical" | 'TB' | 'BT' | 'LR' | 'RL'; // 水平或垂直 
  dimensions: IDimension[];
  // coordinate: coordinateType;
  percentage: boolean;
  group?: string;
  stack?: string;
  animation?: animationType;
  color: (colorType | linearGradientType | radialGradientType)[];
}
