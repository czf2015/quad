import { CSSProperties, ReactNode } from "react";

type idType = number | string;
type actionType = string;
type payloadType = number | string | boolean | Array | Object | Function;
type dispatchType = (message: { type: actionType; payload: payloadType }) => any
type eventType = 'onClick' | 'onMenuContext' | 'onMouseEnter' | 'onMouseLeave' | 'onMouseOver' | 'onDragStart' | 'onDragOver' | 'onDragEnd' | 'onDrop'
type bindType = 'Confirm' | 'Drawer' | actionType

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
  hasBlock?: boolean;
  splitBlock: Function;
  pullBlock: Function;
  widgets?: idType[];
}

interface IWrapperProps extends IEntity {
}

interface IClassNames {
  [propName: string]: string;
}
type slotsKeyType = string
interface ISlots {
  [propName: slotsKeyType]: ReactNode;
}
interface IComponentBlocks {
  [propName: slotsKeyType]: idType;
}
interface IBinds {
  [propName: string]: {
    name: eventType;
    type: bindType;
    payload: payloadType;
  }
}
interface IComponentProps extends IEntity {
  blocks?: IComponentBlocks;
  slots?: ISlots;
  classNames?: IClassNames;
  dispatch?: dispatchType;
  binds: IBinds;
  // loads: 
  // 
}

interface IConfigPanelProps {
  //
}
