// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Form, Button, message } from "antd";
// import Text from "@/components/Form/partials/Text";
import { CustomFormItem } from "./partials";
import { appendFormItems, getMeta, filter } from './helpers';
import { stopPropagation } from "@/utils/dom";
import { getInitialValues } from "@/components/Form/helpers";
import styles from './index.module.less'


export default ({
  // title,
  initialValues,
  onValuesChange,
  onFinish = console.success,
  onFinishFailed = console.error,
  disabled = false,
  requiredMark = true,
  bodyStyle,
  formItems = [],
  updateEntity,
  id,
  editable,
  customize = {
    set: {
      layout: 'horizontal',
      lineSpacing: 16
    },
    label: {
      span: 8,
      align: 'left',
      wrap: false
    },
    wrapperCol: {
      span: 16,
      offset: 0,
    },
    submit: {
      type: 'primary',
      text: '提交',
      color: '#1890ff',
      visible: true,
    },
    reset: {
      type: 'primary',
      text: '重置',
      color: '#1890ff',
      visible: true,
    },
  },
}) => {
  useEffect(() => {
    updateEntity?.(id, { style: { width: 400, height: 64 }})
  }, [])

  const [dragOverItem, setDragOverItem] = useState(null)

  const onDragOver = (e) => {
    e.preventDefault()
    setDragOverItem({ idx: formItems.length - 1, flag: 1 })
  }
  const handleDrop = (e) => {
    e.stopPropagation()
    setDragOverItem(null)
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
    console.log({ allValues })
  }
  useEffect(() => {
    updateEntity?.(id, { meta: getMeta(formValues), customize })
  }, [formValues])

  const handleFormItemChange = (values) => {
    for (let i = 0; i < formItems.length; i++) {
      if (values?.id == formItems[i]?.id) {
        Object.assign(formItems[i], values)
        console.log({ formItems, values })
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

  const footer = (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button type="primary" htmlType="submit" style={{ display: customize?.submit?.visible ? undefined : 'none', marginTop: customize?.content?.lineSpacing }}>
        {customize?.submit?.text}
      </Button>
      <Button htmlType="reset" style={{ display: customize?.recontent?.visible ? undefined : 'none', marginTop: customize?.content?.lineSpacing, marginLeft: 16 }}>
        {customize?.recontent?.text}
      </Button>
    </div>
  )

  let prerequisites
  try {
    prerequisites = JSON.parse(customize?.prerequisites)
  } catch (e) {
    message.error(e)
  }

  return (
    <div className={styles.form_wrapper} onContextMenu={stopPropagation}>
      <h4 className={styles.title} style={{ backgroundColor: customize?.title?.backgroundColor, fontSize: customize?.title?.fontSize }}>{customize?.title?.text}</h4>
      <div className={styles.placement} style={{ outline: editable ? '1px dashed var(--quad-primary-color)' : 'none', background: customize?.content?.background }} onDragOver={onDragOver} onDrop={handleDrop}>
        <Form
          initialValues={initialFormValues}
          onValuesChange={handleValuesChange}
          disabled={disabled}
          requiredMark={requiredMark}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout={customize?.content?.layout}
          labelCol={{ span: customize?.label?.span }}
          labelAlign={customize?.label?.align}
          labelWrap={customize?.label?.wrap}
          wrapperCol={customize?.wrapperCol}
          autocomplete={customize?.autocomplete}
        >
          <div style={bodyStyle}>
            {filter(formItems, formValues, prerequisites)?.map((formItem, idx) => {
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
                display: customize?.content?.layout == 'inline' ? 'inline-block' : 'block',
                borderBottom: dragOverItem?.idx == idx && dragOverItem?.flag > 0 ? '1px dashed var(--quad-primary-border-color)' : undefined,
                borderTop: dragOverItem?.idx == idx && dragOverItem?.flag < 0 ? '1px dashed var(--quad-primary-border-color)' : undefined,
                background: dragOverItem?.idx == idx ? 'var(--quad-primary-mask-color)' : 'transparent',
                marginTop: customize?.content?.lineSpacing
              }
              const remove = () => {
                updateEntity?.(id, { formItems: formItems.filter(item => item.id != formItem?.id) })
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
