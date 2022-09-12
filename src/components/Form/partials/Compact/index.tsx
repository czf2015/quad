import React from 'react'
import InputText from '@/components/Form/partials/InputText'
import JsonEdit from '@/components/Form/partials/JsonEdit'
import CodeEdit from '@/components/Form/partials/CodeEdit'
import Eye from '@/components/Form/partials/Eye'
import ColorPicker from '@/components/ColorPicker'
import { Form, Input, Select, Switch, InputNumber, Tooltip } from '@/plugins/ui'
import styles from './index.module.less'

export default ({ name: pname, label = '', schema = [], ...rest }) => {
  return (
    <div className={styles.compact}>
      {/* <label>{label}</label> */}
      {schema?.map(({ name, label, type, mode, options, placeholder, style, ...attrs }) => {
        let item
        switch (type) {
          case 'InputText':
          case 'Text':
            item = <InputText {...attrs} options={options} placeholder={placeholder} size="small" style={{ minWidth: 120, ...style }} />
            break
          case 'TextArea':
            item = <Input.TextArea placeholder={placeholder} autoSize={{ minRows: 3, maxRows: 10 }} size="small" />
            break
          case 'InputNumber':
          case 'Number':
            item = <InputNumber {...attrs} placeholder={placeholder} style={{ minWidth: 120, ...style }}
              size="small" />
            break
          case 'Select':
            item = <Select mode={mode} options={options} placeholder={placeholder} style={{ minWidth: 72, ...style }} size="small" />
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
          case 'ColorPicker':
            item = <ColorPicker mode={mode} />
            break
          case 'Eye':
            item = <Eye />
            break
          default:
            item = <Input placeholder={placeholder} style={{ minWidth: 120, ...style }}
              size="small" />
            break
        }

        return (
          <Tooltip title={label}>
            <Form.Item
              {...rest}
              {...attrs}
              name={Array.isArray(pname) ? [...pname, name] : [pname, name]}
              key={name}
            >
              {item}
            </Form.Item>
          </Tooltip>
        )
      })}
    </div>
  );
};
