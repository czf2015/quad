// @ts-nocheck
/**
 * 可动态删减的表单域
 */
import React from 'react';
import { Form, Input } from 'antd';
import { MinusCircleOutlined } from '@ant-design/icons';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

export default ({
  name = 'name',
  label = 'name',
  placeholder = '请输入',
  rules = [
    {
      required: true,
      whitespace: true,
      message: "Please input passenger's name or delete this field.",
    },
  ],
  max,
  min,
}) => {
  return (
    <Form.List
      name={name}
      rules={[
        {
          validator: async (_, values) => {
            if (!values || (min && values.length < min)) {
              return Promise.reject(new Error(`至少${min}项`));
            }
            if (values && max && values.length > max) {
              return Promise.reject(new Error(`至多${max}项`));
            }
          },
        },
      ]}
    >
      {(fields, { add, remove }, { errors }) => (
        <>
          {(fields.length > 0 ? fields : [{ fieldKey: 0, isListField: true, key: 0, name: 0 }]).map(
            (field, index) => (
              <Form.Item
                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={index === 0 ? label : ''}
                required={false}
                key={field.key}
                style={{ marginLeft: index > 0 ? '72px' : 0 }}
              >
                <Form.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={rules}
                  noStyle
                >
                  <Input placeholder={placeholder} style={{ width: '60%' }} />
                </Form.Item>
                {fields.length > 1 ? (
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    style={{ marginLeft: '8px', color: 'var(--xdrsec-image-background-color)' }}
                    onClick={() => remove(field.name)}
                  />
                ) : null}
              </Form.Item>
            ),
          )}
          <Form.Item style={{ margin: '-24px 0 0 24px' }}>
            <span
              onClick={() => {
                if (fields.length == 0) {
                  add();
                }
                add();
              }}
              style={{ color: 'var(--xdrsec-highlight-color)' }}
            >
              添加
            </span>
            <Form.ErrorList errors={errors} />
          </Form.Item>
        </>
      )}
    </Form.List>
  );
};
