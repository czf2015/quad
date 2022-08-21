const CHART_TYPES = [
  '柱状图',
  '折线图',
  '散点图',
  '饼状图',
]

const CHART_LAYOUT_TYPES = ["horizontal", "vertical", 'TB', 'BT', 'LR', 'RL']

const convertEnumsToOptions = (enums) =>
  enums.map((label, idx) => ({ label, value: Number(idx) }));

export default [
  {
    name: 'title',
    label: '标题',
    type: 'Input',
  },
  {
    name: 'type',
    label: '图表类型',
    type: 'Select',
    options: convertEnumsToOptions(CHART_TYPES),
    rules: [{ required: true, message: '请选择图表类型' }],
    allowClear: false
  },
  {
    name: 'layout',
    label: '布局',
    type: 'Select',
    options: convertEnumsToOptions(CHART_LAYOUT_TYPES)
  },
  {
    name: 'dimensions',
    label: '维度',
    type: 'FormList',
    schema: [
      {
        name: 'axis',
        label: '坐标轴',
        type: 'Select',
        options: convertEnumsToOptions(CHART_TYPES),
        prerequisites: [
          {
            field: 'type',
            options: {
              include: [0, 1, 2]
            }
          }
        ]
      },
      {
        name: 'percentage',
        label: '百分化',
        type: 'Switch',
        options: convertEnumsToOptions(CHART_TYPES),
        prerequisites: [
          {
            field: 'type',
            options: {
              include: [0, 1, 2]
            }
          }
        ]
      },
      {
        name: 'scale',
        label: '量尺',
        type: 'Select',
        options: convertEnumsToOptions(CHART_TYPES),
        prerequisites: [
          {
            field: 'type',
            options: {
              include: [0, 1, 2]
            }
          }
        ]
      },
      {
        name: 'sort',
        label: '排序',
        type: 'Radio',
        options: convertEnumsToOptions(CHART_TYPES),
      },

    ]
  },
  {
    name: 'group',
    label: '分组',
    type: 'Select',
    options: convertEnumsToOptions(CHART_TYPES),
    prerequisites: [
      {
        field: 'type',
        options: {
          include: [0, 1, 2]
        }
      }
    ]
  },
  {
    name: 'stack',
    label: '堆叠',
    type: 'Select',
    options: convertEnumsToOptions(CHART_TYPES),
    prerequisites: [
      {
        field: 'type',
        options: {
          include: [0, 1, 2]
        }
      }
    ]
  },
  {
    name: 'animation',
    label: '动效',
    type: 'InputNumber',
    min: 0,
    unit: '秒',
  },
  {
    name: 'color',
    label: '颜色',
    type: 'ColorPicker',
    mode: 'multiple'
  }
]