// @ts-nocheck
import React, { useState } from "react";
import { Dropdown, Menu } from 'antd'
import { useDragMove } from "@/hooks";
import { HolderOutlined, DeleteOutlined, MoreOutlined, ArrowsAltOutlined, ExpandAltOutlined } from '@ant-design/icons'
import styles from "./index.module.less";

export const Wrapper = ({
  name,
  id,
  pid,
  title = 'title',
  removeEntity,
  updateEntity,
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
  const onDrop = handleDrop(id)

  const handleDragMove = (dragMove) => {
    updateEntity(id, { style: { ...style, width: style.width + dragMove.x, height: style.height + dragMove.y } })
  }
  const { onDragOver, ...attrs } = useDragMove(handleDragMove)

  const isCardStyle = /Chart/.test(name)

  const [dropdownOverlayVisible, setDropdownOverlayVisible] = useState(false)
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a onClick={() => setDropdownOverlayVisible(false)}>
              <img src="/icons/Styles.svg" style={{ marginRight: 8, width: 16, height: 16 }} />样式
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a onClick={() => setDropdownOverlayVisible(false)}>
              <img src="/icons/Datasource.svg" style={{ marginRight: 8, width: 16, height: 16 }} />数据
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a onClick={() => setDropdownOverlayVisible(false)}>
              <img src="/icons/Interact.svg" style={{ marginRight: 8, width: 16, height: 16 }} />交互
            </a>
          ),
        },
      ]}
    />
  );


  return (
    <div id={id} className={`${styles.wrapper} ${dropdownOverlayVisible ? styles.dropdown_overlay : ''}`} onDragOver={onDragOver} onDrop={onDrop} style={isCardStyle ? { margin: '16px 0 0 16px', padding: 24, borderRadius: 4, boxShadow: '2px 2px 4px 4px #ccc', ...style } : style}>
      <HolderOutlined className={`${styles.holder_btn} quad-circle`} draggable onDragStart={onDragStart} />
      <Dropdown overlay={menu} placement="right" onVisibleChange={setDropdownOverlayVisible} arrow>
        <MoreOutlined className={`${styles.more_btn} quad-circle`} />
      </Dropdown>
      <DeleteOutlined className={`${styles.delete_btn} quad-circle`} onClick={remove} />
      <ExpandAltOutlined className={`${styles.expand_btn} quad-circle`} rotate={90} {...attrs} />
      {children}
    </div>
  );
};
