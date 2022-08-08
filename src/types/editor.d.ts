import { CSSProperties, ReactNode } from "react";

type idType = number | string;
type actionType = string;
type payloadType = number | string | boolean | Array | Object | Function;
interface IMessage {
  id: idType;
  type: actionType;
  payload: payloadType;
  description?: string;
}
type dispatchType = (message: IMessage) => any;
type eventType =
  | "onClick"
  | "onMenuContext"
  | "onMouseEnter"
  | "onMouseLeave"
  | "onMouseOver"
  | "onDragStart"
  | "onDragOver"
  | "onDragEnd"
  | "onDrop";
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

interface IWrapperProps extends IEntity {}

interface IClassNames {
  [propName: string]: string;
}
type slotsKeyType = string;
interface ISlots {
  [propName: slotsKeyType]: ReactNode;
}
interface IComponentBlocks {
  [propName: slotsKeyType]: idType;
}
interface IBind extends IMessage {
  title?: string;
  target: string;
  event: eventType;
}
interface IHandler {
  id: idType;
  type: eventType;
  enable?: boolean;
  handle?: dispatchType;
}
interface IInteractConfig {
  binds: IBind[];
  handlers: IHandler[];
}

enum enumDataType {
  API,
  MANUAL,
}
enum enumRequestMethod {
  POST = 'post',
  GET = 'get',
  PUT = 'put',
  DELETE = 'delete',
}
interface IRequestParams {
  [propName: string]: any
}
interface IDataSource {
  type: enumDataType;
  url?: string;
  method?: enumRequestMethod;
  params?: IRequestParams;
  data?: any;
  proprocess?: Function;
}
interface IComponentProps extends IEntity {
  blocks?: IComponentBlocks;
  slots?: ISlots;
  classNames?: IClassNames;
  dataSource?: IDataSource;
  binds?: IBind[];
  handlers?: dispatchType[];
  mode?: 'card' | 'plain';
}
enum IConfigPanelTabKey {
  STYLE, // 样式
  DATA, // 数据
  INTERACT, // 交互
}
interface IConfigPanelTabPane {
  key: IConfigPanelTabKey;
  tab: "样式" | "数据" | "交互";
  pane: IStyleConfig | IDataSource | IInteractConfig;
}

interface IConfigPanelProps {
  id: idType;
  name: string;
  title?: string;
  description?: string;
  tabs: IConfigPanelTabPane[];
}

