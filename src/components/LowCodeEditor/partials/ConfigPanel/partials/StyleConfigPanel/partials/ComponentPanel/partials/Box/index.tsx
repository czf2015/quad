// @ts-nocheck
import React from "react";
import { CustomInput as Margins } from "../../../common";
import { helper } from "../helpers";
import styles from "./index.module.less";

export const Box = ({ store }) => {
  const config = [
    { label: "宽度", store_name: "width", isDisconnect: false, labelMarginLeft: 10 },
    { label: "高度", store_name: "height", isDisconnect: false, labelMarginLeft: 10 },
    { label: "内边距", store_name: "padding", isDisconnect: true },
    { label: "外边距", store_name: "margin", isDisconnect: true },
  ];
  const margins = helper(store, config);
  return (
    <div className={styles.box}>
      <h4 className={styles.title}>盒子模型</h4>
      {margins?.map((item, index) => (
        <Margins key={index} {...item} />
      ))}
    </div>
  );
};
