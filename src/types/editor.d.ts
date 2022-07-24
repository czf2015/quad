import { CSSProperties, ReactNode } from "react";

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
  id: number;
  pid: number;
}

type quadType = "top" | "bottom" | "left" | "right";
interface ISubareaProps extends IEntity {
  name: "Subarea";
  quad?: quadType;
  isHorizontal: boolean;
  setIsHorizontal: Function;
  hiddenClip: boolean;
  setHiddenClip: Function;
  updateEntity: Function;
  removeEntity: Function;
  splitSubarea: Function;
  pullSubarea: Function;
  style?: CSSProperties;
  children?: ReactNode;
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
  store?: Function; // 
  dispatch?: (message: { type: actionType, payload: payloadType }) => any;
  classNames?: IClassNames;
  style?: CSSProperties;
  children?: ReactNode;
}

interface IConfigPanelProps {
  //
}
