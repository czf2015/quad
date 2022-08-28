import React, { useEffect } from 'react'
import Chart from '@/components/Chart'
import { useDataSource } from '@/hooks';
import { getOption } from './helpers';


export default ({
  id,
  updateEntity,
  customize,
  dataSource = {
    type: 0,
    method: 'post',
    url: "/api/mock/getChartData.json",
    params: {
    },
    interval: 0,
  },
  ...attrs
} = {}) => {
  const { loading, data = {} } = useDataSource(dataSource)

  const { properties = {} } = data
  const field_options = Object.keys(properties).map(key => ({ label: properties?.[key]?.label, value: key }))

  useEffect(() => {
    updateEntity?.(id, {
      meta: {
        customize: [
          {
            name: 'title',
            label: '标题',
            type: 'Input',
          },
          {
            name: 'type',
            label: '类型',
            type: 'Select',
            options: [
              {
                label: '折线图',
                value: 'line'
              },
              {
                label: '柱状图',
                value: 'bar'
              }
            ],
            rules: [{ required: true, message: '请选择图表类型' }],
            allowClear: false
          },
          {
            name: 'color',
            label: '颜色',
            type: 'Colors',
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
            options: [
              { label: '水平', value: 'horizontal' },
              { label: '垂直', value: 'vertical' },
            ],
            prerequisites: [
              {
                field: 'type',
                options: {
                  include: ['line', 'bar']
                }
              }
            ],
          },
          {
            name: 'layout',
            label: '布局',
            type: 'Select',
            options: [
              { label: '从左到右', value: 'LR' },
              { label: '从右到左', value: 'RL' },
              { label: '从上到下', value: 'TB' },
              { label: '从下到上', value: 'BT' },
            ],
            prerequisites: [
              {
                field: 'type',
                options: {
                  exclude: ['line', 'bar']
                }
              }
            ],
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
                options: [
                  {
                    label: 'X 轴',
                    value: 'xAxis',
                  },
                  {
                    label: 'Y 轴',
                    value: 'yAxis',
                  }
                ],
              },
              {
                name: 'field',
                label: '取值',
                type: 'Select',
                options: field_options,
              },
              {
                name: 'scale',
                label: '标尺',
                type: 'Compact',
                // prerequisites: [
                //   {
                //     field: 'type',
                //     options: {
                //       include: ['line', 'bar']
                //     }
                //   }
                // ]
                schema: [{
                  name: 'transform',
                  type: 'Select',
                  options: [
                    {
                      label: '线性',
                      value: 0
                    },
                    {
                      label: '对数',
                      value: 1
                    },
                    {
                      label: '指数',
                      value: 2
                    }
                  ],
                },
                {
                  name: 'base',
                  type: 'InputNumber',
                }]
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
            name: 'percentage',
            label: '百分化',
            type: 'Switch',
            prerequisites: [
              {
                field: 'type',
                options: {
                  include: ['line', 'bar']
                }
              }
            ]
          },
          {
            name: 'group',
            label: '分组',
            type: 'Select',
            options: field_options,
            prerequisites: [
              {
                field: 'type',
                options: {
                  include: ['line', 'bar']
                }
              }
            ]
          },
          {
            name: 'stack',
            label: '堆叠',
            type: 'Select',
            options: field_options,
            prerequisites: [
              {
                field: 'type',
                options: {
                  include: ['line', 'bar']
                }
              }
            ]
          },
        ]
      }
    })
  }, [field_options.length])


  return <Chart {...attrs} option={getOption({ data, customize })} />;
};
