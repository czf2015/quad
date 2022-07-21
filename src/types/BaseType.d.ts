interface IAdapter {
  [propName: string]: string;
}

type orderType = number;

interface ITreeNode {
  id: number;
  pid: number = 0;
  order: orderType;
  children?: ITreeNode[];
}

interface IOrder {
  order: orderType;
}

interface ISelectOption {
  name: string;
  value: number | string;
}

interface IRoute {
  key?: string
  path: string = '/'
  component?: React.ReactComponentElement
  redirect?: string
  childRoutes?: IRoute[]
}

interface IRef {
  current: any
}

