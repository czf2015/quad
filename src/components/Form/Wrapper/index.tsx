// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Form, Button } from "antd";
// import Text from "@/components/Form/partials/Text";
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
    autoComplete: false,
  },
}) => {
  useEffect(() => {
    updateEntity?.(id, { meta: getMeta(), customize })
  }, [])

  const [dragOverItem, setDragOverItem] = useState(null)

  const onDragOver = (e) => {
    e.preventDefault()
    setDragOverItem({ idx: formItems.length - 1, flag: 1 })
  }
  const handleDrop = (e) => {
    e.stopPropagation()
    const dragWidgetName = e.dataTransfer.getData("dragWidgetName");
    if (dragWidgetName) {
      appendFormItems(formItems, dragWidgetName)
      updateEntity?.(id, { formItems: [...formItems] })
    }
  }

  const initialFormValues = getInitialValues(initialValues, formItems)
  const [formValues, setFormValues] = useState(initialFormValues);
  const handleValuesChange = (changedValues, allValues) => {
    setFormValues(allValues);
    onValuesChange?.(allValues)
  }

  const handleFormItemChange = (values) => {
    for (let i = 0; i < formItems.length; i++) {
      if (values?.id == formItems[i]?.id) {
        Object.assign(formItems[i], values)
        updateEntity?.(id, { formItems })
        return
      }
    }
  }

  const sort = (dragId, dropId) => {
    if (dragId == dropId) {
      return
    }
    const dragFormItem = formItems.find(item => item.id == dragId)
    const dropFormItem = formItems.find(item => item.id == dropId)
    if (dragFormItem && dropFormItem) {
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

  return (
    <div className={styles.form_wrapper} onContextMenu={stopPropagation}>
      <h4 className={styles.title}>{customize?.title}</h4>
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
            {filter(formItems, formValues)?.map((formItem, idx) => {
              const handleDragStart = (e) => {
                e.stopPropagation()
                setDragOverItem({ start: idx, idx, flag: 0 })
                e.dataTransfer.setData('dragId', formItem?.id);
              };
              const handleDragOver = (e) => {
                e.stopPropagation()
                e.preventDefault();
                setDragOverItem(dragOverItem => ({ start: dragOverItem?.start, idx, flag: typeof dragOverItem?.start == 'undefined' ? -1 : idx - dragOverItem?.start }))
              };
              const handleDrop = (e) => {
                e.stopPropagation()
                setDragOverItem(null)
                const dragId = e.dataTransfer.getData('dragId');
                if (dragId) {
                  sort?.(dragId, formItem?.id)
                }
                const dragWidgetName = e.dataTransfer.getData("dragWidgetName");
                if (dragWidgetName) {
                  appendFormItems(formItems, dragWidgetName, idx)
                  updateEntity(id, { formItems: [...formItems] })
                }
              };
              const style = {
                display: customize?.layout == 'inline' ? 'inline-block' : 'block',
                borderBottom: dragOverItem?.idx == idx && dragOverItem?.flag > 0 ? '1px dashed var(--quad-primary-border-color)' : undefined,
                borderTop: dragOverItem?.idx == idx && dragOverItem?.flag < 0 ? '1px dashed var(--quad-primary-border-color)' : undefined,
                // background: dragOverItem?.idx == idx ? 'var(--quad-primary-mask-color)' : 'transparent'
              }
              const remove = () => {
                updateEntity?.(id, { formItems: formItems.filter(item => item.id != formItem?.id)})
              }
              return (
                <CustomFormItem 
                  formItem={formItem}
                  onDragStart={handleDragStart}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onFinish={handleFormItemChange}
                  remove={remove}
                  style={style}
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
