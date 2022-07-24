import { CSSProperties, ReactNode } from "react";

type blockIDType = number
type widgetIDType = string
type idType = blockIDType | widgetIDType

interface IWidget {
  name: string;
  title: string;
  icon?: string;
  description?: string;
}

interface IWidgetCategory {
  category: string;
  title: string;
  description?: string;
  items: IWidget[];
}

interface IEntity extends IWidget {
  id: idType;
  pid: idType;
}

type quadType = "top" | "bottom" | "left" | "right";
interface IBlockProps extends IEntity {
  id: blockIDType;
  pid: blockIDType;
  name: "Block";
  quad?: quadType;
  isHorizontal: boolean;
  setIsHorizontal: Function;
  hiddenClip: boolean;
  setHiddenClip: Function;
  updateEntity: Function;
  removeEntity: Function;
  splitBlock: Function;
  pullBlock: Function;
  style?: CSSProperties;
  children?: ReactNode;
  widgets?: widgetIDType[];
}

interface IWrapperProps extends IEntity {
  removeEntity: Function;
  style?: CSSProperties;
  children?: ReactNode;
}

interface IClassNames {
  [propName: string]: string;
}
type actionType = string;
type payloadType = any;
interface IComponentProps extends IEntity {
  id: widgetIDType;
  pid: widgetIDType;
  blocks?: blockIDType[];
  store?: Function; // 
  dispatch?: (message: { type: actionType, payload: payloadType }) => any;
  classNames?: IClassNames;
  style?: CSSProperties;
  children?: ReactNode;
}

interface IConfigPanelProps {
  //
}
