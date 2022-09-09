import React from "react";
import { Popconfirm, Popover } from "antd";
import Form from '@/components/Form'
import { renderFormItem } from "@/components/Form/render";
import { tableColumn as meta } from "@/config/table";
import { DeleteOutlined, MoreOutlined } from "@ant-design/icons";
import styles from './index.module.less'

export const CustomFormItem = ({ formItem, onFinish, onDragStart, onDragOver, onDrop, remove, style, }) => {
  const contextMenu = (
    <div className={`${styles.contextmenu} quad-scrollbar`}>
      <Form children={meta} initialValues={formItem} onFinish={onFinish} wrapperCol={{ span: 19 }} labelCol={{ span: 5 }} />
    </div>
  )

  return (
    <div className={styles.form_item_wrapper} draggable onDragStart={onDragStart} onDragOver={onDragOver} onDrop={onDrop} style={style}>
      {renderFormItem(formItem)}
      <Popconfirm title="请确认是否删除" onConfirm={remove}>
        <DeleteOutlined className={styles.delete_btn} />
      </Popconfirm>
      <Popover content={contextMenu} trigger="click">
        <MoreOutlined className={styles.more_btn} />
      </Popover>
    </div>
  )
}
