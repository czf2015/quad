// plugins 扩展插件
// setters 设置器
// utils 工具方法
// context 共享数据
// events 事件绑定
// simulator
// assets 物料资产

interface IBoxStyle {
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
  outline?: string;
  overflow?: string;
}

interface ITextStyle {
  fontFamily?: string;
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
  indent: string;
  align: "left" | "center" | "right";
  textOverflow?: string;
  whiteSpace?:
    | "normal"
    | "pre"
    | "nowrap"
    | "pre-wrap"
    | "pre-line"
    | "inherit";
  color?: string;
  background?: string;
}

interface IPositionStyle {
  position?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

interface IElementStyle extends IBoxStyle, IPositionStyle, ITextStyle {}

interface IComponentPropsStyles {
  [propName: string]: IElementStyle;
}

interface IWrapperClassNames {
  [propName: string]: string;
}

interface IInitials {
  [propName: string]: any;
}

interface IUpdates {
  [propName: string]: any;
}

interface IActions {
  [propName: string]: {
    type: string;
    handler: Function;
  };
}

interface IAnimates {
  [propName: string]: boolean;
}

// 组件规范数据结构设计
interface IComponentProps {
  pid: string; // 父级组件标识
  id: string; // 唯一标识
  name: string; // 英文名称
  title: string; // 中文名称
  initials?: IInitials; // 初始状态
  updates?: IUpdates; // 更新状态
  actions?: IActions; // 行为
  loading?: boolean; // 加载状态
  interval?: number; // undefined 表示定时
  animates?: IAnimates; // 动效
  styles: IComponentPropsStyles; //
  wrapperClassNames?: IWrapperClassNames;
  [propName: string]: any;
}

interface IComponent {
  category: string; // 分类
  // sort?: number;
  adapter: Function; // 适配器
  props: IComponentProps; //
}

// export const useMutable = (initialValue) => {
//   const [state, setState] = useState(initialValue);
//   const getter = (key) => (typeof key == "undefined" ? state : state?.[key]);
//   const setter = (key, value) =>
//     typeof value == "undefined"
//       ? setState(key)
//       : setState((oldState) => ({ ...oldState, key: value }));
//   return [getter, setter];
// };

interface IWrapperProps {
  name: "Wrapper";
  id: number | string;
  pid: number | string;
  title: string;
  style?: IElementStyle;
  removeWidget: Function;
}

interface ISubareaProps extends IWrapperProps {
  name: "Subarea";
  quad: "top" | "bottom" | "left" | "right"; // 分割区块，对应的可拉伸的边分别为下边、下边、右边及左边
  splitSubarea: Function;
  pullSubarea: Function;
}
