// @ts-nocheck
import React from "react";
import { DeleteOutlined } from '@ant-design/icons'
import styles from "./index.module.less";

export const Wrapper = ({
  name,
  id,
  pid,
  title = '',
  removeEntity,
  handleDrop,
  style,
  children,
}: IWrapperProps) => {
  const remove = (e) => {
    e.stopPropagation();
    removeEntity(id);
  };

  const onDragStart = (e) => {
    e.dataTransfer.setData("dragWidgetId", id);
  };
  const onDragOver = (e) => {
    e.preventDefault()
  }
  const onDrop = handleDrop(id)

  return (
    <div id={id} className={styles.wrapper} draggable onDragStart={onDragStart} onDragOver={onDragOver} onDrop={onDrop}>
      <DeleteOutlined className={`${styles.delete_btn} quad-circle`} onClick={remove} />
      {children}
    </div>
  );
};
