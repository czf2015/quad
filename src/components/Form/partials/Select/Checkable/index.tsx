// @ts-nocheck
/**
 * 多选框和选择器组合 组件
 */
import React from 'react';
import { useToggle } from '~/hooks';
import { Checkbox, Form, Select } from 'antd';
import './index.less';

export default ({ label, name, value, rules, ...extra }) => {
  const [checked, toggle] = useToggle(typeof value !== 'undefined');
  return (
    <div className="checkable-select-wrapper" key={name}>
      <Form.Item
        className="select-checkbox"
        name={`${name}Checkable`}
        initialValue={checked}
        valuePropName="checked"
      >
        <Checkbox onChange={toggle} />
      </Form.Item>
      <Form.Item label={label} name={name} initialValue={value} rules={checked && rules}>
        <Select className={checked ? '' : 'unchecked'} disabled={!checked} {...extra} />
      </Form.Item>
    </div>
  );
};
