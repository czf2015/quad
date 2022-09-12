export const convertToFormItems = (properties = {}, keys = Object.keys(properties)) => {
  const formItems = [];
  keys?.forEach((key) => {
    if (properties?.[key]) {
      formItems.push({ name: key, ...properties[key] });
    }
  });
  return formItems;
};

const requestSchema = [
  {
    label: '地址',
    name: 'url',
    type: 'InputText'
  },
  {
    label: '方法',
    name: 'method',
    type: 'Select',
    options: [
      {
        label: 'GET',
        value: 'GET'
      },
      {
        label: 'POST',
        value: 'POST'
      },
      {
        label: 'PUT',
        value: 'PUT'
      },
      {
        label: 'DELETE',
        value: 'DELETE'
      },
    ]
  },
  {
    label: '显示',
    name: 'visible',
    type: 'Eye'
  }
]


export const getMetaCustomize = () => {
  return [
    {
      name: 'title',
      label: '标题',
      type: 'InputText'
    },
    {
      name: 'upload',
      label: '导入',
      type: 'Compact',
      schema: requestSchema
    },
    {
      name: 'append',
      label: '新增',
      type: 'Compact',
      schema: requestSchema
    },
    {
      name: 'batch',
      label: '批量操作',
      type: 'FormList',
      schema: [
        // {
        //   label: '名称',
        //   name: 'text',
        //   type: 'InputText'
        // },
        {
          label: '地址',
          name: 'url',
          type: 'InputText'
        },
        {
          label: '方法',
          name: 'method',
          type: 'Select',
          options: [
            {
              label: 'GET',
              value: 'GET'
            },
            {
              label: 'POST',
              value: 'POST'
            },
            {
              label: 'PUT',
              value: 'PUT'
            },
            {
              label: 'DELETE',
              value: 'DELETE'
            },
          ]
        }
      ]
    },
    {
      name: 'pagination',
      label: '分页',
      type: 'Compact',
      schema: [
        {
          name: 'visible',
          label: '显示',
          type: 'Select',
          options: [
            {
              label: '自动',
              value: 0
            },
            {
              label: '显示',
              value: 1
            },
            {
              label: '隐藏',
              value: 2
            }
          ]
        },
        {
          name: 'position',
          label: '位置',
          type: 'Select',
          options: [
            {
              label: '左侧',
              value: 0
            },
            {
              label: '居中',
              value: 1
            },
            {
              label: '右侧',
              value: 2
            }
          ]
        },
        {
          name: 'mode',
          label: '显示方式',
          type: 'Select',
          options: [
            {
              label: '默认',
              value: 0
            },
            {
              label: 'round',
              value: 1
            }
          ]
        }
      ]
    },
  ]
}