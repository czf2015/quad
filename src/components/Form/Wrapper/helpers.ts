export const appendFormItems = (formItems, dragWidgetName) => {
  console.log(dragWidgetName)
  switch (dragWidgetName) {
    case 'Text':
      formItems.push({
        name: "text",
        label: "文本",
        type: "TEXT",
      })
      break
    case 'RichText':
      formItems.push({
        name: "richText",
        label: "富文本",
        type: "RICHTEXT",
      })
      break
    case 'Number':
      formItems.push({
        name: "number",
        label: "数字",
        type: "NUMBER",
      })
      break
    case 'Check':
      formItems.push({
        name: "check",
        label: "勾选",
        type: "Switch",
      })
      break
    case 'Single':
      formItems.push({
        name: "single",
        label: "单选",
        type: "Select",
      })
      break
    case 'Multiple':
      formItems.push({
        name: "multiple",
        label: "多选",
        type: "Select",
        mode: "multiple",
      })
      break
    case 'Date':
      formItems.push({
        name: "date",
        label: "日期",
        type: "Date",
      })
      break
    case 'Attachment':
      formItems.push({
        name: "attachment",
        label: "日期",
        type: "ATTACHMENT",
      })
      break
    case 'Rate':
      formItems.push({
        name: "rate",
        label: "评分",
        type: "RATE",
      })
      break
    case 'Tags':
      formItems.push({
        name: "tags",
        label: "标签",
        type: "TAGS",
      })
      break
  }
}