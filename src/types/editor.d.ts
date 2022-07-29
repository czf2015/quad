import { CSSProperties, ReactNode } from "react";

type idType = number | string;
type actionType = string;
type payloadType = number | string | boolean | Array | Object | Function;
interface IMessage { id: idType; type: actionType; payload: payloadType; description?: string }
type dispatchType = (message: IMessage) => any
type eventType = 'onClick' | 'onMenuContext' | 'onMouseEnter' | 'onMouseLeave' | 'onMouseOver' | 'onDragStart' | 'onDragOver' | 'onDragEnd' | 'onDrop'
// type bindType = 'Confirm' | 'Drawer' | actionType

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
interface IBind extends IMessage {
  event: eventType;
}
interface IBinds {
  [propName: string]: IBind
}
interface IHandlers {
  [propName: string]: dispatchType
}
interface IDataSource {

}
interface IComponentProps extends IEntity {
  blocks?: IComponentBlocks;
  slots?: ISlots;
  classNames?: IClassNames;
  dataSource?: IDataSource;
  handlers?: IHandlers;
  binds?: IBinds;
}

interface IConfigPanelProps {
  //
}
