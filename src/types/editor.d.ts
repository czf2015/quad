import { CSSProperties, ReactNode } from "react";

interface IWidget {
  name: string;
  title: string;
}

interface IWidgetsPanelProps {
  category: string;
  title: string;
  children: IWidget[];
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

interface IInitials {
  [propName: string]: any;
}
interface IUpdates {
  [propName: string]: any;
}
interface IIntervals {
  [propName: string]: number;
}
interface ILoadings {
  [propName: string]: boolean;
}
interface IWrapperClassNames {
  [propName: string]: string;
}
type actionType = string;
type payloadType = any;
interface IDeclare {
  [propName: actionType]: payloadType;
}
interface IComponentProps extends IEntity {
  initials?: IInitials;
  updates?: IUpdates;
  loadings?: ILoadings;
  intervals?: IIntervals;
  wrapperClassNames?: IWrapperClassNames;
  style?: CSSProperties;
  children?: ReactNode;
  dispatch?: (declare: IDeclare) => any;
}

interface IConfigPanelProps {
  //
}
