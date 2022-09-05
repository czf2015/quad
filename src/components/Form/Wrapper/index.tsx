// @ts-nocheck
import React, { useState } from "react";
import { Form, Button } from "antd";
import Text from "@/components/Form/partials/Text";
import { CustomFormItem } from "./partials";
import { appendFormItems } from './helpers';
import { stopPropagation } from "@/utils/dom";
import { filter, getInitialValues } from "@/components/Form/helpers";

import styles from './index.module.less'

export default ({
  // title,
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
  autocomplete = "off",
  bodyStyle,
  footer = (
    <Form.Item wrapperCol={{ span: 6, offset: 18 }}>
      <Button type="primary" htmlType="submit">
        确认
      </Button>
    </Form.Item>
  ),
  formItems = [],
  updateEntity,
  id,
  editable,
  customize,
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

  const [formData, setFormData] = useState(getInitialValues(initialValues, formItems));
  const handleValuesChange = (changedValues, allValues) => {
    console.log({ changedValues, allValues })
    setFormData(allValues);
    onValuesChange?.(allValues)
  }

  const handleFormItemChange = (values) => {
    formItems.forEach(item => {
      if (values?.id == item?.id) {
        Object.assign(item, values)
      }
    })
    debugger
    updateEntity?.(id, { formItems })
  }

  const sort = (dragId, dropId) => {
    const _formItems = []
    let flag = false
    const dragFormItem = formItems.find(item => item.id == dragId)
    formItems.forEach(formItem => {
      if (formItem.id == dragId) {
        flag = true
      } else {
        if (formItem.id == dropId) {
          if (flag) {
            _formItems.push(formItem)
            _formItems.push(dragFormItem)
          } else {
            _formItems.push(dragFormItem)
            _formItems.push(formItem)
          }
        } else {
          _formItems.push(formItem)
        }
      }
    })
    updateEntity?.(id, { formItems: _formItems })
  }

  return (
    <div className={styles.form_wrapper} onContextMenu={stopPropagation}>
      <h4 className={styles.title}>
        <Text value={customize?.title}/*  disabled */ />
      </h4>
      <div className={styles.placement} style={{ outline: editable ? '1px dashed var(--quad-primary-color)' : 'none' }} onDragOver={onDragOver} onDrop={handleDrop}>
        <Form
          initialValues={initialValues}
          onValuesChange={handleValuesChange}
          disabled={disabled}
          requiredMark={requiredMark}
          layout={layout}
          wrapperCol={wrapperCol}
          labelCol={labelCol}
          labelAlign={labelAlign}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autocomplete={autocomplete}
        >
          <div style={bodyStyle}>
            {filter(formItems, formData)?.map(formItem => <CustomFormItem {...formItem} onFinish={handleFormItemChange} sort={sort} key={formItem.id} />)}
          </div>
          {footer}
        </Form>
      </div>
    </div>
  );
};
