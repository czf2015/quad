import React from 'react'
import { Checkbox, Select, Tag } from '@/plugins/ui'
import Tags from '@/components/Form/partials/Tags'
import { CaretDownOutlined } from "@ant-design/icons";


export default ({ options, placeholder, mode = 'checkbox', size, disabled, ...attrs }) => {
  switch (mode) {
    case 'checkbox':
      return <Checkbox.Group {...attrs} options={options} size={size} disabled={disabled} />
    case 'select':
      return <Select
        {...attrs}
        mode="multiple"
        options={options}
        placeholder={placeholder}
        suffixIcon={<CaretDownOutlined style={{ color: "var(--xdrsec-select-suffix-icon-color)" }} />}
        size={size}
        disabled={disabled}
        allowClear
      />
    case 'tag':
      return (
        <Tags
          {...attrs}
          options={options}
        />
      )
  }
}