import React from 'react'
import { Table } from "@/plugins/ui"
import InputText from '@/components/Form/partials/InputText'
import JsonEdit from '@/components/Form/partials/JsonEdit'
import CodeEdit from '@/components/Form/partials/CodeEdit'
import Compact from '@/components/Form/partials/Compact'
import { Form, Input, Select, Switch, InputNumber } from '@/plugins/ui'


export default ({ name, schema = [], dataSource = [] }) => {
  return (
    <Form.List name={name}>
      {(fields) => {
        const columns = schema?.map(({ name, label, type, mode, options, placeholder, schema = [], ...attrs }) => {
          return {
            title: label,
            dataIndex: name,
            render(value, record, index) {
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
                  return <Compact {...attrs} key={name} name={[index, name]} schema={schema} />
                // break
                default:
                  item = <Input placeholder={placeholder} size="small" />
                  break
              }
              return (
                <Form.Item
                  {...attrs}
                  name={[index, name]}
                  key={name}
                >
                  {item}
                </Form.Item>
              )
            }
          }
        })
        return (
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        )
      }}
    </Form.List>
  );
};
