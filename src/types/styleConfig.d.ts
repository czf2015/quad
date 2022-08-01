// =======IPosition================
enum enumPosition {
  STATIC,
  RELATIVE,
  ABSOLUTE,
  FIXED,
  STICKY,
}
interface IPosition {
  position?: enumPosition;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}
// =============IBorder=============
enum enumLine {
  SOLID,
  DASHED,
}
type colorType = string;
type borderType = {
  type: enumLine; // 类型
  color: colorType; // 颜色
  thickness: number | string; // 粗细
};

type borderRadiusType = string;
interface IBorder {
  border?: borderType;
  borderTop?: borderType;
  borderBottom?: borderType;
  borderLeft?: borderType;
  borderRight?: borderType;
  borderRadius?: borderRadiusType;
}
// ================IConstraints：对区块Block生效==================
enum enumConstraint {
  START, // 左对齐
  END, // 右对齐
  CENTER, // 居中
  BETWEEN, // 两端对齐
  EVENLY, // 间隔均匀
}
interface IConstraints {
  horizontal: enumConstraint;
  vertical: enumConstraint;
}
// ============IBox=====================
interface IBoxShadow {}
interface IBox extends IPosition, IBorder {
  margin: number | string;
  padding: number | string;
  width: number | string;
  height: number | string;
  constraints: IConstraints;
  boxShadow: IBoxShadow;
}
// ================IText====================
interface IFont {
  fontSize: number | string;
  fontWeight: number | string;
  fontFamily: string;
}
enum enumTextAlign {
  LEFT,
  right,
  CENTER,
}
enum enumBaseline {}
enum enumWrap {
  WRAP,
  NO_WRAP,
}
interface IText extends IFont {
  textIndent: number | string;
  textAlign: enumTextAlign;
  baseline: enumBaseline;
  spacing: number | string;
  wrap: enumWrap;
  color: colorType;
}
// ==============ILayer==================
enum enumOverflow {
  AUTO,
  VISIBLE,
  HIDDEN,
}
interface IOverflow {
  overflow?: enumOverflow;
  overflowX?: enumOverflow;
  overflowY?: enumOverflow;
}
interface ILayerFill {}
interface ILayerStroke {}
// ITransform：对区块Block生效
interface ITransform {
  scale?: number;
  scaleX?: number;
  scaleY?: number;
  rotate?: number;
}
interface ILayer extends IOverflow {
  transform: ITransform;
  fill: ILayerFill; // background
  stroke: ILayerStroke; // outline
  opacity: number; // 透明度
  z: number; // z-index
  hidden: boolean; // 隐藏
}
// =============IStyleConfig==========
interface IStyleConfig extends IBox, IText, ILayer {
}
