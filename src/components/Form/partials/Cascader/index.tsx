/**
 * @Author 
 * @Description 
 * @Create who[when]
 * @Revise what --who[when]
 */

// @ts-nocheck
import React from "react";
import { Cascader as AntdCascader } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

const Cascader = ({ ...props }) => {
  return (
    <AntdCascader
      showSearch
      allowClear
      suffixIcon={
        <CaretDownOutlined
          style={{ color: "var(--xdrsec-select-suffix-icon-color)" }}
        />
      }
      getPopupContainer={trigger => trigger.parentNode}  // 能解决父级消失，级联面板还在的问题
      {...props}
    ></AntdCascader>
  );
};
export default Cascader;

