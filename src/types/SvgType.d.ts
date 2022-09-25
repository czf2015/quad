
interface ISvgImage {
  x: number;
  y: number;
  width: number;
  height: number;
  href: string;
}

type colorType = string

interface ISvgBase {
  stroke: colorType;
  strokeWidth: number
  strokeOpacity: number
  strokeDasharray: number | string;
  strokeDashoffset: number | string;
  strokeLinecap: string;
  fill: colorType;
  style: CSSStyleDeclaration;
}

// https://blog.csdn.net/weixin_40779234/article/details/113701444
interface ISvgText extends ISvgBase {
  x: number;
  y: number;
  textAnchor: 'start' | 'middle' | 'end';
  textLength: number;
  lengthAdjust: 'spacing' | 'spacingAndGlyphs' // spacing只调整字符之间的间隔；spacingAndGlyphs则会根据一定比例同时调整字符之间的间隔，以及字符本身宽度

}

interface ISvgLine extends ISvgBase {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

interface ISvgPolyline extends ISvgBase {
  points: string;
}

interface ISvgRect extends ISvgBase {
  x: number
  y: number
  width: number
  height: number
}

interface ISvgPolygon extends ISvgBase {
  points: string
}

// https://blog.csdn.net/weixin_40779234/article/details/113701412

interface ISvgCircle extends ISvgBase {
  cx: number;
  cy: number;
  r: number;
}

interface ISvgEllipse extends ISvgBase {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
}

interface ISvgPath extends ISvgBase {
  d: string;
}