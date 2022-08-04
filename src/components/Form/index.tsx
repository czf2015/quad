// @ts-nocheck
import React, { useState } from "react";
import { Form } from "@/plugins/ui";
import { renderFormItem } from "./render";
import { filter } from "./helpers";

export default ({
  initialValues,
  children: formItems,
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
  labelAlign = 'left',
}) => {

  const [formData, setFormData] = useState(initialValues);
  const handleValuesChange = (changedValues, allValues) => {
    console.log({ changedValues })
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
    </Form>
  );
};
