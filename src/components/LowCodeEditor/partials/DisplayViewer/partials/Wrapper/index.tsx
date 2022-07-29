// @ts-nocheck
import React, { useState } from "react";
import { useDragMove } from "@/hooks";
import { HolderOutlined, DeleteOutlined, ExpandAltOutlined } from '@ant-design/icons'
import styles from "./index.module.less";

export const Wrapper = ({
  name,
  id,
  pid,
  title = '',
  removeEntity,
  handleDrop,
  style = { width: 200, height: 200 },
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

  const [delta, setDelta] = useState({ x: 0, y: 0 })
  const dragMove = useDragMove(setDelta)

  return (
    <div id={id} className={styles.wrapper} onDragOver={onDragOver} onDrop={onDrop} style={{ ...style, width: style.width + delta.x, height: style.height + delta.y }}>
      <HolderOutlined className={`${styles.holder_btn} quad-circle`} draggable onDragStart={onDragStart} />
      <DeleteOutlined className={`${styles.delete_btn} quad-circle`} onClick={remove} />
      {children}
      <ExpandAltOutlined className={`${styles.expand_btn} quad-circle`} rotate={90} {...dragMove} />
    </div>
  );
};
