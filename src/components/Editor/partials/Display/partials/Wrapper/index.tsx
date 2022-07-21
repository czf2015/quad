// @ts-nocheck
import React from "react";
import styles from "./index.module.less";

export const Wrapper = ({
  name,
  id,
  pid,
  title,
  style,
  removeWidget,
  children,
}: IWrapperProps) => {
  const remove = (e) => {
    e.stopPropagation();
    removeWidget(id);
  };
  return (
    <div className={styles.wrapper} onClick={remove}>
      {children}
    </div>
  );
};
