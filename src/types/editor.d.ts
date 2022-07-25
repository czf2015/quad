import { CSSProperties, ReactNode } from "react";

type idType = number | string;
type slotsKeyType = string
interface ISlots {
  [propName: slotsKeyType]: ReactNode;
}
type actionType = string;
type payloadType = any;
type dispatchType = (message: { type: actionType; payload: payloadType }) => any

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
  store?: Function; //
  updateEntity: Function;
  removeEntity: Function;
  onDrop: Function;
}

type quadType = "top" | "bottom" | "left" | "right";
interface IBlockProps extends IEntity {
  name: "Block";
  quad?: quadType;
  slot?: slotKeyType;
  splitBlock: Function;
  pullBlock: Function;
  widgets?: idType[];
}

interface IWrapperProps extends IEntity {
}

interface IClassNames {
  [propName: string]: string;
}
interface IComponentBlocks {
  [propName: slotsKeyType]: idType;
}
interface IComponentProps extends IEntity {
  blocks?: IComponentBlocks;
  slots?: ISlots;
  classNames?: IClassNames;
  dispatch?: dispatchType;
}

interface IConfigPanelProps {
  //
}
