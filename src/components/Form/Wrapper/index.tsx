// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Form, Button } from "antd";
import Text from "@/components/Form/partials/Text";
import { CustomFormItem } from "./partials";
import { appendFormItems, getMeta } from './helpers';
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
  customize = {
    layout: 'horizontal',
    label: {
      span: 8,
      align: 'left',
      wrap: false
    },
    wrapperCol: {
      span: 16,
      offset: 0,
    },
    autoComplete: false
  },
}) => {
  useEffect(() => {
    updateEntity?.(id, { meta: getMeta(), customize })
  }, [])

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

  const initialFormValues = getInitialValues(initialValues, formItems)
  const [formValues, setFormValues] = useState(initialFormValues);
  const handleValuesChange = (changedValues, allValues) => {
    console.log({ changedValues, allValues })
    setFormValues(allValues);
    onValuesChange?.(allValues)
  }

  const handleFormItemChange = (values) => {
    formItems.forEach(item => {
      if (values?.id == item?.id) {
        Object.assign(item, values)
      }
    })
    updateEntity?.(id, { formItems })
  }

  const sort = (dragId, dropId) => {
    const dragFormItem = formItems.find(item => item.id == dragId)
    if (dragFormItem) {
      const _formItems = []
      let flag = false
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
  }

  const [dragOverFormItemId, setDragOverFormItemId] = useState()

  const handleTitleChange = (title) => updateEntity?.(id, { customize: { title }})

  return (
    <div className={styles.form_wrapper} onContextMenu={stopPropagation}>
      <h4 className={styles.title}>
        <Text value={customize?.title} onChange={handleTitleChange} disabled={disabled} />
      </h4>
      <div className={styles.placement} style={{ outline: editable ? '1px dashed var(--quad-primary-color)' : 'none' }} onDragOver={onDragOver} onDrop={handleDrop}>
        <Form
          initialValues={initialFormValues}
          onValuesChange={handleValuesChange}
          disabled={disabled}
          requiredMark={requiredMark}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout={customize?.layout}
          labelCol={{ span: customize?.label?.span }}
          labelAlign={customize?.label?.align}
          labelWrap={customize?.label?.wrap}
          wrapperCol={customize?.wrapperCol}
          autocomplete={customize?.autocomplete}
        >
          <div style={bodyStyle}>
            {filter(formItems, formValues)?.map(formItem => {
              const handleDragStart = (e) => {
                e.stopPropagation()
                e.dataTransfer.setData('dragId', formItem?.id);
              };
              const handleDragOver = (e) => {
                e.stopPropagation()
                e.preventDefault();
                setDragOverFormItemId(formItem?.id)
              };
              const handleDrop = (e) => {
                e.stopPropagation()
                const dragId = e.dataTransfer.getData('dragId');
                sort?.(dragId, formItem?.id)
                setDragOverFormItemId()
              };
              return (
                <CustomFormItem {...formItem}
                  onDragStart={handleDragStart}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onFinish={handleFormItemChange}
                  showMask={dragOverFormItemId == formItem.id}
                  style={{ display: customize?.layout == 'inline' ? 'inline-block' : 'block' }}
                  key={formItem.id} />
              )
            })}
          </div>
          {footer}
        </Form>
      </div>
    </div>
  );
};
