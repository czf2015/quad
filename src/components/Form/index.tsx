// @ts-nocheck
import React, { useState } from "react";
import { Form, Button } from "@/plugins/ui";
import { renderFormItem } from "./render";
import { filter } from "./helpers";
import { tableColumn } from "@/mock/tableColumn";

export default ({
  initialValues,
  children: formItems = tableColumn,
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
  footer = (
    <Form.Item wrapperCol={{ span: 6, offset: 18 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  )
}) => {
  const [formData, setFormData] = useState(initialValues);
  const handleValuesChange = (changedValues, allValues) => {
    console.log({ changedValues, allValues })
    setFormData(allValues);
  }

  return (
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
    >
      {filter(formItems, formData)?.map(renderFormItem)}
      {footer}
    </Form>
  );
};
