export const appendFormItems = (formItems, dragWidgetName) => {
  switch (dragWidgetName) {
    case "Text":
      formItems.push({
        name: "text",
        label: "文本",
        type: "Text",
      });
      break;
    case "RichText":
      formItems.push({
        name: "richText",
        label: "富文本",
        type: "RichText",
      });
      break;
    case "Number":
      formItems.push({
        name: "number",
        label: "数字",
        type: "Number",
      });
      break;
    case "Check":
      formItems.push({
        name: "check",
        label: "勾选",
        type: "Switch",
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
      });
      break;
    case "Date":
      formItems.push({
        name: "date",
        label: "日期",
        type: "Date",
        mode: ""
      });
      break;
    case "Attachment":
      formItems.push({
        name: "attachment",
        label: "附件",
        type: "Attachment",
      });
      break;
    case "Rate":
      formItems.push({
        name: "rate",
        label: "评分",
        type: "Rate",
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
      });
      break;
  }
};
