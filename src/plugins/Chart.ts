// @ts-nocheck
import * as echarts from "echarts";

export default class Chart {
  static getInstance(el) {
    return echarts.getInstanceByDom(el);
  }
  static clipRectByRect = echarts.graphic.clipRectByRect
  static linearGradient = (...params) => new echarts.graphic.LinearGradient(...params)
  static getTextRect = (text) => echarts.format.getTextRect(text)
  // single class
  constructor(el, theme = 'macarons') {
    this.instance = echarts.getInstanceByDom(el) || echarts.init(el, theme);
  }
  render(option) {
    this.instance && this.instance.setOption(option);
  }
  dispose() {
    this.instance && this.instance.dispose();
  }
  resize(opts) {
    this.instance && this.instance.resize(opts)
  }
  on(eventName, handler) {
    this.instance && this.instance.on(eventName, handler)
  }
  off(eventName, handler) {
    this.instance && this.instance.off(eventName, handler)
  }
}