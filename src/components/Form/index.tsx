// @ts-nocheck
import React, { useState } from "react";
import { Form, Button } from "@/plugins/ui";
import { renderFormItem } from "./render";
import { filter, getInitialValues } from "./helpers";

export default ({
  initialValues,
  children: formItems = [],
  onFinish = console.success,
  onFinishFailed = console.error,
  onValuesChange,
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
  )
}) => {
  const initialFormValues = getInitialValues(initialValues, formItems)
  const [formValues, setFormValues] = useState(initialFormValues);
  const handleValuesChange = (changedValues, allValues) => {
    console.log({ changedValues, allValues })
    setFormValues(allValues);
    onValuesChange?.(allValues)
  }

  return (
    <Form
      initialValues={initialFormValues}
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
        {filter(formItems, formValues)?.map(renderFormItem)}
      </div>
      {footer}
    </Form>
  );
};
