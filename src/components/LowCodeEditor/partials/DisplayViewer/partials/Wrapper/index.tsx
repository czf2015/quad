// @ts-nocheck
import React, { useState } from "react";
import { Popover, Tooltip } from '@/plugins/ui'
import { ConfigPanel } from "@/components/LowCodeEditor/partials/ConfigPanel";
import { useDragMove, useBinds, useHandlers } from "@/hooks";
import { copyText, stopPropagation } from '@/utils/dom'
import { HolderOutlined, DeleteOutlined, MoreOutlined, RadiusBottomrightOutlined, CopyOutlined } from '@ant-design/icons'
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

  const [copyTip, setCopyTip] = useState('复制')
  const copy = () => {
    copyText(id)
    setCopyTip('复制成功！')
    setTimeout(() => {
      setCopyTip('复制')
    }, 3000)
  }

  const rootRef = useBinds({ id, binds, updateEntity, setEntities })
  useHandlers({ id, handlers, updateEntity, })

  const select = () => {
    setActive(active => ({ ...active, id }))
  }

  const editTools = editable ? (
    <>
      <RadiusBottomrightOutlined className={styles.expand_btn} {...attrs} onMouseDown={stopPropagation} />
      <HolderOutlined className={styles.holder_btn} draggable onDragStart={handleDragStart} onMouseDown={stopPropagation} />
      <Popover content={<ConfigPanel id={id} {...entity} updateEntity={updateEntity} />} style={{ padddingRight: 0}} placement="rightTop">
        <MoreOutlined className={styles.more_btn} onMouseDown={stopPropagation} />
      </Popover>
      <Tooltip title={copyTip}>
        <CopyOutlined className={styles.copy_btn} onClick={copy} />
      </Tooltip>
      <DeleteOutlined className={styles.delete_btn} onClick={remove} onMouseDown={stopPropagation} />
    </>
  ) : null

  return (
    <div ref={rootRef} id={id} className={`${styles.wrapper} ${mode == 'card' ? 'quad-card' : ''} ${editable ? styles.editable : ''}`} onClick={select} onDragOver={onDragOver} onDrop={onDrop} onDragStart={stopPropagation} onMouseDown={stopPropagation} style={style}>
      {children}
      {editTools}
    </div>
  );
};
