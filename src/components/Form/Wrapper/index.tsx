// @ts-nocheck
import React, { useState } from "react";
import Form from '@/components/Form'
import { appendFormItems } from './helpers'
import styles from './index.module.less'

export default ({
  title,
  initialValues,
  // children,
  onFinish = console.success,
  onFinishFailed = console.error,
  disabled = false,
  requiredMark = true,
  layout = 'horizontal',
  wrapperCol = {
    span: 16,
  },
  labelCol = {
    span: 8,
  },
  labelAlign = 'right',
  footer,
}) => {
  const [formItems, setFormItems] = useState([])
  const onDragOver = (e) => {
    e.preventDefault()
  }
  const handleDrop = (e) => {
    e.stopPropagation()
    // 从左侧面板拖拽组件到显示区域(位置)
    const dragWidgetName = e.dataTransfer.getData("dragWidgetName");
    if (dragWidgetName) {
      // dragWidget(dragWidgetName, dropId)
      setFormItems(formItems => {
        appendFormItems(formItems, dragWidgetName)
        return [...formItems]
      })
    }
    // 拖拽某显示区内组件到特定区域（位置）
    const dragWidgetId = e.dataTransfer.getData("dragWidgetId");
    if (dragWidgetId) {
      // dragEntity(dragWidgetId, dropId)
    }
  }
  return (
    <div className={styles.form_wrapper}>
      <h4>{title}</h4>
      <div className={styles.placement} onDragOver={onDragOver} onDrop={handleDrop}>
        <Form
          children={formItems}
          footer={footer}
          initialValues={initialValues}
          disabled={disabled}
          requiredMark={requiredMark}
          layout={layout}
          wrapperCol={wrapperCol}
          labelCol={labelCol}
          labelAlign={labelAlign}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        />
      </div>
    </div>
  );
};
