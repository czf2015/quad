// @ts-nocheck
/**
 * 分已选和可选的多选框组
 */
import React from 'react';
import {
  Checkbox,
  Row,
  Col,
} from 'antd';

const Filter = ({ label, options = [], checked }) => {
  const isSelected = label == '已选字段'
  const checkedMap = {}
  checked.forEach(name => {
    checkedMap[name] = true
  })
  return (
    <div className="filter-checkbox-container" style={{ margin: '16px 0' }}>
      <label style={{ color: 'var(--xdrsec-primary-color)' }}>{label}</label>
      <Row justify="start">
        {options.filter(item => {
          const isChecked = checkedMap[item.name] || false
          return isSelected ? isChecked : !isChecked
        }).map(({ name, label, checked }) => (
          <Col span={24} key={name}>
            <Checkbox value={name} checked={checked} style={{ lineHeight: '32px', color: 'var(--xdrsec-primary-color)' }}>
              {label}
            </Checkbox>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ({ options = [], checked, setChecked }) => {
  return (
    <Checkbox.Group onChange={setChecked} value={checked}>
      <Filter label="已选字段" options={options} checked={checked} />
      <Filter label="可选字段" options={options} checked={checked} />
    </Checkbox.Group>
  )
}