// @ts-nocheck
/**
 * 图表 组件
 */
import React, { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import Chart from "@/plugins/Chart";
import { getOption, getTimelineOption, getPieOption, getBarOption, getGaugeOption, getCandlestickOption, getGanttOption, getHeatmapOption, getPictorialBarOption, getRaceOption, getRadarOption, getScatterOption, getStackBarOption, getSunburstOption, getProfileOption, getTreemapOption, getWaterfallBarOption, getNestGaugeOption, getNestPieOption, getCircleOption, } from "./options";

const defaultStyle = { width: "100%", height: 300, backgroundColor: "transparent" }

const GeneralChart = forwardRef(({
  option,
  events = [],
  style = defaultStyle,
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

  return <div style={{ defaultStyle, ...style }} ref={chartRef} />;
});

const hoc = (getOption) => ({ option, ...attrs }) => <GeneralChart option={getOption(option)} {...attrs} />


export default hoc(getOption)

export const PieChart = hoc(getPieOption)

export const LineChart = hoc(getOption)

export const BarChart = hoc(getBarOption)

export const StackBarChart = hoc(getStackBarOption)

export const PictorialBarChart = hoc(getPictorialBarOption)

export const GuageChart = hoc(getGaugeOption)

export const ScatterChart = hoc(getScatterOption)

export const WaterfallBarChart = hoc(getWaterfallBarOption)

export const NestGaugeChart = hoc(getNestGaugeOption)

export const NestPieChart = hoc(getNestPieOption)

export const ProfileChart = hoc(getProfileOption)

export const RaceChart = hoc(getRaceOption)

export const RadarChart = hoc(getRadarOption)

export const HeatmapChart = hoc(getHeatmapOption)

export const GanttChart = hoc(getGanttOption)

export const CandlestickChart = hoc(getCandlestickOption)

export const SunburstChart = hoc(getSunburstOption)

export const TreemapChart = hoc(getTreemapOption)

export const CircleChart = hoc(getCircleOption)

export const TimelineChart = hoc(getTimelineOption)

