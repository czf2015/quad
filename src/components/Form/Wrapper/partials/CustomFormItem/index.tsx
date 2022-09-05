import React from "react";
import { Dropdown } from "antd";
import Form from '@/components/Form'
import { renderFormItem } from "@/components/Form/render";
import { tableColumn as meta } from "@/config/table";
import styles from './index.module.less'

export const CustomFormItem = ({ onFinish, sort, ...initialValues }) => {
  const handleDragStart = (e) => {
    e.stopPropagation()
    e.dataTransfer.setData('dragId', initialValues?.id);
  };
  const handleDragOver = (e) => {
    e.stopPropagation()
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.stopPropagation()
    const dragId = e.dataTransfer.getData('dragId');
    sort?.(dragId, initialValues?.id)
  };
  const contextMenu = (
    <div className={styles.contextmenu}>
      <Form children={meta} initialValues={initialValues} onFinish={onFinish} />
    </div>
  )

  return (
    <Dropdown overlay={contextMenu} trigger={['contextMenu']}>
      <div draggable onDragStart={handleDragStart} onDragOver={handleDragOver} onDrop={handleDrop}>
        {renderFormItem(initialValues)}
      </div>
    </Dropdown>
  )
}