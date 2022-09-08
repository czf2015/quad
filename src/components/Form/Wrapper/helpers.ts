import uuid from "@/plugins/uuid";

export const appendFormItems = (
  formItems,
  dragWidgetName,
  idx = formItems.length
) => {
  const id = uuid();
  let formItem;
  switch (dragWidgetName) {
    case "Text":
      formItem = {
        name: "text",
        label: "文本",
        type: "Text",
        id,
      };
      break;
    case "RichText":
      formItem = {
        name: "richText",
        label: "富文本",
        type: "RichText",
        id,
      };
      break;
    case "Number":
      formItem = {
        name: "number",
        label: "数字",
        type: "Number",
        id,
      };
      break;
    case "Check":
      formItem = {
        name: "check",
        label: "勾选",
        type: "Switch",
        id,
      };
      break;
    case "Radio":
      formItem = {
        name: "radio",
        label: "单选",
        type: "Radio",
        options: [
          {
            label: "均不",
            value: 0,
          },
          {
            label: "选项1",
            value: 1,
          },
          {
            label: "选项2",
            value: 2,
          },
        ],
        defaultValue: 0,
        id,
      };
      break;
    case "Multiple":
      formItem = {
        name: "multiple",
        label: "多选",
        type: "Multiple",
        options: [
          {
            label: "选项1",
            value: 1,
          },
          {
            label: "选项2",
            value: 2,
          },
        ],
        id,
      };
      break;
    case "Date":
      formItem = {
        name: "date",
        label: "日期",
        type: "Date",
        mode: "",
        id,
      };
      break;
    case "Attachment":
      formItem = {
        name: "attachment",
        label: "附件",
        type: "Attachment",
        id,
      };
      break;
    case "Rate":
      formItem = {
        name: "rate",
        label: "评分",
        type: "Rate",
        id,
      };
      break;
    case "Tags":
      formItem = {
        name: "tags",
        label: "标签",
        type: "Tags",
        options: [
          {
            label: "标签1",
            value: 1,
          },
          {
            label: "标签2",
            value: 2,
          },
        ],
        id,
      };
      break;
    default:
      break;
  }
  if (formItem) {
    formItems.splice(idx, 0, formItem);
  }
};

export const getMeta = (formValues) => {
  return {
    binds: [
      {
        label: '提交',
        value: 'submit',
        payloads: formValues
      },
    ],
    customize: [
      {
        name: 'title',
        label: '标题',
        type: 'Compact',
        schema: [
          {
            name: "text",
            label: "文字",
            type: "Input",
            size: "small",
          },
          {
            name: "fontSize",
            label: "字体大小",
            type: "InputNumber",
            addonAfter: 'px',
            size: "small",
            style: { width: 88 }
          },
          {
            name: "backgroundColor",
            label: "背景色",
            type: "ColorPicker",
            mode: 'color',
            size: "small",
          },
        ],
        value: {
          text: '',
          fontSize: 16,
          backgroundColor: 'transparent'
        }
      },
      {
        name: 'content',
        label: '内容',
        type: 'Compact',
        schema: [
          {
            name: "layout",
            label: "布局",
            type: "Select",
            options: [
              {
                label: "水平",
                value: "horizontal",
              },
              {
                label: "垂直",
                value: "vertical",
              },
              {
                label: "行内",
                value: "inline",
              },
            ],
            allowClear: false,
            size: "small",
            style: { width: 172 }
          },
          {
            name: 'lineSpacing',
            label: '行距',
            type: 'InputNumber',
            min: 0,
            addonAfter: 'px',
            size: "small",
            style: { width: 88 }
          },
          {
            name: 'background',
            label: '背景',
            type: 'ColorPicker',
            mode: 'color'
          },
        ],
        value: {
          layout: 'horizontal',
          lineSpacing: 16,
          background: 'transparent'
        },
        required: true
      },
      {
        name: "label",
        label: "标签",
        type: "Compact",
        schema: [
          {
            name: "span",
            label: '跨距',
            type: "InputNumber",
            min: 1,
            max: 24,
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
          {
            name: "wrap",
            label: '换行方式',
            type: "Select",
            options: [
              {
                label: "自动换行",
                value: true,
              },
              {
                label: "超出省略",
                value: false,
              },
            ],
          },
        ],
        value: {
          span: 8,
          align: "left",
          wrap: false,
        },
        required: true,
      },
      {
        name: "wrapperCol",
        label: "控件",
        type: "Compact",
        schema: [
          {
            name: "span",
            label: '跨距',
            type: "InputNumber",
            min: 1,
            max: 24,
          },
          {
            name: "offset",
            label: '偏移',
            type: "InputNumber",
            min: 0,
            max: 24,
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
          offset: 0,
          span: 16,
          size: 'small'
        },
        required: true,
      },
      {
        name: 'submit',
        label: '提交',
        type: 'Compact',
        schema: [
          {
            name: 'type',
            label: '模式',
            type: 'Select',
            options: [
              {
                label: '默认',
                value: 'primary'
              },
              {
                label: '文本',
                value: 'text'
              }
            ]
          },
          {
            name: 'text',
            label: '文字',
            type: 'Input',
            style: { width: 140 }
          },
          {
            name: 'color',
            label: '颜色',
            type: 'ColorPicker',
            mode: 'color'
          },
          {
            name: 'visible',
            label: '显示',
            type: 'Eye'
          },
        ],
        value: {
          type: 'primary',
          text: '提交',
          color: '#1890ff',
          visible: true,
        },
        required: true
      },
      {
        name: 'reset',
        label: '重置',
        type: 'Compact',
        schema: [
          {
            name: 'type',
            label: '模式',
            type: 'Select',
            options: [
              {
                label: '默认',
                value: 'primary'
              },
              {
                label: '文本',
                value: 'text'
              }
            ]
          },
          {
            name: 'text',
            label: '文字',
            type: 'Input',
            style: { width: 140 }
          },
          {
            name: 'color',
            label: '颜色',
            type: 'ColorPicker',
            mode: 'color'
          },
          {
            name: 'visible',
            label: '显示',
            type: 'Eye'
          },
        ],
        value: {
          type: 'primary',
          text: '重置',
          color: '#1890ff',
          visible: true,
        },
        required: true
      },
      {
        name: "prerequisites",
        label: '条件',
        type: 'Code',
      }
    ],
  };
};
