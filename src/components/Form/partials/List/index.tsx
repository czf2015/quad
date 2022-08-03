import React from 'react'
import { Button, Form, Input, Space } from 'antd';
import { TextEdit, Switch } from '@/plugins/ui'
import { useToggle } from '@/hooks'
import { DeleteOutlined, HolderOutlined, PlusOutlined, RightOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export const Card = ({ description = '名称', children, add, remove }) => {
  const [collapsed, toggleCollapsed] = useToggle(false)
  const [enableState, toggleEnableState] = useToggle(true)

  return (
    <div className={`${styles.card} ${enableState ? styles.enabled : ''}`}>
      <div className={`${styles.insert_btn} quad-circle`} onClick={add}><PlusOutlined /></div>
      <HolderOutlined className={styles.holder_btn} />
      <DeleteOutlined className={styles.delete_btn} onClick={remove} />
      <h4 className={styles.title}>
        <TextEdit text={description} />
      </h4>
      <div className={collapsed ? styles.collapsed : ''}>
        {children}
      </div>
      <div className={styles.enable_btn}>
        <Switch size="small" checked={enableState} onChange={toggleEnableState} checkedChildren="启用" unCheckedChildren="停用" defaultChecked />
      </div>
      <span className={`${styles.collapse_btn} quad-circle`}><RightOutlined rotate={collapsed ? 90 : -90} onClick={toggleCollapsed} className={styles.collapse_btn} /></span>
    </div>
  )
}

export default ({ name, list }) => {
  return (
    <Form.List name={name}>
      {(fields, { add, remove }) => (
        <div className={styles.cards}>
          {fields.map((field) => (
            <Card key={field.key} add={add} remove={() => remove(field.name)}>
              {list.map(({ name, mode, options, placeholder, ...attrs }) => (
                <Form.Item
                  {...field}
                  {...attrs}
                  name={[field.name, name]}
                >
                  <Input mode={mode} options={options} placeholder={placeholder} size="small" />
                </Form.Item>
              ))}
            </Card>
          ))}
          <Button type="dashed" onClick={add} className={styles.add_btn}><PlusOutlined /></Button>
        </div>
      )}
    </Form.List>
  );
};
