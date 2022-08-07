// @ts-nocheck
import React, { useState } from "react";
import { Dropdown, Menu } from '@/plugins/ui'
import { useDragMove } from "@/hooks";
import { copyText } from '@/utils/dom'
import { HolderOutlined, DeleteOutlined, MoreOutlined, ExpandAltOutlined, CopyOutlined } from '@ant-design/icons'
import styles from "./index.module.less";

export const Wrapper = ({
  name,
  id,
  pid,
  zoom,
  title = '图表名称',
  removeEntity,
  updateEntity,
  setActive,
  handleDrop,
  style = { width: 400, height: 300 },
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
  const { onDragOver, ...attrs } = useDragMove(handleDragMove, zoom)

  const isCardStyle = /Chart/.test(name)

  const [dropdownOverlayVisible, setDropdownOverlayVisible] = useState(false)
  const copy = () => {
    setDropdownOverlayVisible(false)
    copyText(id)
  }
  const handleConfig = (key = 'style') => () => {
    setDropdownOverlayVisible(false)
    setActive({ id, name, key })
  }
  const menu = (
    <Menu
      items={[
        {
          key: '0',
          label: (
            <a onClick={copy}>
              <CopyOutlined fontSize={32} />{/* 复制 */}
            </a>
          ),
        },
        {
          key: '1',
          label: (
            <a onClick={handleConfig('style')}>
              <img src="/icons/Styles.svg" style={{ width: 16, height: 16 }} />{/* 样式 */}
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a onClick={handleConfig("dataSource")}>
              <img src="/icons/Datasource.svg" style={{ width: 16, height: 16 }} />{/* 数据 */}
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a onClick={handleConfig('interact')}>
              <img src="/icons/Interact.svg" style={{ width: 16, height: 16 }} />{/* 交互 */}
            </a>
          ),
        },
      ]}
    />
  );


  return (
    <div id={id} className={`${styles.wrapper} ${dropdownOverlayVisible ? styles.dropdown_overlay : ''} ${isCardStyle ? 'quad-card' : ''}`} onDragOver={onDragOver} onDrop={onDrop} style={style}>
      <HolderOutlined className={`${styles.holder_btn} quad-circle`} draggable onDragStart={onDragStart} />
      <Dropdown overlay={menu} placement="right" onVisibleChange={setDropdownOverlayVisible}>
        <MoreOutlined className={`${styles.more_btn} quad-circle`} />
      </Dropdown>
      <ExpandAltOutlined className={`${styles.expand_btn} quad-circle`} rotate={90} {...attrs} />
      <DeleteOutlined className={`${styles.delete_btn} quad-circle`} onClick={remove} />
      {children}
    </div>
  );
};
