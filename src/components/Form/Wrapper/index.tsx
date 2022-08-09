// @ts-nocheck
import React from "react";
import Form from '@/components/Form'
import { appendFormItems } from './helpers'
import styles from './index.module.less'

export default ({
  title,
  initialValues,
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
  formItems = [],
  updateEntity,
  id,
}) => {
  const onDragOver = (e) => {
    e.preventDefault()
  }
  const handleDrop = (e) => {
    e.stopPropagation()
    const dragWidgetName = e.dataTransfer.getData("dragWidgetName");
    if (dragWidgetName) {
      appendFormItems(formItems, dragWidgetName)
      updateEntity(id, { formItems: [...formItems] })
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
