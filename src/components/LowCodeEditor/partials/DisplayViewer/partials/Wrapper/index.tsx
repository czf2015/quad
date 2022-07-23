// @ts-nocheck
import React from "react";
import { DeleteOutlined } from '@ant-design/icons'
import styles from "./index.module.less";

export const Wrapper = ({
  name,
  id,
  pid,
  title,
  removeEntity,
  style,
  children,
}: IWrapperProps) => {
  const remove = (e) => {
    e.stopPropagation();
    removeEntity(id);
  };
  return (
    <div className={styles.wrapper}>
      <DeleteOutlined className={styles.delete_btn} onClick={remove} />
      {children}
    </div>
  );
};
