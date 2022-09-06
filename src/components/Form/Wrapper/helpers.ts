import uuid from '@/plugins/uuid'

export const appendFormItems = (formItems, dragWidgetName, idx = formItems.length - 1) => {
  const id = uuid()
  let formItem
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
  }
  formItems.splice(idx, 0, formItem)
};

export const getMeta = () => {
  return {
    customize: [
      {
        name: "layout",
        label: "布局",
        type: "Select",
        value: 'horizontal',
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
        wrapperCol: { span: 6 },
        size: 'small'
      },
      {
        name: "label",
        label: "标签",
        type: 'Compact',
        value: {
          span: 8,
          align: 'left',
          wrap: false,
        },
        schema: [
          {
            name: 'span',
            type: 'InputNumber',
            min: 1,
            max: 24,
          },
          {
            name: 'align',
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
            name: 'wrap',
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
          }
        ]
      },
      {
        name: "wrapperCol",
        label: "控件",
        type: "Compact",
        value: {
          offset: 0,
          span: 16,
        },
        schema: [
          {
            name: 'offset',
            type: "InputNumber",
            min: 0,
            max: 24,
          },
          {
            name: 'span',
            type: "InputNumber",
            min: 1,
            max: 24,
          }
        ]
      },
      {
        name: "autocomplete",
        label: "自动完成",
        type: "Switch",
        value: false,
        size: 'small'
      },
    ],
  };
};
