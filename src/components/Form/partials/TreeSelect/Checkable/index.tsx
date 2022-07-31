// @ts-nocheck
/**
 * 带有多选框的 树形选择器
 */
import React from 'react';
import { Checkbox, Form } from 'antd';
import TreeSelect from '~/components/Form/partials/TreeSelect';
import { useToggle } from '~/hooks';
import './index.less';

export default ({ label, name, value, rules, ...extra }) => {
  const [checked, toggle] = useToggle(typeof value !== 'undefined');
  return (
    <div className="checkable-tree-select-wrapper" key={name}>
      <Form.Item
        className="tree-select-checkbox"
        name={`${name}Checkable`}
        initialValue={checked}
        valuePropName="checked"
      >
        <Checkbox onChange={toggle} />
      </Form.Item>
      <Form.Item label={label} name={name} initialValue={value} rules={checked && rules}>
        <TreeSelect className={checked ? '' : 'unchecked'} disabled={!checked} {...extra} />
      </Form.Item>
    </div>
  );
};
