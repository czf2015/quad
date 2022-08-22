// @ts-nocheck
/**
 * 图表 组件
 */
import React, { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import Chart from "@/plugins/Chart";
import { observe } from "@/utils/dom";
import { getOption, getTimelineOption, getPieOption, getBarOption, getGaugeOption, getCandlestickOption, getGanttOption, getHeatmapOption, getPictorialBarOption, getRaceOption, getRadarOption, getScatterOption, getStackBarOption, getSunburstOption, getProfileOption, getTreemapOption, getWaterfallBarOption, getNestGaugeOption, getNestPieOption, getCircleOption, } from "./options";
import { CHART_TYPES, CHART_LAYOUT_TYPES } from '@/constants/CHART';

const convertEnumsToOptions = (enums) =>
  enums.map((label, idx) => ({ label, value: Number(idx) }));

const defaultStyle = { width: '100%', height: '100%', backgroundColor: "transparent" }

const General = forwardRef(({
  id,
  option,
  events = [],
  style = defaultStyle,
  updateEntity,
} = {}, ref) => {
  const chartRef = useRef(null);
  const instanceRef = useRef(null);
  useImperativeHandle(ref, () => instanceRef);

  useEffect(() => {
    instanceRef.current = new Chart(chartRef.current);
    events.forEach(({ event, handler }) => {
      instanceRef.current.on(event, handler);
    });
    const handleResize = () => {
      instanceRef.current.resize();
    };
    window.addEventListener("resize", handleResize);
    observe(chartRef.current.parentNode, undefined, handleResize)
    return () => {
      window.removeEventListener("resize", handleResize);
      events.forEach(({ event, handler }) => {
        instanceRef.current.off(event, handler);
      });
      instanceRef.current.dispose();
    };
  }, []);

  useEffect(() => {
    instanceRef.current.render(option);
    instanceRef.current.resize();
  }, [option]);

  useEffect(() => {
    updateEntity?.(id, {
      meta: {
        custom: [
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
            options: [
              { label: '水平', value: 'horizontal' },
              { label: '垂直', value: 'vertical' },
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
                  exclude: [0, 1, 2]
                }
              }
            ]
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
                    value: 0,
                  },
                  {
                    label: 'Y 轴',
                    value: 1,
                  }
                ],
              },
              {
                name: 'field',
                label: '取值',
                type: 'Select',
                options: convertEnumsToOptions(CHART_TYPES),
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
                label: '标尺',
                type: 'Compact',
                // prerequisites: [
                //   {
                //     field: 'type',
                //     options: {
                //       include: [0, 1, 2]
                //     }
                //   }
                // ]
                schema: [{
                  name: 'transform',
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
      }
    })
  }, [])

  return <div style={{ defaultStyle, ...style }} ref={chartRef} />;
});

const hoc = (getOption) => ({ option, ...attrs }) => <General option={getOption(option)} {...attrs} />

export default hoc(getOption)

export const PieChart = hoc(getPieOption)
export const NestPieChart = hoc(getNestPieOption) // 可以合并到PieChart
export const CircleChart = hoc(getCircleOption) // 可以合并到PieChart

export const LineChart = hoc(getOption)

export const BarChart = hoc(getBarOption)
export const StackBarChart = hoc(getStackBarOption) // 可以合并到BarChart
export const PictorialBarChart = hoc(getPictorialBarOption) // 同上
export const WaterfallBarChart = hoc(getWaterfallBarOption) // 同上

export const ScatterChart = hoc(getScatterOption)

export const GuageChart = hoc(getGaugeOption)
export const NestGaugeChart = hoc(getNestGaugeOption) // 可以合并到GuageChart 

export const ProfileChart = hoc(getProfileOption)

export const RaceChart = hoc(getRaceOption)

export const RadarChart = hoc(getRadarOption)

export const HeatmapChart = hoc(getHeatmapOption)

export const GanttChart = hoc(getGanttOption)

export const CandlestickChart = hoc(getCandlestickOption)

export const SunburstChart = hoc(getSunburstOption)

export const TreemapChart = hoc(getTreemapOption)

export const TimelineChart = hoc(getTimelineOption)

