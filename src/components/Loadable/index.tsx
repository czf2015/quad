/**
 * 懒加载 组件
 */
import React from 'react';
import { Spin } from "antd";
import loadable from '@loadable/component';

export default (component) => loadable(
  component,
  { fallback: <Spin /> },
);
