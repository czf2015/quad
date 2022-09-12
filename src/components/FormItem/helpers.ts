
import { FORM_ITEM_TYPES_OPTIONS } from "@/config/table"

export const getMetaCustomize = (options) => {
  return [
    {
      name: "label",
      label: "标签",
      type: "Compact",
      schema: [
        {
          name: "text",
          label: '文字',
          type: "Input",
          style: { width: 150 }
        },
        {
          name: "span",
          label: '跨距',
          type: "InputNumber",
          min: 1,
          max: 24,
          style: { width: 48 }
        },
        {
          name: "align",
          label: '对齐方式',
          type: "Select",
          options: [
            {
              label: "左对齐",
              value: "left",
            },
            {
              label: "右对齐",
              value: "right",
            },
          ],
        },
      ],
      value: {
        text: '',
        span: 8,
        align: "left",
      },
      required: true,
    },
    {
      name: "control",
      label: "控件",
      type: "Compact",
      schema: [
        {
          name: "type",
          label: "类型",
          required: true,
          type: "Select",
          options: FORM_ITEM_TYPES_OPTIONS,
          allowClear: false,
          style: { width: 150 }
        },
        {
          name: "span",
          label: '跨距',
          type: "InputNumber",
          min: 1,
          max: 24,
          style: { width: 48 }
        },
        {
          name: "size",
          label: '大小',
          type: "Select",
          options: [
            {
              label: '偏小',
              value: 'small'
            },
            {
              label: '中等',
              value: 'middle'
            },
            {
              label: '偏大',
              value: 'large'
            }
          ]
        },
      ],
      value: {
        type: 'Input',
        span: 16,
        size: 'small'
      },
      required: true,
    },
    {
      name: "options",
      label: "校验",
      type: "FormList",
      schema: [
        {
          name: "label",
          label: "标签名称",
          type: "Input",
          placeholder: "请输入标签名称",
        },
        {
          name: "value",
          label: "值",
          type: "Input",
        },
      ],
      prerequisites: [
        {
          field: 'type',
          options: {
            include: ['Radio', 'Checkbox']
          }
        }
      ],
      value: options,
    },
    {
      name: 'set',
      label: '设置',
      type: 'Checkbox',
      options: [
        {
          label: '必填',
          value: 1,
        },
        {
          label: '禁用',
          value: 2,
        },
        {
          label: '显示',
          value: 4,
        }
      ],
      // defaultValue: [4]
    },
    {
      name: "defaultValue",
      label: "默认值",
      type: "Input",
      prerequisites: [
        {
          field: 'type',
          options: {
            equal: [0]
          }
        }
      ]
    },
    {
      name: "defaultValue",
      label: "默认值",
      type: "InputNumber",
      prerequisites: [
        {
          field: 'type',
          options: {
            equal: [1]
          }
        }
      ]
    },
    {
      name: "defaultValue",
      label: "默认值",
      type: "Switch",
      prerequisites: [
        {
          field: 'type',
          options: {
            equal: [2]
          }
        }
      ]
    },
    {
      name: "defaultValue",
      label: "默认值",
      type: "Select",
      prerequisites: [
        {
          field: 'type',
          options: {
            equal: [3]
          }
        }
      ]
    },
    {
      name: "rules",
      label: "校验",
      type: "FormList",
      schema: [
        {
          name: "pattern",
          label: "正则匹配",
          type: "Input",
          placeholder: "请输入正则表达式",
        },
        {
          name: "message",
          label: "错误提示",
          type: "Input",
        },
      ],
    },
    {
      name: "autocomplete",
      label: "自动完成",
      type: "Switch",
    },
  ]
}
