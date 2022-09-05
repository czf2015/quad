// @ts-nocheck
import React from "react";
import { Input } from "antd";
import { useInputValue } from "@/hooks";
import styles from "./index.module.less";

export default ({ store, store_name, icon }) => {
  const { inputValue, handleInputChange, setResetInput } = useInputValue(store(store_name));
  const rule = /^[0-9]*$/;
  const handleBlur = (e) => {
    if (rule.test(e.target.value)) {
      store(store_name, e.target.value);
    } else {
      setResetInput((pre) => pre + 1);
    }
  };
  return (
    <div className={styles.container}>
      <Input
        className={styles.input}
        size="small"
        prefix={icon()}
        bordered={false}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
    </div>
  );
};
