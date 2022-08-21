import React from 'react'
import Form from '@/components/Form'
import styles from './index.module.less'
import { CHART_TYPES, CHART_LAYOUT_TYPES } from '@/constants/CHART';

const convertEnumsToOptions = (enums) =>
  enums.map((label, idx) => ({ label, value: Number(idx) }));

export const CustomConfigPanel = ({ store }) => {
  const formItems = [
    {
      name: 'title',
      label: '标题',
      type: 'Input',
    },
    {
      name: 'type',
      label: '类型',
      type: 'Select',
      options: convertEnumsToOptions(CHART_TYPES),
      rules: [{ required: true, message: '请选择图表类型' }],
      allowClear: false
    },
    {
      name: 'color',
      label: '颜色',
      type: 'ColorPicker',
      mode: 'multiple'
    },
    {
      name: 'animation',
      label: '动效',
      type: 'InputNumber',
      min: 0,
      addonAfter: '秒',
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
      layout: 'vertical',
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
          options: [
            {
              label: '原始',
              value: 0
            },
            {
              label: '对数',
              value: 1
            },
            {
              label: '幂数',
              value: 2
            }
          ],
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
          type: 'Select',
          options: [
            {
              label: '原序',
              value: 0
            },
            {
              label: '正序',
              value: 1
            },
            {
              label: '倒序',
              value: -1
            }
          ],
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
  ]

  return (
    <div className={styles.custom_config_panel}>
      <Form children={formItems} wrapperCol={{span: 20}} labelCol={{span: 4}} />
    </div>
  )
}
