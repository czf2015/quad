// // plugins 扩展插件
// // setters 设置器
// // utils 工具方法
// // context 共享数据
// // events 事件绑定
// // simulator
// // assets 物料资产

// interface IBoxStyle {
//   margin?: string;
//   padding?: string;
//   width?: string;
//   height?: string;
//   border?: string;
//   borderRadius?: string;
//   outline?: string;
//   overflow?: string;
// }

// interface ITextStyle {
//   fontFamily?: string;
//   fontWeight?: string;
//   fontSize?: string;
//   lineHeight?: string;
//   indent: string;
//   align: "left" | "center" | "right";
//   textOverflow?: string;
//   whiteSpace?:
//     | "normal"
//     | "pre"
//     | "nowrap"
//     | "pre-wrap"
//     | "pre-line"
//     | "inherit";
//   color?: string;
//   background?: string;
// }

// interface IPositionStyle {
//   position?: string;
//   top?: string;
//   bottom?: string;
//   left?: string;
//   right?: string;
// }

// interface IElementStyle extends IBoxStyle, IPositionStyle, ITextStyle {}

// interface IComponentPropsStyles {
//   [propName: string]: IElementStyle;
// }

// export const useMutable = (initialValue) => {
//   const [state, setState] = useState(initialValue);
//   const getter = (key) => (typeof key == "undefined" ? state : state?.[key]);
//   const setter = (key, value) =>
//     typeof value == "undefined"
//       ? setState(key)
//       : setState((oldState) => ({ ...oldState, key: value }));
//   return [getter, setter];
// };
