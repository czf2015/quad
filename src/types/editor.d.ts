import { CSSProperties, ReactNode } from "react";

type idType = number | string;

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
  id: idType;
  pid: idType;
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
  widgets?: idType[];
}

interface IWrapperProps extends IEntity {
  removeEntity: Function;
  style?: CSSProperties;
  children?: ReactNode;
}

interface IClassNames {
  [propName: string]: string;
}
interface ISlots {
  [propName: string]: ReactNode;
}
interface IComponentBlocks {
  [propName: string]: idType;
}
type actionType = string;
type payloadType = any;
interface IComponentProps extends IEntity {
  id: idType;
  pid: idType;
  blocks?: IComponentBlocks;
  slots?: ISlots;
  store?: Function; //
  dispatch?: (message: { type: actionType; payload: payloadType }) => any;
  classNames?: IClassNames;
  style?: CSSProperties;
  children?: ReactNode;
}

interface IConfigPanelProps {
  //
}
