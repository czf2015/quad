import React, { useState } from "react";
import { Dropdown } from "antd";
import Form from '@/components/Form'
import Mask from "@/components/Mask";
import { renderFormItem } from "@/components/Form/render";
import { tableColumn as meta } from "@/config/table";
import styles from './index.module.less'

export const CustomFormItem = ({ onFinish, onDragStart, onDragOver, onDrop, showMask = false, style, ...initialValues }) => {
  const contextMenu = (
    <div className={styles.contextmenu}>
      <Form children={meta} initialValues={initialValues} onFinish={onFinish} />
    </div>
  )

  return (
    <Dropdown overlay={contextMenu} trigger={['contextMenu']}>
      <div className={styles.form_item_wrapper} draggable onDragStart={onDragStart} onDragOver={onDragOver} style={style}>
        <div className={styles.before} onDrop={onDrop}></div>
        <div className={styles.after} onDrop={onDrop}></div>
        {renderFormItem(initialValues)}
        {showMask && <Mask />}
      </div>
    </Dropdown>
  )
}