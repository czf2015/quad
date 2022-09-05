// @ts-nocheck
import React from "react";
import { InputNumber } from "antd";
import styles from "./index.module.less";

export default ({ store, store_name, icon,value }) => {
  const onChange = (value) => {
    store(store_name,value)
  }
  
  return (
    <div className={styles.container}>
      <InputNumber
        className={styles.input}
        size="small"
        min={20}
        prefix={icon()}
        bordered={false}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
