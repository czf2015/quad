import uuid from '@/plugins/uuid'

export const appendFormItems = (formItems, dragWidgetName) => {
  const id = uuid()
  switch (dragWidgetName) {
    case "Text":
      formItems.push({
        name: "text",
        label: "文本",
        type: "Text",
        id,
      });
      break;
    case "RichText":
      formItems.push({
        name: "richText",
        label: "富文本",
        type: "RichText",
        id,
      });
      break;
    case "Number":
      formItems.push({
        name: "number",
        label: "数字",
        type: "Number",
        id,
      });
      break;
    case "Check":
      formItems.push({
        name: "check",
        label: "勾选",
        type: "Switch",
        id,
      });
      break;
    case "Radio":
      formItems.push({
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
      });
      break;
    case "Multiple":
      formItems.push({
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
      });
      break;
    case "Date":
      formItems.push({
        name: "date",
        label: "日期",
        type: "Date",
        mode: "",
        id,
      });
      break;
    case "Attachment":
      formItems.push({
        name: "attachment",
        label: "附件",
        type: "Attachment",
        id,
      });
      break;
    case "Rate":
      formItems.push({
        name: "rate",
        label: "评分",
        type: "Rate",
        id,
      });
      break;
    case "Tags":
      formItems.push({
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
      });
      break;
  }
};

export const getMeta = () => {
  return {
    meta: {
      customize: [
        {
          name: "layout",
          label: "表单布局",
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
        },
        {
          name: "col",
          label: "宽度设置",
          type: "Compact",
          schema: [
            {
              name: "labelCol",
              // label: "标签",
              type: "InputNumber",
              min: 1,
              max: 24,
            },
            {
              name: "wrapperCol",
              // label: "内容",
              type: "InputNumber",
              min: 1,
              max: 24,
            },
          ],
        },
        {
          name: "labelAlign",
          label: "标签对齐",
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
    },
  };
};
