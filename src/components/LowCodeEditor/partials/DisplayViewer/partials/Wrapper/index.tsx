// @ts-nocheck
import React from "react";
import { Popover, Popconfirm, Dropdown, Tooltip, InputNumber } from '@/plugins/ui'
import Copy from '@/components/Copy'
import { CustomizeConfigPanel } from "@/components/LowCodeEditor/partials/ConfigPanel/partials/CustomizeConfigPanel";
import Mask from "@/components/Mask";
import ClipPath from '@/components/ClipPath';
import { useDragMove, useBinds, useHandlers, useDragRect } from "@/hooks";
import { stopPropagation } from '@/utils/dom'
import { HolderOutlined, DeleteOutlined, MoreOutlined, RadiusBottomrightOutlined, SyncOutlined } from '@ant-design/icons'
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

  useBinds({ id, binds, updateEntity, setEntities })
  useHandlers({ id, handlers, updateEntity, })

  const select = () => {
    setActive(active => ({ ...active, id }))
  }

  const { ref, handleDragStart: handleDragRotateStart, ...dragRotateAttrs } = useDragRect({ ...entity, id, style }, updateEntity, editable)
  const handleRotateChange = (rotate) => {
    updateEntity(id, { styleConfig: { rotate: rotate % 360 } })
  }
  const resetRotate = () => {
    updateEntity(id, { styleConfig: { rotate: 0 } })
  }
  const angleIcon = <Tooltip title="复原"><img className={styles.angle_icon} src="/icons/Angle.svg" onClick={resetRotate} /></Tooltip>
  const rotateInput = <InputNumber className={styles.rotate_input} value={entity?.styleConfig?.rotate} onChange={handleRotateChange} step={5} size="small" addonBefore={angleIcon} controls={false} />

  const handleClipPathChange = (clipPath) => {
    updateEntity(id, { styleConfig: { clipPath } })
  }

  const editTools = editable ? (
    <>
      <Mask className={styles.mask} />
      <Dropdown overlay={rotateInput} placement="bottom">
        <SyncOutlined className={styles.rotate} {...dragRotateAttrs} onDragStart={handleDragRotateStart('rotate')} />
      </Dropdown>
      <RadiusBottomrightOutlined className={styles.expand_btn} {...attrs} />
      <HolderOutlined className={styles.holder_btn} draggable onDragStart={handleDragStart} />
      <Popover content={<CustomizeConfigPanel id={id} {...entity} updateEntity={updateEntity} />} style={{ padddingRight: 0 }} placement="rightTop" trigger="click">
        <MoreOutlined className={styles.more_btn} />
      </Popover>
      <Copy className={styles.copy_btn} value={id} />
      <Popconfirm title="确认是否删除?" onConfirm={remove} getPopupContainer={() => ref.current}>
        <DeleteOutlined className={styles.delete_btn} />
      </Popconfirm>
    </>
  ) : null

  return (
    <div ref={ref} id={id} data-width={style?.width} data-height={style?.height} className={`${styles.wrapper} ${mode == 'card' ? 'quad-card' : ''} ${editable ? styles.editable : ''} ${active.id == id ? styles.active : ''}`} onClick={select} onDragOver={onDragOver} onDrop={onDrop} onDragStart={stopPropagation} style={style}>
      {children}
      {editTools}
      <ClipPath className={styles.clip} boxStyle={style} value={entity?.styleConfig?.clipPath} onChange={handleClipPathChange} disabled={!editable || entity?.styleConfig?.rotate} />
    </div>
  );
};
