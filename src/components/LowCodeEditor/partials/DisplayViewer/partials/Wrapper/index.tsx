// @ts-nocheck
import React, { useState } from "react";
import { Dropdown, Menu, Popover } from '@/plugins/ui'
import { ConfigPanel } from "@/components/LowCodeEditor/partials/ConfigPanel";
import { useDragMove, useBinds, useHandlers } from "@/hooks";
import { copyText, stopPropagation } from '@/utils/dom'
import { HolderOutlined, DeleteOutlined, MoreOutlined, ExpandAltOutlined, CopyOutlined } from '@ant-design/icons'
import styles from "./index.module.less";

export const Wrapper = ({
  name,
  id,
  pid,
  zoom,
  title = '图表名称',
  setEntities,
  removeEntity,
  updateEntity,
  editable,
  active,
  setActive,
  handleDrop,
  style = { width: 400, height: 300 },
  mode = /Chart/.test(name) ? 'card' : 'plain',
  children,
  binds,
  handlers,
  occupied = false,
  ...entity
}: IWrapperProps) => {
  // TODO:
  if (occupied) {
    return <>{children}</>
  }
  const remove = (e) => {
    e.stopPropagation();
    removeEntity(id);
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData("dragWidgetId", id);
  };
  const onDrop = handleDrop(id)

  const handleDragMove = (dragMove) => {
    updateEntity(id, { style: { ...style, width: style.width + dragMove.x, height: style.height + dragMove.y } })
  }
  const { onDragOver, ...attrs } = useDragMove(handleDragMove, zoom)

  const [dropdownOverlayVisible, setDropdownOverlayVisible] = useState(false)
  const copy = () => {
    setDropdownOverlayVisible(false)
    copyText(id)
  }
  const handleConfig = (key = 'style') => (e) => {
    e.stopPropagation()
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
            <a onClick={handleConfig('custom')}>
              <img src="/icons/Custom.svg" style={{ width: 16, height: 16 }} />{/* 样式 */}
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a onClick={handleConfig('style')}>
              <img src="/icons/Styles.svg" style={{ width: 16, height: 16 }} />{/* 样式 */}
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a onClick={handleConfig("dataSource")}>
              <img src="/icons/Datasource.svg" style={{ width: 16, height: 16 }} />{/* 数据 */}
            </a>
          ),
        },
        {
          key: '4',
          label: (
            <a onClick={handleConfig('interact')}>
              <img src="/icons/Interact.svg" style={{ width: 16, height: 16 }} />{/* 交互 */}
            </a>
          ),
        },
      ]}
    />
  );

  const rootRef = useBinds({ id, binds, updateEntity, setEntities })
  useHandlers({ id, handlers, updateEntity, })

  const select = () => {
    setActive(active => ({ ...active, id }))
  }

  const editTools = editable ? (
    <>
      <HolderOutlined className={`${styles.holder_btn} quad-circle`} draggable onDragStart={handleDragStart} onMouseDown={stopPropagation} />
      {/* <Dropdown overlay={menu} placement="right" onVisibleChange={setDropdownOverlayVisible}>
        <MoreOutlined className={`${styles.more_btn} quad-circle`} onMouseDown={stopPropagation} />
      </Dropdown> */}
      <Popover content={<ConfigPanel entity={entity} active={active} updateEntity={updateEntity} active={setActive} />} placement="rightTop" getPopupContainer={triggerNode => triggerNode.parentNode}>
      <MoreOutlined className={`${styles.more_btn} quad-circle`} onMouseDown={stopPropagation} />
      </Popover>
      <ExpandAltOutlined className={`${styles.expand_btn} quad-circle`} rotate={90} {...attrs} onMouseDown={stopPropagation} />
      <DeleteOutlined className={`${styles.delete_btn} quad-circle`} onClick={remove} onMouseDown={stopPropagation} />
    </>
  ) : null

  return (
    <div ref={rootRef} id={id} className={`${styles.wrapper} ${dropdownOverlayVisible ? styles.dropdown_overlay : ''} ${mode == 'card' ? 'quad-card' : ''} ${editable ? styles.editable : ''}`} onClick={select} onDragOver={onDragOver} onDrop={onDrop} style={style}>
      {children}
      {editTools}
    </div>
  );
};
