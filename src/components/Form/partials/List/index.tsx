import React from 'react'
import InputEdit from '@/components/Form/partials/TextEdit'
import InputText from '@/components/Form/partials/InputText'
import JsonEdit from '@/components/Form/partials/JsonEdit'
import CodeEdit from '@/components/Form/partials/CodeEdit'
import Compact from '@/components/Form/partials/Compact'
import { Button, Form, Input, Select, Switch, InputNumber } from '@/plugins/ui'
import { useToggle } from '@/hooks'
import { DeleteOutlined, HolderOutlined, PlusOutlined, RightOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export const Card = ({ children, field, add, remove }) => {
  const [collapsed, toggleCollapsed] = useToggle(false)
  const [enableState, toggleEnableState] = useToggle(true)

  return (
    <div className={`${styles.card} ${enableState ? styles.enabled : ''} ${collapsed ? styles.collapsed : ''}`}>
      <div className={`${styles.insert_btn} quad-circle`} onClick={add}><PlusOutlined /></div>
      <header className={styles.title}>
        <InputEdit {...field} name={[field.name, "title"]} />
      </header>
      <main>
        {children}
      </main>
      <HolderOutlined className={styles.holder_btn} />
      <DeleteOutlined className={styles.delete_btn} onClick={remove} />
      <Form.Item
        className={styles.enable_btn}
        {...field}
        valuePropName="checked"
        name={[field.name, "enable"]}
      >
        <Switch size="small" checkedChildren="启用" unCheckedChildren="停用" />
      </Form.Item>
      <span className={`${styles.collapse_btn} quad-circle`}><RightOutlined rotate={collapsed ? 90 : -90} onClick={toggleCollapsed} className={styles.collapse_btn} /></span>
    </div>
  )
}

export default ({ name, schema = [] }) => {
  return (
    <Form.List name={name}>
      {(fields, { add, remove }, { errors }) => (
        <div className={styles.card_list}>
          {fields.map((field) => (
            <Card key={field.key} field={field} add={add} remove={() => remove(field.name)}>
              {schema?.map(({ name, type, mode, options, placeholder, schema = [], ...attrs }) => {
                let item
                switch (type) {
                  case 'InputText':
                  case 'Text':
                    item = <InputText {...attrs} options={options} placeholder={placeholder} size="small" />
                    break
                  case 'TextArea':
                    item = <Input.TextArea placeholder={placeholder} autoSize={{ minRows: 3, maxRows: 10 }} size="small" />
                    break
                  case 'InputNumber':
                  case 'Number':
                    item = <InputNumber {...attrs} placeholder={placeholder} size="small" />
                    break
                  case 'Select':
                    item = <Select mode={mode} options={options} placeholder={placeholder} size="small" />
                    break
                  case 'Switch':
                    item = <Switch {...attrs} />
                    break
                  case 'Json':
                    item = <JsonEdit />
                    break
                  case 'Code':
                    item = <CodeEdit />
                    break
                  case "Compact":
                    return <Compact  {...field} {...attrs} key={name} name={[field.name, name]} schema={schema} />
                    // break
                  default:
                    item = <Input placeholder={placeholder} size="small" />
                    break
                }
                return (
                  <Form.Item
                    {...field}
                    {...attrs}
                    name={[field.name, name]}
                    key={name}
                  >
                    {item}
                  </Form.Item>
                )
              })}
            </Card>
          ))}
          <Button type="dashed" onClick={add} className={styles.add_btn}><PlusOutlined /></Button>
          <Form.Item className={styles.errors}>
            <Form.ErrorList errors={errors} />
          </Form.Item>
        </div>
      )}
    </Form.List>
  );
};
