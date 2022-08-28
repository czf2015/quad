// @ts-nocheck
import Chart from '@/plugins/Chart'

export const getOption = ({
  categories = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
  series = [
    {
      name: "直接访问",
      type: "bar",
      emphasis: {
        focus: "series",
      },
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: "邮件营销",
      type: "bar",
      stack: "广告",
      emphasis: {
        focus: "series",
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "联盟广告",
      type: "bar",
      stack: "广告",
      emphasis: {
        focus: "series",
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: "视频广告",
      type: "bar",
      stack: "广告",
      emphasis: {
        focus: "series",
      },
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: "搜索引擎",
      type: "bar",
      data: [862, 1018, 964, 1026, 1679, 1600, 1570],
      emphasis: {
        focus: "series",
      },
      markLine: {
        lineStyle: {
          type: "dashed",
        },
        data: [[{ type: "min" }, { type: "max" }]],
      },
    },
    {
      name: "百度",
      type: "bar",
      barWidth: 5,
      stack: "搜索引擎",
      emphasis: {
        focus: "series",
      },
      data: [620, 732, 701, 734, 1090, 1130, 1120],
    },
    {
      name: "谷歌",
      type: "bar",
      stack: "搜索引擎",
      emphasis: {
        focus: "series",
      },
      data: [120, 132, 101, 134, 290, 230, 220],
    },
    {
      name: "必应",
      type: "bar",
      stack: "搜索引擎",
      emphasis: {
        focus: "series",
      },
      data: [60, 72, 71, 74, 190, 130, 110],
    },
    {
      name: "其他",
      type: "bar",
      stack: "搜索引擎",
      emphasis: {
        focus: "series",
      },
      data: [62, 82, 91, 84, 109, 110, 120],
    },
  ],
  tooltip,
} = {}) => {
  return {
    tooltip: {
      ...tooltip,
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "cross", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    legend: {
      orient: "horizontal",
      bottom: 0,
      center: "center",
      itemWidth: 6,
      itemHeight: 6,
      textStyle: {
        color: "#727274",
        fontSize: 8,
      },
      data: series.map((serie) => serie.name),
    },
    color: ["#BB55DE", "#19E1D3", "#5591F4", "#F2B937", "#763DCB", "#C23D67"],
    grid: {
      top: "6%",
      left: "2%",
      right: "2%",
      bottom: "13%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        axisLabel: {
          color: "#99ACC5",
          fontSize: 10,
        },
        splitLine: {
          show: false,
        },
        axisLine: {
          // 去除坐标轴线
          show: false,
        },
        data: categories,
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          color: "#99ACC5",
          fontSize: 10,
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "solid",
            color: "#2D3845",
          },
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
      },
    ],
    series,
  };
};

export const getPieOption = ({
  title = "访问来源",
  data = [
    { value: 1548, name: "搜索引擎" },
    { value: 775, name: "直达" },
    { value: 679, name: "营销广告", selected: true },
  ],
  label = {
    position: 'center',
  }
} = {}) => {
  return {
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c} ({d}%)",
      confine: true,
    },
    legend: {
      data: data.map((item) => item.name),
      type: "scroll",
      pageIconColor: "#19E1D3",
      pageIconSize: 8,
      center: "center",
      bottom: 0,
      orient: "horizontal",
      itemWidth: 6,
      itemHeight: 6,
      textStyle: {
        color: "#727274",
        fontSize: 10,
      },
    },
    color: ["#763DCB", "#19E1D3", "#5591F4", "#F2B937", "#C43A66", "#F48537"],
    series: [
      {
        name: title,
        type: "pie",
        center: ['50%', '50%'],
        radius: "65%",
        avoidLabelOverlap: true,
        selectedMode: "single",
        showEmptyCircle: false,
        label: {
          show: true,
          color: '#94a6be',
          position: label?.position || 'center',
          formatter: (params) => `${params.name}\n${params.percent}%`,
          fontSize: 10,
          rich: {
            number: {
              fontSize: 12,
            },
          },
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 11,
            fontWeight: "bold",
            alignTo: "edge",
          },
        },
        labelLine: {
          show: true,
          lineStyle: {
            color: '#94a6be'
          }
        },
        data,
      },
    ],
  };
};

export const getCircleOption = ({
  title = "访问来源",
  data = [
    // { value: 335, name: "直达" },
    // { value: 310, name: "邮件营销" },
    // { value: 1048, name: "百度" },
    // { value: 251, name: "谷歌" },
    // { value: 234, name: "联盟广告" },
    // { value: 147, name: "必应" },
    // { value: 135, name: "视频广告" },
    // { value: 102, name: "其他" },
    { name: "test1", value: 0 },
    { name: "test2", value: 0 },
    { name: "test3", value: 0 },
  ],
} = {}) => {
  return {
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c} ({d}%)",
      confine: true,
    },
    legend: {
      data: data.map((item) => item.name),
      type: "scroll",
      pageIconColor: "#19E1D3",
      pageIconSize: 8,
      center: "center",
      top: "10%",
      left: "70%",
      orient: "vertical",
      itemWidth: 6,
      itemHeight: 6,
      textStyle: {
        color: "#727274",
        fontSize: 10,
      },
    },
    color: ["#763DCB", "#19E1D3", "#5591F4", "#F2B937", "#C43A66", "#F48537"],
    series: [
      {
        name: title,
        type: "pie",
        top: "15%",
        center: ["40%", "40%"],
        radius: ["70%", "95%"],
        avoidLabelOverlap: false,
        selectedMode: "single",
        label: {
          show: false,
          position: "center",
          formatter: (param) => `${param.name}\n{number|${param.value}}`,
          rich: {
            number: {
              fontSize: 16,
            },
          },
        },
        labelLine: {
          show: false,
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 11,
            fontWeight: "bold",
            alignTo: "edge",
          },
        },
        data,
      },
    ],
  };
};

export const getNestPieOption = ({
  title = "访问来源",
  type = [
    { value: 1548, name: "搜索引擎" },
    { value: 775, name: "直达" },
    { value: 679, name: "营销广告", selected: true },
  ],
  list = [
    { value: 1048, name: "百度" },
    { value: 335, name: "直达" },
    { value: 147, name: "必应" },
    { value: 251, name: "谷歌" },
    { value: 310, name: "邮件营销" },
    { value: 234, name: "联盟广告" },
    { value: 135, name: "视频广告" },
    { value: 102, name: "其他" },
  ],
} = {}) => {
  return {
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c} ({d}%)",
      confine: true,
    },
    legend: {
      data: [...type, ...list].map((item) => item.name),
      type: "scroll",
      pageIconColor: "#19E1D3",
      pageIconSize: 8,
      center: "center",
      top: "10%",
      left: "70%",
      orient: "vertical",
      itemWidth: 6,
      itemHeight: 6,
      textStyle: {
        color: "#727274",
        fontSize: 10,
      },
    },
    color: ["#763DCB", "#19E1D3", "#5591F4", "#F2B937", "#C43A66", "#F48537"],
    series: [
      {
        name: title,
        type: "pie",
        top: "15%",
        center: ["40%", "40%"],
        radius: ["70%", "95%"],
        avoidLabelOverlap: false,
        selectedMode: "single",
        label: {
          show: false,
          position: "center",
          formatter: (param) => `${param.name}\n{number|${param.value}}`,
          rich: {
            number: {
              fontSize: 16,
            },
          },
        },
        labelLine: {
          show: false,
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 11,
            fontWeight: "bold",
            alignTo: "edge",
          },
        },
        data: list,
      },
      {
        name: title,
        type: "pie",
        top: "15%",
        center: ["40%", "40%"],
        radius: ["0%", "50%"],
        avoidLabelOverlap: false,
        selectedMode: "single",
        label: {
          show: false,
          position: "center",
          formatter: (param) => `${param.name}\n{number|${param.value}}`,
          rich: {
            number: {
              fontSize: 16,
            },
          },
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 11,
            fontWeight: "bold",
            alignTo: "edge",
          },
        },
        labelLine: {
          show: false,
        },
        data: type,
      },
    ],
  };
};

export const getBarOption = ({
  categories = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
  series = [
    {
      name: "直接访问",
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: "邮件营销",
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "联盟广告",
      data: [220, 182, 191, 234, 290, 330, 310],
    },
  ],
} = {}) => {
  return {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    legend: {
      data: series.map((serie) => serie.name),
      top: "bottom",
      itemWidth: 10,
      itemHeight: 7,
      textStyle: {
        color: "#727274",
        fontSize: 10,
      },
    },
    grid: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 20,
      containLabel: true,
    },
    center: ["40%", "40%"],
    xAxis: [
      {
        type: "category",
        // 轴文字颜色
        axisLabel: {
          textStyle: {
            color: "#727274",
            fontSize: 8,
          },
        },
        data: categories,
      },
    ],
    yAxis: [
      {
        // y轴的线条类型
        splitLine: {
          show: true,
          lineStyle: {
            type: "solid",
            color: "#2D3845",
          },
        },
        // X轴文字颜色
        axisLabel: {
          textStyle: {
            color: "#727274",
            fontSize: 8,
          },
        },
        // y轴标线(不显示)
        axisLine: {
          show: false,
        },
      },
    ],
    series: series.map((item) =>
      Object.assign(item, {
        type: "bar",
        // seriesLayoutBy: "row",
        barWidth: 20,
      })
    ),
  };
};

export const getScatterOption = ({
  categories = [],
  series = [
    {
      name: "NDR",
      data: [
        [10.0, 8.04],
        [8.07, 6.95],
        [13.0, 7.58],
        [9.05, 8.81],
        [11.0, 8.33],
        [14.0, 7.66],
        [13.4, 6.81],
        [16.0, 6.33],
        [18.0, 8.96],
        [19.5, 6.82],
        [24.15, 7.2],
        [18.5, 7.2],
        [28.03, 4.23],
      ],
    },
    {
      name: "EDR",
      data: [
        [11.0, 4.04],
        [4.07, 10.95],
        [10.0, 3.58],
        [10.05, 12.81],
        [12.0, 3.33],
        [13.0, 8.66],
        [12.4, 0.81],
        [15.0, 8.33],
        [15.0, 2.96],
        [18.5, 5.82],
        [20.15, 8.2],
        [21.5, 5.2],
        [28.03, 7.23],
      ],
    },
  ],
} = {}) => {
  return {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    legend: {
      orient: "horizontal",
      bottom: 0,
      center: "center",
      itemWidth: 6,
      itemHeight: 6,
      textStyle: {
        color: "#727274",
        fontSize: 8,
      },
      data: series.map((serie) => serie.name),
    },
    color: ["#19E1D3", "#5591F4", "#F48537", "#F2B937", "#763DCB", "#C23D67"],
    grid: {
      top: "6%",
      left: "2%",
      right: "2%",
      bottom: "13%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      // name: '时间轴',
      axisLabel: {
        color: "#99ACC5",
        fontSize: 10,
      },
      splitLine: {
        show: false,
      },
      axisLine: {
        // 去除坐标轴线
        show: false,
      },
      data: categories,
    },
    yAxis: {
      axisLabel: {
        color: "#99ACC5",
        fontSize: 10,
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          color: "#2D3845",
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
    },
    series: series.map((item) =>
      Object.assign(item, { type: "scatter", symbolSize: 12 })
    ),
  };
};

export const getAreaPiecesOption = (
  data = [
    ["2019-10-10", 200],
    ["2019-10-11", 560],
    ["2019-10-12", 750],
    ["2019-10-13", 580],
    ["2019-10-14", 250],
    ["2019-10-15", 300],
    ["2019-10-16", 450],
    ["2019-10-17", 300],
    ["2019-10-18", 100],
  ],
  visualMap = {
    pieces: [
      {
        gt: 1,
        lt: 3,
        color: "rgba(0, 0, 180, 0.4)",
      },
      {
        gt: 5,
        lt: 7,
        color: "rgba(0, 0, 180, 0.4)",
      },
    ],
  },
  markLine = {
    data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }],
  }
) => {
  return {
    xAxis: {
      type: "category",
      boundaryGap: false,
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "30%"],
    },
    visualMap: {
      type: "piecewise",
      show: false,
      dimension: 0,
      seriesIndex: 0,
      ...visualMap,
    },
    series: [
      {
        type: "line",
        smooth: 0.6,
        symbol: "none",
        lineStyle: {
          color: "#5470C6",
          width: 5,
        },
        markLine: {
          symbol: ["none", "none"],
          label: { show: false },
          ...markLine,
        },
        areaStyle: {},
        data,
      },
    ],
  };
};

export const getStackBarOption = (
  series = [
    {
      name: "直接访问",
      type: "bar",
      emphasis: {
        focus: "series",
      },
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: "邮件营销",
      type: "bar",
      stack: "广告",
      emphasis: {
        focus: "series",
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "联盟广告",
      type: "bar",
      stack: "广告",
      emphasis: {
        focus: "series",
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: "视频广告",
      type: "bar",
      stack: "广告",
      emphasis: {
        focus: "series",
      },
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: "搜索引擎",
      type: "bar",
      data: [862, 1018, 964, 1026, 1679, 1600, 1570],
      emphasis: {
        focus: "series",
      },
      markLine: {
        lineStyle: {
          type: "dashed",
        },
        data: [[{ type: "min" }, { type: "max" }]],
      },
    },
    {
      name: "百度",
      type: "bar",
      barWidth: 5,
      stack: "搜索引擎",
      emphasis: {
        focus: "series",
      },
      data: [620, 732, 701, 734, 1090, 1130, 1120],
    },
    {
      name: "谷歌",
      type: "bar",
      stack: "搜索引擎",
      emphasis: {
        focus: "series",
      },
      data: [120, 132, 101, 134, 290, 230, 220],
    },
    {
      name: "必应",
      type: "bar",
      stack: "搜索引擎",
      emphasis: {
        focus: "series",
      },
      data: [60, 72, 71, 74, 190, 130, 110],
    },
    {
      name: "其他",
      type: "bar",
      stack: "搜索引擎",
      emphasis: {
        focus: "series",
      },
      data: [62, 82, 91, 84, 109, 110, 120],
    },
  ],
  xAxis = [
    {
      type: "category",
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    },
  ]
) => {
  return {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    legend: {
      data: series.map((serie) => serie.name),
      top: "bottom",
      left: "center",
      itemWidth: 8,
      itemHeight: 4,
      textStyle: {
        color: "#ffffffa6",
      },
    },
    grid: {
      left: "3%",
      right: "3%",
      top: "5%",
      bottom: "12%",
      containLabel: true,
    },
    xAxis,
    yAxis: [
      {
        type: "value",
      },
    ],
    series,
  };
};

export const getWaterfallBarOption = (
  title = {
    text: "阶梯瀑布图",
    subtext: "From ExcelHome",
    sublink: "http://e.weibo.com/1341556070/Aj1J2x5a5",
  },
  legend = {
    data: ["收入", "支出"],
  },
  data = [900, 345, 393, -108, -154, 135, 178, 286, -119, -361, -203],
  xAxis = {
    data: (function () {
      var list = [];
      for (var i = 1; i <= 11; i++) {
        list.push("11月" + i + "日");
      }
      return list;
    })(),
  }
) => {
  const getBaseData = (data) =>
    data.reduce(
      (acc, cur) => {
        if (acc.length > 0) {
          const last = acc[acc.length - 1];
          acc.push(last + cur);
        } else {
          acc.push(0);
        }
        return acc;
      },
      [0]
    );
  return {
    title,
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: function (params) {
        var tar;
        if (params[1].value !== "-") {
          tar = params[1];
        } else {
          tar = params[0];
        }
        return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
      },
    },
    legend,
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      splitLine: { show: false },
      ...xAxis,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "辅助",
        type: "bar",
        stack: "总量",
        itemStyle: {
          barBorderColor: "rgba(0,0,0,0)",
          color: "rgba(0,0,0,0)",
        },
        emphasis: {
          itemStyle: {
            barBorderColor: "rgba(0,0,0,0)",
            color: "rgba(0,0,0,0)",
          },
        },
        data: getBaseData,
      },
      {
        name: legend.data[0],
        type: "bar",
        stack: "总量",
        label: {
          show: true,
          position: "top",
        },
        data: data.map((val) => (val > 0 ? val : "-")),
      },
      {
        name: legend.data[1],
        type: "bar",
        stack: "总量",
        label: {
          show: true,
          position: "bottom",
        },
        data: data.map((val) => (val < 0 ? val : "-")),
      },
    ],
  };
};

function splitData(rawData) {
  var categoryData = [];
  var values = [];
  for (var i = 0; i < rawData.length; i++) {
    categoryData.push(rawData[i].splice(0, 1)[0]);
    values.push(rawData[i]);
  }
  return {
    categoryData: categoryData,
    values: values,
  };
}

function calculateMA(dayCount) {
  var result = [];
  for (var i = 0, len = data0.values.length; i < len; i++) {
    if (i < dayCount) {
      result.push("-");
      continue;
    }
    var sum = 0;
    for (var j = 0; j < dayCount; j++) {
      sum += data0.values[i - j][1];
    }
    result.push(sum / dayCount);
  }
  return result;
}

export const getCandlestickOption = (
  title = {
    text: "上证指数",
    left: 0,
  },
  data = [
    ["2013/1/24", 2320.26, 2320.26, 2287.3, 2362.94],
    ["2013/1/25", 2300, 2291.3, 2288.26, 2308.38],
    ["2013/1/28", 2295.35, 2346.5, 2295.35, 2346.92],
    ["2013/1/29", 2347.22, 2358.98, 2337.35, 2363.8],
    ["2013/1/30", 2360.75, 2382.48, 2347.89, 2383.76],
    ["2013/1/31", 2383.43, 2385.42, 2371.23, 2391.82],
    ["2013/2/1", 2377.41, 2419.02, 2369.57, 2421.15],
    ["2013/2/4", 2425.92, 2428.15, 2417.58, 2440.38],
    ["2013/2/5", 2411, 2433.13, 2403.3, 2437.42],
    ["2013/2/6", 2432.68, 2434.48, 2427.7, 2441.73],
    ["2013/2/7", 2430.69, 2418.53, 2394.22, 2433.89],
    ["2013/2/8", 2416.62, 2432.4, 2414.4, 2443.03],
    ["2013/2/18", 2441.91, 2421.56, 2415.43, 2444.8],
    ["2013/2/19", 2420.26, 2382.91, 2373.53, 2427.07],
    ["2013/2/20", 2383.49, 2397.18, 2370.61, 2397.94],
    ["2013/2/21", 2378.82, 2325.95, 2309.17, 2378.82],
    ["2013/2/22", 2322.94, 2314.16, 2308.76, 2330.88],
    ["2013/2/25", 2320.62, 2325.82, 2315.01, 2338.78],
    ["2013/2/26", 2313.74, 2293.34, 2289.89, 2340.71],
    ["2013/2/27", 2297.77, 2313.22, 2292.03, 2324.63],
    ["2013/2/28", 2322.32, 2365.59, 2308.92, 2366.16],
    ["2013/3/1", 2364.54, 2359.51, 2330.86, 2369.65],
    ["2013/3/4", 2332.08, 2273.4, 2259.25, 2333.54],
    ["2013/3/5", 2274.81, 2326.31, 2270.1, 2328.14],
    ["2013/3/6", 2333.61, 2347.18, 2321.6, 2351.44],
    ["2013/3/7", 2340.44, 2324.29, 2304.27, 2352.02],
    ["2013/3/8", 2326.42, 2318.61, 2314.59, 2333.67],
    ["2013/3/11", 2314.68, 2310.59, 2296.58, 2320.96],
    ["2013/3/12", 2309.16, 2286.6, 2264.83, 2333.29],
    ["2013/3/13", 2282.17, 2263.97, 2253.25, 2286.33],
    ["2013/3/14", 2255.77, 2270.28, 2253.31, 2276.22],
    ["2013/3/15", 2269.31, 2278.4, 2250, 2312.08],
    ["2013/3/18", 2267.29, 2240.02, 2239.21, 2276.05],
    ["2013/3/19", 2244.26, 2257.43, 2232.02, 2261.31],
    ["2013/3/20", 2257.74, 2317.37, 2257.42, 2317.86],
    ["2013/3/21", 2318.21, 2324.24, 2311.6, 2330.81],
    ["2013/3/22", 2321.4, 2328.28, 2314.97, 2332],
    ["2013/3/25", 2334.74, 2326.72, 2319.91, 2344.89],
    ["2013/3/26", 2318.58, 2297.67, 2281.12, 2319.99],
    ["2013/3/27", 2299.38, 2301.26, 2289, 2323.48],
    ["2013/3/28", 2273.55, 2236.3, 2232.91, 2273.55],
    ["2013/3/29", 2238.49, 2236.62, 2228.81, 2246.87],
    ["2013/4/1", 2229.46, 2234.4, 2227.31, 2243.95],
    ["2013/4/2", 2234.9, 2227.74, 2220.44, 2253.42],
    ["2013/4/3", 2232.69, 2225.29, 2217.25, 2241.34],
    ["2013/4/8", 2196.24, 2211.59, 2180.67, 2212.59],
    ["2013/4/9", 2215.47, 2225.77, 2215.47, 2234.73],
    ["2013/4/10", 2224.93, 2226.13, 2212.56, 2233.04],
    ["2013/4/11", 2236.98, 2219.55, 2217.26, 2242.48],
    ["2013/4/12", 2218.09, 2206.78, 2204.44, 2226.26],
    ["2013/4/15", 2199.91, 2181.94, 2177.39, 2204.99],
    ["2013/4/16", 2169.63, 2194.85, 2165.78, 2196.43],
    ["2013/4/17", 2195.03, 2193.8, 2178.47, 2197.51],
    ["2013/4/18", 2181.82, 2197.6, 2175.44, 2206.03],
    ["2013/4/19", 2201.12, 2244.64, 2200.58, 2250.11],
    ["2013/4/22", 2236.4, 2242.17, 2232.26, 2245.12],
    ["2013/4/23", 2242.62, 2184.54, 2182.81, 2242.62],
    ["2013/4/24", 2187.35, 2218.32, 2184.11, 2226.12],
    ["2013/4/25", 2213.19, 2199.31, 2191.85, 2224.63],
    ["2013/4/26", 2203.89, 2177.91, 2173.86, 2210.58],
    ["2013/5/2", 2170.78, 2174.12, 2161.14, 2179.65],
    ["2013/5/3", 2179.05, 2205.5, 2179.05, 2222.81],
    ["2013/5/6", 2212.5, 2231.17, 2212.5, 2236.07],
    ["2013/5/7", 2227.86, 2235.57, 2219.44, 2240.26],
    ["2013/5/8", 2242.39, 2246.3, 2235.42, 2255.21],
    ["2013/5/9", 2246.96, 2232.97, 2221.38, 2247.86],
    ["2013/5/10", 2228.82, 2246.83, 2225.81, 2247.67],
    ["2013/5/13", 2247.68, 2241.92, 2231.36, 2250.85],
    ["2013/5/14", 2238.9, 2217.01, 2205.87, 2239.93],
    ["2013/5/15", 2217.09, 2224.8, 2213.58, 2225.19],
    ["2013/5/16", 2221.34, 2251.81, 2210.77, 2252.87],
    ["2013/5/17", 2249.81, 2282.87, 2248.41, 2288.09],
    ["2013/5/20", 2286.33, 2299.99, 2281.9, 2309.39],
    ["2013/5/21", 2297.11, 2305.11, 2290.12, 2305.3],
    ["2013/5/22", 2303.75, 2302.4, 2292.43, 2314.18],
    ["2013/5/23", 2293.81, 2275.67, 2274.1, 2304.95],
    ["2013/5/24", 2281.45, 2288.53, 2270.25, 2292.59],
    ["2013/5/27", 2286.66, 2293.08, 2283.94, 2301.7],
    ["2013/5/28", 2293.4, 2321.32, 2281.47, 2322.1],
    ["2013/5/29", 2323.54, 2324.02, 2321.17, 2334.33],
    ["2013/5/30", 2316.25, 2317.75, 2310.49, 2325.72],
    ["2013/5/31", 2320.74, 2300.59, 2299.37, 2325.53],
    ["2013/6/3", 2300.21, 2299.25, 2294.11, 2313.43],
    ["2013/6/4", 2297.1, 2272.42, 2264.76, 2297.1],
    ["2013/6/5", 2270.71, 2270.93, 2260.87, 2276.86],
    ["2013/6/6", 2264.43, 2242.11, 2240.07, 2266.69],
    ["2013/6/7", 2242.26, 2210.9, 2205.07, 2250.63],
    ["2013/6/13", 2190.1, 2148.35, 2126.22, 2190.1],
  ]
) => {
  const upColor = "#ec0000";
  const upBorderColor = "#8A0000";
  const downColor = "#00da3c";
  const downBorderColor = "#008F28";

  // 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)
  const data0 = splitData(data);

  const getMASerie = (days) => {
    return {
      name: `MA${days}`,
      type: "line",
      data: calculateMA(days),
      smooth: true,
      lineStyle: {
        opacity: 0.5,
      },
    };
  };

  return {
    title,
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    legend: {
      data: ["日K", "MA5", "MA10", "MA20", "MA30"],
    },
    grid: {
      left: "10%",
      right: "10%",
      bottom: "15%",
    },
    xAxis: {
      type: "category",
      data: data0.categoryData,
      scale: true,
      boundaryGap: false,
      axisLine: { onZero: false },
      splitLine: { show: false },
      splitNumber: 20,
      min: "dataMin",
      max: "dataMax",
    },
    yAxis: {
      scale: true,
      splitArea: {
        show: true,
      },
    },
    dataZoom: [
      {
        type: "inside",
        start: 50,
        end: 100,
      },
      {
        show: true,
        type: "slider",
        top: "90%",
        start: 50,
        end: 100,
      },
    ],
    series: [
      {
        name: "日K",
        type: "candlestick",
        data: data0.values,
        itemStyle: {
          color: upColor,
          color0: downColor,
          borderColor: upBorderColor,
          borderColor0: downBorderColor,
        },
        markPoint: {
          label: {
            normal: {
              formatter: function (param) {
                return param != null ? Math.round(param.value) : "";
              },
            },
          },
          data: [
            {
              name: "XX标点",
              coord: ["2013/5/31", 2300],
              value: 2300,
              itemStyle: {
                color: "rgb(41,60,85)",
              },
            },
            {
              name: "highest value",
              type: "max",
              valueDim: "highest",
            },
            {
              name: "lowest value",
              type: "min",
              valueDim: "lowest",
            },
            {
              name: "average value on close",
              type: "average",
              valueDim: "close",
            },
          ],
          tooltip: {
            formatter: function (param) {
              return param.name + "<br>" + (param.data.coord || "");
            },
          },
        },
        markLine: {
          symbol: ["none", "none"],
          data: [
            [
              {
                name: "from lowest to highest",
                type: "min",
                valueDim: "lowest",
                symbol: "circle",
                symbolSize: 10,
                label: {
                  show: false,
                },
                emphasis: {
                  label: {
                    show: false,
                  },
                },
              },
              {
                type: "max",
                valueDim: "highest",
                symbol: "circle",
                symbolSize: 10,
                label: {
                  show: false,
                },
                emphasis: {
                  label: {
                    show: false,
                  },
                },
              },
            ],
            {
              name: "min line on close",
              type: "min",
              valueDim: "close",
            },
            {
              name: "max line on close",
              type: "max",
              valueDim: "close",
            },
          ],
        },
      },
      ...[5, 10, 20, 30].map(getMASerie),
    ],
  };
};

export const getProfileOption = (
  title = {
    text: "Profile",
    left: "center",
  },
  tooltip = {
    formatter(params) {
      return params.marker + params.name + ": " + params.value[3] + " ms";
    },
  }
) => {
  const startTime = +new Date();

  const mock = () => {
    const data = [];
    const dataCount = 10;
    const categories = ["categoryA", "categoryB", "categoryC"];
    const types = [
      { name: "JS Heap", color: "#7b9ce1" },
      { name: "Documents", color: "#bd6d6c" },
      { name: "Nodes", color: "#75d874" },
      { name: "Listeners", color: "#e0bc78" },
      { name: "GPU Memory", color: "#dc77dc" },
      { name: "GPU", color: "#72b362" },
    ];

    // Generate mock data
    categories.forEach((category, index) => {
      let baseTime = startTime;
      for (let i = 0; i < dataCount; i++) {
        const typeItem = types[Math.round(Math.random() * (types.length - 1))];
        const duration = Math.round(Math.random() * 10000);
        data.push({
          name: typeItem.name,
          value: [index, baseTime, (baseTime += duration), duration],
          itemStyle: {
            normal: {
              color: typeItem.color,
            },
          },
        });
        baseTime += Math.round(Math.random() * 2000);
      }
    });
    return data;
  };

  const data = mock();

  function renderItem(params, api) {
    const categoryIndex = api.value(0);
    const start = api.coord([api.value(1), categoryIndex]);
    const end = api.coord([api.value(2), categoryIndex]);
    const height = api.size([0, 1])[1] * 0.6;

    const rectShape = Chart.clipRectByRect(
      {
        x: start[0],
        y: start[1] - height / 2,
        width: end[0] - start[0],
        height: height,
      },
      {
        x: params.coordSys.x,
        y: params.coordSys.y,
        width: params.coordSys.width,
        height: params.coordSys.height,
      }
    );

    return (
      rectShape && {
        type: "rect",
        transition: ["shape"],
        shape: rectShape,
        style: api.style(),
      }
    );
  }

  return {
    tooltip,
    title,
    dataZoom: [
      {
        type: "slider",
        filterMode: "weakFilter",
        showDataShadow: false,
        top: 400,
        labelFormatter: "",
      },
      {
        type: "inside",
        filterMode: "weakFilter",
      },
    ],
    grid: {
      height: 300,
    },
    xAxis: {
      min: startTime,
      scale: true,
      axisLabel: {
        formatter: function (val) {
          return Math.max(0, val - startTime) + " ms";
        },
      },
    },
    yAxis: {
      data: data.map((item) => item.name),
    },
    series: [
      {
        type: "custom",
        renderItem,
        itemStyle: {
          opacity: 0.8,
        },
        encode: {
          x: [1, 2],
          y: 0,
        },
        data,
      },
    ],
  };
};

function generateRandom(lower, upper, fixed) {
  return (Math.random() * (upper - lower + 1) + lower).toFixed(fixed) - 0;
}

// export const getGaugeOption = (chart) => {
//   const schedule = () => {
//     let moveTime = 0;
//     let moveDistance = 0;
//     let avgEnergy = 0;
//     let avgSpeed = 0;
//     let minite = 0;
//     function createFormatter(moveTime, moveDistance, avgEnergy, avgSpeed) {
//       console.log();
//       const date = new Date();
//       let hour = date.getHours();
//       let minite = date.getMinutes();
//       let time =
//         (hour < 10 ? "0" + hour : hour) +
//         ":" +
//         (minite < 10 ? "0" + minite : minite);
//       moveTime < 10 && (moveTime = "0" + moveTime);
//       return [
//         `{a|                  ${time}}`,
//         `{a|行驶时间        ${"0:" + moveTime}}{b| h}`,
//         `{a|行驶距离        ${moveDistance}}{b| km}`,
//         `{a|平均耗能        ${avgEnergy}}{b| 1/100km}`,
//         `{a|平均速度        ${avgSpeed}}{b| km/h}`,
//       ].join("\n");
//     }
//     const interval = 2;
//     setInterval(function () {
//       let speed = generateRandom(70, 80, 0);
//       option.series[1].data[0].value = speed;
//       option.series[3].data[0].value = speed;
//       let rotatingSpeed = generateRandom(2.5, 3, 1);
//       option.series[2].data[0].value = rotatingSpeed;
//       option.series[6].data[0].value = -generateRandom(105, 115, 0);

//       moveTime += interval;
//       if (moveTime % 60 === 0) {
//         minite++;
//         if (minite > 30) {
//           moveTime = 2;
//           moveDistance = 0;
//           avgEnergy = 0;
//           avgSpeed = 0;
//           minite = 0;
//           // oil
//           if (option.series[5].data[0].value > 0.3) {
//             option.series[5].data[0].value -= 0.1;
//           } else {
//             option.series[5].data[0].value = 1;
//           }
//         }
//       }
//       // mock value
//       moveDistance += (interval / 3600) * speed;
//       avgSpeed = moveDistance / (moveTime / 3600);
//       avgEnergy = 85 * avgSpeed;
//       option.series[4].detail.formatter = createFormatter(
//         minite,
//         moveDistance.toFixed(1),
//         avgEnergy.toFixed(0),
//         avgSpeed.toFixed(0)
//       );
//       chart.render(option);
//     }, 2000);
//   };

//   return {
//     backgroundColor: "#000",
//     tooltip: {
//       formatter: "{a} <br/>{b} : {c}%",
//     },
//     toolbox: {
//       feature: {
//         restore: {},
//         saveAsImage: {},
//       },
//     },
//     series: [
//       // left
//       {
//         name: "gauge 0",
//         type: "gauge",
//         min: -200,
//         max: 250,
//         startAngle: -30,
//         endAngle: -315,
//         splitNumber: 9,
//         radius: "35%",
//         center: ["21%", "55%"],
//         axisLine: {
//           lineStyle: {
//             color: [[1, "#AE96A6"]],
//           },
//         },
//         splitLine: {
//           show: false,
//         },
//         axisTick: {
//           show: false,
//         },
//         axisLabel: {
//           show: false,
//         },
//         anchor: {},
//         pointer: {
//           show: false,
//         },
//         detail: {
//           show: false,
//         },
//         title: {
//           fontSize: 12,
//           fontWeight: 800,
//           fontFamily: "Arial",
//           color: "#fff",
//           offsetCenter: [0, "-60%"],
//         },
//         progress: {
//           show: true,
//           width: 3,
//           itemStyle: {
//             color: "#fff",
//           },
//         },
//         data: [
//           {
//             value: 250,
//             name: "km/h",
//           },
//         ],
//       },
//       {
//         name: "gauge 1",
//         type: "gauge",
//         min: 0,
//         max: 250,
//         startAngle: -140,
//         endAngle: -305,
//         splitNumber: 5,
//         radius: "35%",
//         center: ["21%", "55%"],
//         axisLine: {
//           lineStyle: {
//             color: [[1, "#AE96A6"]],
//           },
//         },
//         splitLine: {
//           distance: -7,
//           length: 12,
//           lineStyle: {
//             color: "#fff",
//             width: 4,
//           },
//         },
//         axisTick: {
//           distance: -8,
//           length: 8,
//           lineStyle: {
//             color: "#fff",
//             width: 2,
//           },
//         },
//         axisLabel: {
//           distance: 14,
//           fontSize: 18,
//           fontWeight: 800,
//           fontFamily: "Arial",
//           color: "#fff",
//         },
//         anchor: {},
//         pointer: {
//           icon: "path://M-36.5,23.9L-41,4.4c-0.1-0.4-0.4-0.7-0.7-0.7c-0.5-0.1-1.1,0.2-1.2,0.7l-4.5,19.5c0,0.1,0,0.1,0,0.2v92.3c0,0.6,0.4,1,1,1h9c0.6,0,1-0.4,1-1V24.1C-36.5,24-36.5,23.9-36.5,23.9z M-39.5,114.6h-5v-85h5V114.6z",
//           width: 5,
//           length: "40%",
//           offsetCenter: [0, "-58%"],
//           itemStyle: {
//             color: "#f00",
//             shadowColor: "rgba(255, 0, 0)",
//             shadowBlur: 5,
//             shadowOffsetY: 2,
//           },
//         },
//         title: {
//           color: "#fff",
//           fontSize: 14,
//           fontWeight: 800,
//           fontFamily: "Arial",
//           offsetCenter: [0, 0],
//         },
//         detail: {
//           show: false,
//         },
//         data: [
//           {
//             value: 0,
//             name: "当前位置：\n \n 中科路",
//           },
//         ],
//       },
//       // middle
//       {
//         name: "gauge 2",
//         type: "gauge",
//         min: 0,
//         max: 8,
//         z: 10,
//         startAngle: 210,
//         endAngle: -30,
//         splitNumber: 8,
//         radius: "50%",
//         center: ["50%", "50%"],
//         axisLine: {
//           show: true,
//           lineStyle: {
//             width: 0,
//             color: [
//               [0.825, "#fff"],
//               [1, "#f00"],
//             ],
//           },
//         },
//         splitLine: {
//           distance: 20,
//           length: 15,
//           lineStyle: {
//             color: "auto",
//             width: 4,
//             shadowColor: "rgba(255, 255, 255, 0.5)",
//             shadowBlur: 15,
//             shadowOffsetY: -10,
//           },
//         },
//         axisTick: {
//           distance: 20,
//           length: 8,
//           lineStyle: {
//             color: "auto",
//             width: 2,
//             shadowColor: "rgba(255, 255, 255)",
//             shadowBlur: 10,
//             shadowOffsetY: -10,
//           },
//         },
//         axisLabel: {
//           distance: 10,
//           fontSize: 35,
//           fontWeight: 800,
//           fontFamily: "Arial",
//           color: "#fff",
//         },
//         anchor: {},
//         pointer: {
//           icon: "path://M-36.5,23.9L-41,4.4c-0.1-0.4-0.4-0.7-0.7-0.7c-0.5-0.1-1.1,0.2-1.2,0.7l-4.5,19.5c0,0.1,0,0.1,0,0.2v92.3c0,0.6,0.4,1,1,1h9c0.6,0,1-0.4,1-1V24.1C-36.5,24-36.5,23.9-36.5,23.9z M-39.5,114.6h-5v-85h5V114.6z",
//           width: 10,
//           offsetCenter: [0, "-10%"],
//           length: "75%",
//           itemStyle: {
//             color: "#f00",
//             shadowColor: "rgba(255, 0, 0)",
//             shadowBlur: 5,
//             shadowOffsetY: 3,
//           },
//         },
//         title: {
//           color: "#fff",
//           fontSize: 12,
//           fontWeight: 800,
//           fontFamily: "Arial",
//           offsetCenter: [0, "-50%"],
//         },
//         data: [
//           {
//             value: 0.6,
//             name: "1/min x 1000",
//           },
//         ],
//         detail: {
//           show: false,
//         },
//       },
//       {
//         name: "gauge 3",
//         type: "gauge",
//         min: 0,
//         max: 8,
//         z: 10,
//         splitNumber: 8,
//         radius: "50%",
//         axisLine: {
//           lineStyle: {
//             width: 14,
//             color: [[1, "#000"]],
//           },
//         },
//         splitLine: {
//           show: false,
//         },
//         axisTick: {
//           show: false,
//         },
//         axisLabel: {
//           show: false,
//         },
//         anchor: {},
//         pointer: {
//           show: false,
//         },
//         title: {
//           show: false,
//         },
//         detail: {
//           offsetCenter: ["40%", "40%"],
//           formatter: "{a|{value}}{b|km/h}",
//           rich: {
//             a: {
//               fontSize: 60,
//               fontWeight: 800,
//               fontFamily: "Arial",
//               color: "#fff",
//               align: "center",
//               padding: [0, 5, 0, 0],
//             },
//             b: {
//               fontSize: 14,
//               fontWeight: 800,
//               fontFamily: "Arial",
//               color: "#fff",
//               rotate: 30,
//               padding: [0, 0, 20, 0],
//             },
//           },
//         },
//         // value is speed
//         data: [
//           {
//             value: 0,
//             name: "",
//           },
//         ],
//       },
//       // right
//       {
//         name: "gauge 4",
//         type: "gauge",
//         min: 0,
//         max: 8,
//         startAngle: 135,
//         endAngle: -150,
//         splitNumber: 8,
//         radius: "35%",
//         center: ["79%", "55%"],
//         axisLine: {
//           lineStyle: {
//             color: [[1, "#AE96A6"]],
//           },
//         },
//         splitLine: {
//           show: false,
//         },
//         axisTick: {
//           show: false,
//         },
//         axisLabel: {
//           show: false,
//         },
//         anchor: {},
//         pointer: {
//           show: false,
//         },
//         title: {},
//         detail: {
//           offsetCenter: ["-15%", 0],
//           formatter: [
//             "{a|                  00:00}",
//             "{a|行驶时间       0:00}{b| h}",
//             "{a|行驶距离        0.0}{b| km}",
//             "{a|平均耗能        ---}{b| 1/100km}",
//             "{a|平均速度        ---}{b| km/h}",
//           ].join("\n"),
//           rich: {
//             a: {
//               fontSize: 14,
//               fontWeight: 800,
//               fontFamily: "Arial",
//               lineHeight: 22,
//               color: "#fff",
//               align: "left",
//             },
//             b: {
//               fontWeight: 600,
//               fontFamily: "Arial",
//               lineHeight: 22,
//               color: "#fff",
//               align: "left",
//             },
//           },
//         },
//         progress: {
//           show: true,
//           width: 3,
//           itemStyle: {
//             color: "#fff",
//           },
//         },
//         data: [
//           {
//             value: 250,
//             name: "",
//           },
//         ],
//       },
//       {
//         name: "gauge 5",
//         type: "gauge",
//         min: 0,
//         max: 1,
//         startAngle: 125,
//         endAngle: 55,
//         splitNumber: 2,
//         radius: "34%",
//         center: ["79%", "55.3%"],
//         axisLine: {
//           lineStyle: {
//             width: 9,
//             color: [
//               [0.15, "#f00"],
//               [1, "rgba(255, 0, 0, 0)"],
//             ],
//           },
//         },
//         splitLine: {
//           distance: -14,
//           length: 16,
//           lineStyle: {
//             color: "#fff",
//             width: 4,
//           },
//         },
//         axisTick: {
//           distance: -14,
//           length: 10,
//           lineStyle: {
//             color: "#fff",
//             width: 2,
//           },
//         },
//         axisLabel: {
//           distance: 12,
//           fontSize: 18,
//           fontWeight: 800,
//           fontFamily: "Arial",
//           color: "#fff",
//           formatter: function (value) {
//             if (value === 0.5) {
//               return "2/4";
//             }
//             if (value === 1) {
//               return "4/4";
//             }
//             return value;
//           },
//         },
//         progress: {
//           show: true,
//           width: 5,
//           itemStyle: {
//             color: "#fff",
//           },
//         },
//         anchor: {
//           show: true,
//           itemStyle: {},
//           offsetCenter: ["-22%", "-57%"],
//           size: 18,
//           icon: "path://M1.11979167,1.11111112 C1.11979167,0.497461393 1.61725306,0 2.23090279,0 L12.2309028,0 C12.8445525,1.43824153e-08 13.3420139,0.497461403 13.3420139,1.11111112 L13.3420139,10 L15.5642361,10 C16.7915356,10 17.7864583,10.9949228 17.7864583,12.2222222 L17.7864583,16.6666667 C17.7865523,17.28025 18.2839861,17.7776077 18.8975694,17.7776077 C19.5111527,17.7776077 20.0085866,17.28025 20.0086805,16.6666667 L20.0086805,8.88888888 L17.7864583,8.88888888 C17.1728086,8.88888888 16.6753472,8.3914275 16.6753472,7.77777779 L16.6753472,3.79333333 L15.6197917,2.73777777 C15.1859413,2.30392741 15.1859413,1.60051702 15.6197917,1.16666667 L15.6197917,1.16666667 C16.053642,0.732816318 16.7570524,0.732816318 17.1909028,1.16666667 L21.9053472,5.88111112 C22.1140468,6.08922811 22.2312072,6.37193273 22.2309028,6.66666667 L22.2309028,16.6666667 C22.2309028,18.5076158 20.7385186,20 18.8975695,20 C17.0566203,20 15.5642361,18.5076158 15.5642361,16.6666667 L15.5642361,12.2222222 L13.3420139,12.2222222 L13.3420139,17.7777778 L13.3420139,17.7777778 C13.9556636,17.7777778 14.453125,18.2752392 14.453125,18.8888889 L14.453125,18.8888889 C14.453125,19.5025386 13.9556636,20 13.3420139,20 L1.11979165,20 C0.506141934,20 0.00868054688,19.5025386 0.00868054687,18.8888889 L0.00868054687,18.8888889 C0.00868054688,18.2752392 0.506141934,17.7777778 1.11979165,17.7777778 L1.11979167,17.7777778 L1.11979167,1.11111112 Z M3.34201388,2.22222221 L3.34201388,8.88888888 L11.1197917,8.88888888 L11.1197917,2.22222221 L3.34201388,2.22222221 Z",
//         },
//         pointer: {
//           show: false,
//         },
//         title: {},
//         detail: {
//           offsetCenter: ["10%", "-56%"],
//           formatter: "{a|831}{b| km}",
//           rich: {
//             a: {
//               fontSize: 15,
//               fontWeight: 800,
//               fontFamily: "Arial",
//               color: "#fff",
//             },
//             b: {
//               fontWeight: 600,
//               fontFamily: "Arial",
//               color: "#fff",
//             },
//           },
//         },
//         data: [
//           {
//             value: 0.85,
//             name: "",
//           },
//         ],
//       },
//       {
//         name: "gauge 6",
//         type: "gauge",
//         min: -120,
//         max: -60,
//         startAngle: 230,
//         endAngle: 310,
//         clockwise: false,
//         splitNumber: 2,
//         radius: "35%",
//         center: ["79%", "55%"],
//         axisLine: {
//           lineStyle: {
//             color: [
//               [1, "#AE96A6"],
//               [1.1, "#f00"],
//             ],
//           },
//         },
//         splitLine: {
//           distance: -8,
//           length: 12,
//           lineStyle: {
//             color: "#fff",
//             width: 4,
//           },
//         },
//         axisTick: {
//           splitNumber: 3,
//           length: 8,
//           distance: -8,
//           lineStyle: {
//             color: "#fff",
//             width: 2,
//           },
//         },
//         axisLabel: {
//           distance: 14,
//           fontSize: 18,
//           fontWeight: 800,
//           fontFamily: "Arial",
//           color: "#fff",
//           formatter: function (value) {
//             return -value;
//           },
//         },
//         anchor: {
//           show: true,
//           itemStyle: {},
//           offsetCenter: [0, "55%"],
//           size: 20,
//           icon: "path://M-34.1-1.1L-34.1-1.1c0-0.3-0.3-0.6-0.6-0.6h-3.6v-1.5c0-0.5-0.2-0.9-0.6-1.1s-0.9-0.2-1.3,0c-0.4,0.2-0.6,0.7-0.6,1.1V7.9c0,0,0,0.1,0,0.1c-0.8,0.5-1.2,1.5-0.9,2.5c0.3,0.9,1.1,1.6,2.1,1.6c1,0,1.8-0.6,2.1-1.5c0.3-0.9,0-1.9-0.8-2.5V6.3h3.5c0.4,0,0.7-0.3,0.7-0.7l0,0c0-0.4-0.3-0.7-0.7-0.7h-3.5V2.9h3.5c0.4,0,0.7-0.3,0.7-0.7l0,0c0-0.4-0.3-0.7-0.7-0.7h-3.5v-2.1h3.6C-34.4-0.5-34.1-0.8-34.1-1.1z M-44.9,11.6c-0.7,0-1.4-0.2-2-0.6c-0.4-0.3-0.9-0.4-1.4-0.4c-0.4,0-0.9,0.2-1.2,0.4c-0.4,0.2-1.4-0.9-0.9-1.3c0.6-0.4,1.3-0.6,2-0.7c0.8,0,1.5,0.2,2.2,0.5c0.4,0.3,0.9,0.4,1.3,0.4c0.6,0,1.1-0.2,1.5-0.6s1.6,0.7,0.9,1.3S-44,11.6-44.9,11.6L-44.9,11.6z M-34.3,11.6c-0.7,0-1.4-0.3-2-0.7c-0.6-0.4,0.5-1.6,0.9-1.3s0.8,0.4,1.2,0.4c0.5,0,1-0.1,1.4-0.4c0.6-0.3,1.3-0.5,2-0.6h0c0.9,0,1.7,0.3,2.4,0.9c0.7,0.5-0.5,1.6-0.9,1.3c-0.4-0.3-1-0.6-1.5-0.6h0c-0.5,0-0.9,0.2-1.3,0.4c-0.6,0.3-1.3,0.5-2,0.6H-34.3z M-33.5,16.3c-0.7,0-1.4-0.3-1.9-0.8c-0.4-0.3-0.6-0.5-1-0.5c-0.4,0-0.7,0.2-1,0.4c-0.6,0.5-1.3,0.7-2,0.7c-0.7,0-1.4-0.3-1.9-0.8c-0.2-0.3-0.6-0.4-0.9-0.4c-0.4,0-0.7,0.1-1.1,0.5c-0.6,0.5-1.3,0.7-2.1,0.7c-0.7-0.1-1.4-0.4-1.9-0.9c-0.4-0.3-0.6-0.5-1-0.5c-0.3,0-0.6,0.2-0.9,0.4s-1.6-0.7-1.1-1.2c0.5-0.5,1.2-0.8,1.9-0.9c1-0.1,1.6,0.4,2.1,0.8c0.3,0.3,0.6,0.5,1,0.5c0.4,0,0.6-0.1,1-0.4c0.6-0.5,1.4-0.8,2.1-0.8c0.7,0,1.4,0.3,1.9,0.8c0.2,0.2,0.6,0.4,0.9,0.4c0.4,0,0.6-0.1,1-0.4c0.6-0.5,1.3-0.7,2-0.7c0.8,0,1.5,0.3,2,0.9c0.4,0.3,0.6,0.4,0.9,0.4c0.3,0,0.7-0.2,1.1-0.5c0.5-0.4,1.2-0.9,2.3-0.8c0.7,0,1.4,0.3,1.9,0.7c0.5,0.4-0.7,1.5-1,1.3s-0.6-0.4-1-0.4c-0.4,0-0.7,0.2-1.2,0.5C-32,15.9-32.7,16.2-33.5,16.3L-33.5,16.3z",
//         },
//         pointer: {
//           icon: "path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z",
//           width: 15,
//           length: "4",
//           offsetCenter: [0, "-90%"],
//           itemStyle: {
//             color: "#f00",
//           },
//         },
//         title: {},
//         detail: {
//           show: false,
//         },
//         data: [
//           {
//             value: -120,
//             name: "",
//           },
//         ],
//       },
//     ],
//   };
// };
export const getGaugeOption = ({
  value = 20,
  min = 0,
  max = 100,
  splitNumber = 2,
  unit = "°C",
}) => {
  const data = [
    {
      value,
    },
  ];
  return {
    series: [
      {
        type: "gauge",
        center: ["50%", "60%"],
        startAngle: 200,
        endAngle: -20,
        min,
        max,
        splitNumber,
        itemStyle: {
          color: "#FFAB91",
        },
        progress: {
          show: true,
          width: 30,
        },

        pointer: {
          // show: false,
          itemStyle: {
            color: "auto",
          },
        },
        axisLine: {
          lineStyle: {
            width: 30,
            color: [
              [0.3, "#67e0e3"],
              [0.7, "#37a2da"],
              [1, "#fd666d"],
            ],
          },
        },
        axisTick: {
          distance: -45,
          splitNumber: 5,
          lineStyle: {
            width: 2,
            color: "#999",
          },
        },
        splitLine: {
          distance: -52,
          length: 14,
          lineStyle: {
            width: 3,
            color: "#999",
          },
        },
        axisLabel: {
          distance: -20,
          color: "#999",
          fontSize: 20,
        },
        anchor: {
          show: false,
        },
        title: {
          show: false,
        },
        detail: {
          valueAnimation: true,
          width: "60%",
          lineHeight: 40,
          height: "15%",
          borderRadius: 8,
          offsetCenter: [0, "-15%"],
          fontSize: 60,
          fontWeight: "bolder",
          formatter: `{value} ${unit}`,
          color: "auto",
        },
        data,
      },
      {
        type: "gauge",
        center: ["50%", "60%"],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 60,
        itemStyle: {
          color: "#FD7347",
        },
        progress: {
          show: true,
          width: 8,
        },
        pointer: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        detail: {
          show: false,
        },
        data,
      },
    ],
  };
};

export const getNestGaugeOption = ({
  data = [
    {
      name: "Perfect",
      value: 20,
    },
    {
      name: "Good",
      value: 40,
    },
    {
      name: "Commonly",
      value: 60,
    },
  ],
}) => {
  return {
    series: [
      {
        type: "gauge",
        startAngle: 90,
        endAngle: -270,
        pointer: {
          show: false,
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            borderWidth: 1,
            borderColor: "#464646",
          },
        },
        axisLine: {
          lineStyle: {
            width: 40,
          },
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 10,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
          distance: 50,
        },
        data: data.map((item, idx) =>
          Object.assign(item, {
            title: {
              offsetCenter: ["0%", `${-30 + 30 * idx}%`],
            },
            detail: {
              offsetCenter: ["0%", `${-20 + 30 * idx}%`],
            },
          })
        ),
        title: {
          fontSize: 14,
        },
        detail: {
          width: 50,
          height: 14,
          fontSize: 14,
          color: "auto",
          borderColor: "auto",
          borderRadius: 20,
          borderWidth: 1,
          formatter: "{value}%",
        },
      },
    ],
  };
};

export const getTemperatureOption = (chart) => {
  setInterval(() => {
    const random = (Math.random() * 60).toFixed(2) - 0;
    option.series[0].data[0].value = random;
    option.series[1].data[0].value = random;
    chart.render(option, true);
  }, 2000);
  return {
    series: [
      {
        type: "gauge",
        center: ["50%", "60%"],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 60,
        splitNumber: 12,
        itemStyle: {
          color: "#FFAB91",
        },
        progress: {
          show: true,
          width: 30,
        },

        pointer: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            width: 30,
          },
        },
        axisTick: {
          distance: -45,
          splitNumber: 5,
          lineStyle: {
            width: 2,
            color: "#999",
          },
        },
        splitLine: {
          distance: -52,
          length: 14,
          lineStyle: {
            width: 3,
            color: "#999",
          },
        },
        axisLabel: {
          distance: -20,
          color: "#999",
          fontSize: 20,
        },
        anchor: {
          show: false,
        },
        title: {
          show: false,
        },
        detail: {
          valueAnimation: true,
          width: "60%",
          lineHeight: 40,
          height: "15%",
          borderRadius: 8,
          offsetCenter: [0, "-15%"],
          fontSize: 60,
          fontWeight: "bolder",
          formatter: "{value} °C",
          color: "auto",
        },
        data: [
          {
            value: 20,
          },
        ],
      },

      {
        type: "gauge",
        center: ["50%", "60%"],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 60,
        itemStyle: {
          color: "#FD7347",
        },
        progress: {
          show: true,
          width: 8,
        },

        pointer: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        detail: {
          show: false,
        },
        data: [
          {
            value: 20,
          },
        ],
      },
    ],
  };
};

export const getMarkArea = ({
  itemStyle = {
    color: "rgba(255, 173, 177, 0.4)",
  },
  data = [
    [
      {
        name: "早高峰",
        xAxis: "07:30",
      },
      {
        xAxis: "10:00",
      },
    ],
    [
      {
        name: "晚高峰",
        xAxis: "17:30",
      },
      {
        xAxis: "21:15",
      },
    ],
  ],
}) => {
  return {
    itemStyle,
    data,
  };
};

export const getPictorialBarOption = () => {
  // Generate data
  const category = [];
  const lineData = [];
  const barData = [];
  let dottedBase = +new Date();
  for (let i = 0; i < 20; i++) {
    const date = new Date((dottedBase += 3600 * 24 * 1000));
    category.push(
      [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("-")
    );
    const b = Math.random() * 200;
    const d = Math.random() * 200;
    barData.push(b);
    lineData.push(d + b);
  }

  return {
    backgroundColor: "#0f375f",
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: ["line", "bar"],
      textStyle: {
        color: "#ccc",
      },
    },
    xAxis: {
      data: category,
      axisLine: {
        lineStyle: {
          color: "#ccc",
        },
      },
    },
    yAxis: {
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          color: "#ccc",
        },
      },
    },
    series: [
      {
        name: "line",
        type: "line",
        smooth: true,
        showAllSymbol: true,
        symbol: "emptyCircle",
        symbolSize: 15,
        data: lineData,
      },
      {
        name: "bar",
        type: "bar",
        barWidth: 10,
        itemStyle: {
          barBorderRadius: 5,
          color: Chart.linearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#14c8d4" },
            { offset: 1, color: "#43eec6" },
          ]),
        },
        data: barData,
      },
      {
        name: "line",
        type: "bar",
        barGap: "-100%",
        barWidth: 10,
        itemStyle: {
          color: Chart.linearGradient(0, 0, 0, 1, [
            { offset: 0, color: "rgba(20,200,212,0.5)" },
            { offset: 0.2, color: "rgba(20,200,212,0.2)" },
            { offset: 1, color: "rgba(20,200,212,0)" },
          ]),
        },
        z: -12,
        data: lineData,
      },
      {
        name: "dotted",
        type: "pictorialBar",
        symbol: "rect",
        itemStyle: {
          color: "#0f375f",
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: lineData,
      },
    ],
  };
};

export const getRadarOption = () => {
  const getSerie = (
    data = [
      {
        value: [60, 73, 85, 40],
        name: "某软件",
      },
    ]
  ) => {
    return {
      type: "radar",
      tooltip: {
        trigger: "item",
      },
      areaStyle: {},
      data,
    };
  };

  const getRadar = (
    indicator = [
      { text: "品牌", max: 100 },
      { text: "内容", max: 100 },
      { text: "可用性", max: 100 },
      { text: "功能", max: 100 },
    ],
    center = ["25%", "40%"],
    radius = 80
  ) => {
    return {
      indicator,
      center,
      radius,
    };
  };

  return {
    title: {
      text: "多雷达图",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      left: "center",
      data: ["某软件", "某主食手机", "某水果手机", "降水量", "蒸发量"],
    },
    radar: [
      {
        indicator: [
          { text: "品牌", max: 100 },
          { text: "内容", max: 100 },
          { text: "可用性", max: 100 },
          { text: "功能", max: 100 },
        ],
        center: ["25%", "40%"],
        radius: 80,
      },
      {
        indicator: [
          { text: "外观", max: 100 },
          { text: "拍照", max: 100 },
          { text: "系统", max: 100 },
          { text: "性能", max: 100 },
          { text: "屏幕", max: 100 },
        ],
        radius: 80,
        center: ["50%", "60%"],
      },
      {
        indicator: (function () {
          var res = [];
          for (var i = 1; i <= 12; i++) {
            res.push({ text: i + "月", max: 100 });
          }
          return res;
        })(),
        center: ["75%", "40%"],
        radius: 80,
      },
    ],
    series: [
      {
        type: "radar",
        tooltip: {
          trigger: "item",
        },
        areaStyle: {},
        data: [
          {
            value: [60, 73, 85, 40],
            name: "某软件",
          },
        ],
      },
      {
        type: "radar",
        radarIndex: 1,
        areaStyle: {},
        data: [
          {
            value: [85, 90, 90, 95, 95],
            name: "某主食手机",
          },
          {
            value: [95, 80, 95, 90, 93],
            name: "某水果手机",
          },
        ],
      },
      {
        type: "radar",
        radarIndex: 2,
        areaStyle: {},
        data: [
          {
            name: "降水量",
            value: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3,
            ],
          },
          {
            name: "蒸发量",
            value: [
              2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3,
            ],
          },
        ],
      },
    ],
  };
};

export const getTimelineOption = ({ categories, series }) => {
  return {
    tooltip: {
      position: "top",
    },
    grid: {
      show: false,
      top: 40,
      left: 220,
      right: 40,
      bottom: 10,
    },
    dataZoom: [
      {
        type: "slider",
        singleAxisIndex: series.map((_, idx) => idx),
        start: 0,
        end: 30,
        top: 0,
        height: 16,
        labelFormatter: "",
        showDataShadow: false,
        filterMode: "weakFilter",
        fillerColor: "rgba(85,145,244,0.16)",
        borderColor: "#262E3C",
      },
      {
        type: "inside",
        filterMode: "weakFilter",
        start: 0,
        end: 30,
      },
    ],
    title: series.map(({ name }, idx) => ({
      textBaseline: "middle",
      top: ((idx + 0.5) * 100) / 7 + "%",
      text: name,
    })),
    singleAxis: series.map((_, idx) => ({
      type: "category",
      data: categories,
      top: (idx * 100) / 7 + 5 + "%",
      left: 150,
      height: 100 / 7 - 10 + "%",
      boundaryGap: false,
      axisLabel: {
        interval: 2,
      },
    })),
    series: series.map((serie, idx) =>
      Object.assign(serie, {
        singleAxisIndex: idx,
        coordinateSystem: "singleAxis",
        type: "scatter",
        symbolSize: (val) => val[1] * 4,
      })
    ),
  };
};

export const getRaceOption = ({ categories, series }) => {
  var _valOnRoundRadian = categories.length;
  var _radianStep = Math.PI / 45;
  var _barWidthValue = 0.4;
  var _valOnRadiusStep = 4;
  // angleAxis.startAngle is 90 by default.
  var _startRadian = Math.PI / 2;

  var _colors = [
    { fill: "#5470c6", text: "#2747a5" },
    { fill: "#91cc75", text: "#447f27" },
    { fill: "#fac858", text: "#a0761c" },
  ];

  function getMaxRadius() {
    var radius = 0;
    var datasource = series.map((item) => item.value);
    for (let i = 0; i < datasource.length; i++) {
      var dataItem = datasource[i];
      radius = Math.max(radius, getSpiralValueOnRadius(i, dataItem));
    }
    return Math.ceil(radius * 1.2);
  }

  function getSpiralValueOnRadius(valOnStartRadius, valOnEndAngle) {
    return (
      valOnStartRadius + _valOnRadiusStep * (valOnEndAngle / _valOnRoundRadian)
    );
  }
  function getSpiralRadius(startRadius, endRadian, radiusStep) {
    return (
      startRadius + radiusStep * ((_startRadian - endRadian) / (Math.PI * 2))
    );
  }
  function renderItem(params, api) {
    var children = [];
    var dataIdx = params.dataIndex;
    addShapes(
      params,
      api,
      children,
      api.value(0),
      api.value(1),
      _colors[dataIdx]
    );

    return {
      type: "group",
      children,
    };
  }
  function addShapes(
    params,
    api,
    children,
    valOnStartRadius,
    valOnEndRadian,
    color
  ) {
    var coords = api.coord([valOnStartRadius, valOnEndRadian]);
    var startRadius = coords[2];
    var endRadian = coords[3];
    var widthRadius = api.coord([_barWidthValue, 0])[2];
    addPolygon(params, children, widthRadius, startRadius, endRadian, color);
    addLabel(params, children, widthRadius, startRadius, endRadian, color);
  }

  function addPolygon(
    params,
    children,
    widthRadius,
    startRadius,
    endRadian,
    color
  ) {
    children.push({
      type: "polygon",
      shape: {
        points: makeShapePoints(params, widthRadius, startRadius, endRadian),
      },
      extra: {
        widthRadius: widthRadius,
        startRadius: startRadius,
        endRadian: endRadian,
        transition: ["widthRadius", "startRadius", "endRadian"],
      },
      style: {
        fill: color.fill,
      },
      during: function (apiDuring) {
        apiDuring.setShape(
          "points",
          makeShapePoints(
            params,
            apiDuring.getExtra("widthRadius"),
            apiDuring.getExtra("startRadius"),
            apiDuring.getExtra("endRadian")
          )
        );
      },
    });
  }

  function makeShapePoints(params, widthRadius, startRadius, endRadian) {
    var points = [];
    var radiusStep = getRadiusStepByWidth(widthRadius);
    // angleAxis.clockwise is true by default. So when rotate clickwisely, radian decreases.
    for (
      var iRadian = _startRadian, end = endRadian - _radianStep;
      iRadian > end;
      iRadian -= _radianStep
    ) {
      iRadian < endRadian && (iRadian = endRadian);
      var iRadius = getSpiralRadius(
        startRadius - widthRadius,
        iRadian,
        radiusStep
      );
      points.push(convertToPolarPoint(params, iRadius, iRadian));
    }
    for (
      var iRadian = endRadian;
      iRadian < _startRadian + _radianStep;
      iRadian += _radianStep
    ) {
      iRadian > _startRadian && (iRadian = _startRadian);
      var iRadius = getSpiralRadius(
        startRadius + widthRadius,
        iRadian,
        radiusStep
      );
      points.push(convertToPolarPoint(params, iRadius, iRadian));
    }
    return points;
  }

  function getRadiusStepByWidth(widthRadius) {
    return (widthRadius / _barWidthValue) * _valOnRadiusStep;
  }

  function addLabel(
    params,
    children,
    widthRadius,
    startRadius,
    endRadian,
    color
  ) {
    var point = makeLabelPosition(params, widthRadius, startRadius, endRadian);
    children.push({
      type: "text",
      x: point[0],
      y: point[1],
      transition: [],
      extra: {
        startRadius: startRadius,
        endRadian: endRadian,
        widthRadius: widthRadius,
        transition: ["startRadius", "endRadian", "widthRadius"],
      },
      style: {
        text: makeText(endRadian),
        fill: color.text,
        stroke: "#fff",
        lineWidth: 3,
        fontSize: 16,
        align: "center",
        verticalAlign: "middle",
        rich: {
          round: { fontSize: 24 },
          percent: { fontSize: 18 },
        },
      },
      z2: 50,
      during: function (apiDuring) {
        var endRadian = apiDuring.getExtra("endRadian");
        var point = makeLabelPosition(
          params,
          apiDuring.getExtra("widthRadius"),
          apiDuring.getExtra("startRadius"),
          endRadian
        );
        apiDuring.setTransform("x", point[0]).setTransform("y", point[1]);
        apiDuring.setStyle("text", makeText(endRadian));
      },
    });

    function makeText(endRadian) {
      var radian = _startRadian - endRadian;
      var PI2 = Math.PI * 2;
      var round = Math.floor(radian / PI2);
      var percent = (((radian / PI2) % 1) * 100).toFixed(1) + "%";
      return "Round {round|" + round + "}\n{percent|" + percent + "}";
    }
  }

  function makeLabelPosition(params, widthRadius, startRadius, endRadian) {
    var radiusStep = getRadiusStepByWidth(widthRadius);
    var iRadius = getSpiralRadius(startRadius, endRadian, radiusStep);
    return convertToPolarPoint(params, iRadius, endRadian - 10 / iRadius);
  }

  function convertToPolarPoint(renderItemParams, radius, radian) {
    return [
      Math.cos(radian) * radius + renderItemParams.coordSys.cx,
      -Math.sin(radian) * radius + renderItemParams.coordSys.cy,
    ];
  }

  return {
    animationDuration: 5000,
    animationDurationUpdate: 7000,
    animationEasingUpdate: "linear",
    dataset: {
      source: series.map((item, idx) => [idx, item.value]),
    },
    tooltip: {},
    angleAxis: {
      type: "value",
      splitArea: { show: true },
      axisLabel: {
        formatter: function (val) {
          return categories[val];
        },
        color: "rgba(0,0,0,0.2)",
      },
      axisLine: { lineStyle: { color: "rgba(0,0,0,0.2)" } },
      min: 0,
      max: categories.length,
    },
    radiusAxis: {
      type: "value",
      interval: 1,
      splitLine: { show: false },
      axisLabel: {
        color: "rgba(0,0,0,0.6)",
        formatter: function (value) {
          return categories[value] || "";
        },
      },
      axisTick: { show: false },
      axisLine: { lineStyle: { color: "rgba(0,0,0,0.2)" } },
      min: 0,
      max: getMaxRadius(), // 'dataMax'
    },
    polar: {},
    series: [
      {
        type: "custom",
        coordinateSystem: "polar",
        renderItem,
      },
    ],
  };
};

export const getTreemapOption = ({
  title = "",
  data,
  tooltip = {
    formatter(info) {
      var value = info.value;
      var treePathInfo = info.treePathInfo;
      var treePath = [];

      for (var i = 1; i < treePathInfo.length; i++) {
        treePath.push(treePathInfo[i].name);
      }

      return [
        '<div class="tooltip-title">' +
        // echarts.format.encodeHTML(treePath.join("/")) +
        "</div>",
        // "Disk Usage: " + echarts.format.addCommas(value) + " KB",
      ].join("");
    },
  },
}) => {
  return {
    title: {
      text: title,
      left: "center",
    },

    tooltip,

    series: [
      {
        name: title,
        type: "treemap",
        // visibleMin: 300,
        label: {
          show: true,
          formatter: "{b}",
        },
        upperLabel: {
          show: true,
          height: 30,
        },
        itemStyle: {
          borderColor: "#fff",
        },
        levels: [
          {
            itemStyle: {
              borderColor: "#777",
              borderWidth: 0,
              gapWidth: 1,
            },
            upperLabel: {
              show: false,
            },
          },
          {
            itemStyle: {
              borderColor: "#555",
              borderWidth: 5,
              gapWidth: 1,
            },
            emphasis: {
              itemStyle: {
                borderColor: "#ddd",
              },
            },
          },
          {
            colorSaturation: [0.35, 0.5],
            itemStyle: {
              borderWidth: 5,
              gapWidth: 1,
              borderColorSaturation: 0.6,
            },
          },
        ],
        data,
      },
    ],
  };
};

export const getSunburstOption = ({ title, data = [] } = {}) => {
  var colors = ["#FFAE57", "#FF7853", "#EA5151", "#CC3F57", "#9A2555"];
  var bgColor = "#2E2733";

  var itemStyle = {
    star5: {
      color: colors[0],
    },
    star4: {
      color: colors[1],
    },
    star3: {
      color: colors[2],
    },
    star2: {
      color: colors[3],
    },
  };

  for (var j = 0; j < data.length; ++j) {
    var level1 = data[j].children;
    data[j].itemStyle = colors[j + 1];
    for (var i = 0; i < level1.length; ++i) {
      var block = level1[i].children;
      var bookScore = [];
      var bookScoreId;
      for (var star = 0; star < block.length; ++star) {
        var style = (function (name) {
          switch (name) {
            case "5☆":
              bookScoreId = 0;
              return itemStyle.star5;
            case "4☆":
              bookScoreId = 1;
              return itemStyle.star4;
            case "3☆":
              bookScoreId = 2;
              return itemStyle.star3;
            case "2☆":
              bookScoreId = 3;
              return itemStyle.star2;
          }
        })(block[star].name);

        block[star].label = {
          color: style.color,
          downplay: {
            opacity: 0.5,
          },
        };

        if (block[star].children) {
          style = {
            opacity: 1,
            color: style.color,
          };
          block[star].children.forEach(function (book) {
            book.value = 1;
            book.itemStyle = style;

            book.label = {
              color: style.color,
            };

            var value = 1;
            if (bookScoreId === 0 || bookScoreId === 3) {
              value = 5;
            }

            if (bookScore[bookScoreId]) {
              bookScore[bookScoreId].value += value;
            } else {
              bookScore[bookScoreId] = {
                color: colors[bookScoreId],
                value: value,
              };
            }
          });
        }
      }

      level1[i].itemStyle = {
        color: data[j].itemStyle.color,
      };
    }
  }
  return {
    backgroundColor: bgColor,
    color: colors,
    series: [
      {
        type: "sunburst",
        center: ["50%", "48%"],
        data: data,
        sort(a, b) {
          if (a.depth === 1) {
            return b.getValue() - a.getValue();
          } else {
            return a.dataIndex - b.dataIndex;
          }
        },
        label: {
          rotate: "radial",
          color: bgColor,
        },
        itemStyle: {
          borderColor: bgColor,
          borderWidth: 2,
        },
        levels: [
          {},
          {
            r0: 0,
            r: 40,
            label: {
              rotate: 0,
            },
          },
          {
            r0: 40,
            r: 105,
          },
          {
            r0: 115,
            r: 140,
            itemStyle: {
              shadowBlur: 2,
              shadowColor: colors[2],
              color: "transparent",
            },
            label: {
              rotate: "tangential",
              fontSize: 10,
              color: colors[0],
            },
          },
          {
            r0: 140,
            r: 145,
            itemStyle: {
              shadowBlur: 80,
              shadowColor: colors[0],
            },
            label: {
              position: "outside",
              textShadowBlur: 5,
              textShadowColor: "#333",
            },
            downplay: {
              label: {
                opacity: 0.5,
              },
            },
          },
        ],
      },
    ],
  };
};

export const getGanttOption = ({ title, data: _rawData }) => {
  var HEIGHT_RATIO = 0.6;
  var DIM_CATEGORY_INDEX = 0;
  var DIM_TIME_ARRIVAL = 1;
  var DIM_TIME_DEPARTURE = 2;
  var _cartesianXBounds = [];
  var _cartesianYBounds = [];

  function renderGanttItem(params, api) {
    var categoryIndex = api.value(DIM_CATEGORY_INDEX);
    var timeArrival = api.coord([api.value(DIM_TIME_ARRIVAL), categoryIndex]);
    var timeDeparture = api.coord([
      api.value(DIM_TIME_DEPARTURE),
      categoryIndex,
    ]);

    var coordSys = params.coordSys;
    _cartesianXBounds[0] = coordSys.x;
    _cartesianXBounds[1] = coordSys.x + coordSys.width;
    _cartesianYBounds[0] = coordSys.y;
    _cartesianYBounds[1] = coordSys.y + coordSys.height;

    var barLength = timeDeparture[0] - timeArrival[0];
    // Get the heigth corresponds to length 1 on y axis.
    var barHeight = api.size([0, 1])[1] * HEIGHT_RATIO;
    var x = timeArrival[0];
    var y = timeArrival[1] - barHeight;

    var flightNumber = api.value(3) + "";
    var flightNumberWidth = Chart.getTextRect(flightNumber).width;
    var text =
      barLength > flightNumberWidth + 40 && x + barLength >= 180
        ? flightNumber
        : "";

    var rectNormal = clipRectByRect(params, {
      x: x,
      y: y,
      width: barLength,
      height: barHeight,
    });
    var rectVIP = clipRectByRect(params, {
      x: x,
      y: y,
      width: barLength / 2,
      height: barHeight,
    });
    var rectText = clipRectByRect(params, {
      x: x,
      y: y,
      width: barLength,
      height: barHeight,
    });

    return {
      type: "group",
      children: [
        {
          type: "rect",
          ignore: !rectNormal,
          shape: rectNormal,
          style: api.style(),
        },
        {
          type: "rect",
          ignore: !rectVIP && !api.value(4),
          shape: rectVIP,
          style: api.style({ fill: "#ddb30b" }),
        },
        {
          type: "rect",
          ignore: !rectText,
          shape: rectText,
          style: api.style({
            fill: "transparent",
            stroke: "transparent",
            text: text,
            textFill: "#fff",
          }),
        },
      ],
    };
  }

  function renderAxisLabelItem(params, api) {
    var y = api.coord([0, api.value(0)])[1];
    if (y < params.coordSys.y + 5) {
      return;
    }
    return {
      type: "group",
      position: [10, y],
      children: [
        {
          type: "path",
          shape: {
            d: "M0,0 L0,-20 L30,-20 C42,-20 38,-1 50,-1 L70,-1 L70,0 Z",
            x: 0,
            y: -20,
            width: 90,
            height: 20,
            layout: "cover",
          },
          style: {
            fill: "#368c6c",
          },
        },
        {
          type: "text",
          style: {
            x: 24,
            y: -3,
            text: api.value(1),
            textVerticalAlign: "bottom",
            textAlign: "center",
            textFill: "#fff",
          },
        },
        {
          type: "text",
          style: {
            x: 75,
            y: -2,
            textVerticalAlign: "bottom",
            textAlign: "center",
            text: api.value(2),
            textFill: "#000",
          },
        },
      ],
    };
  }

  function clipRectByRect(params, rect) {
    return Chart.clipRectByRect(rect, {
      x: params.coordSys.x,
      y: params.coordSys.y,
      width: params.coordSys.width,
      height: params.coordSys.height,
    });
  }

  return {
    tooltip: {},
    animation: false,
    toolbox: {
      left: 20,
      top: 0,
      itemSize: 20,
      feature: {
        //   myDrag: {
        //     show: true,
        //     title: "Make bars\ndraggable",
        //     icon: "path://M990.55 380.08 q11.69 0 19.88 8.19 q7.02 7.01 7.02 18.71 l0 480.65 q-1.17 43.27 -29.83 71.93 q-28.65 28.65 -71.92 29.82 l-813.96 0 q-43.27 -1.17 -72.5 -30.41 q-28.07 -28.07 -29.24 -71.34 l0 -785.89 q1.17 -43.27 29.24 -72.5 q29.23 -29.24 72.5 -29.24 l522.76 0 q11.7 0 18.71 7.02 q8.19 8.18 8.19 18.71 q0 11.69 -7.6 19.29 q-7.6 7.61 -19.3 7.61 l-518.08 0 q-22.22 1.17 -37.42 16.37 q-15.2 15.2 -15.2 37.42 l0 775.37 q0 23.39 15.2 38.59 q15.2 15.2 37.42 15.2 l804.6 0 q22.22 0 37.43 -15.2 q15.2 -15.2 16.37 -38.59 l0 -474.81 q0 -11.7 7.02 -18.71 q8.18 -8.19 18.71 -8.19 l0 0 ZM493.52 723.91 l-170.74 -170.75 l509.89 -509.89 q23.39 -23.39 56.13 -21.05 q32.75 1.17 59.65 26.9 l47.94 47.95 q25.73 26.89 27.49 59.64 q1.75 32.75 -21.64 57.3 l-508.72 509.9 l0 0 ZM870.09 80.69 l-56.13 56.14 l94.72 95.9 l56.14 -57.31 q8.19 -9.35 8.19 -21.05 q-1.17 -12.86 -10.53 -22.22 l-47.95 -49.12 q-10.52 -9.35 -23.39 -9.35 q-11.69 -1.17 -21.05 7.01 l0 0 ZM867.75 272.49 l-93.56 -95.9 l-380.08 380.08 l94.73 94.73 l378.91 -378.91 l0 0 ZM322.78 553.16 l38.59 39.77 l-33.92 125.13 l125.14 -33.92 l38.59 38.6 l-191.79 52.62 q-5.85 1.17 -12.28 0 q-6.44 -1.17 -11.11 -5.84 q-4.68 -4.68 -5.85 -11.7 q-2.34 -5.85 0 -11.69 l52.63 -192.97 l0 0 Z",
        //     onclick: onDragSwitchClick,
        //   },
      },
    },
    title: {
      text: "Gantt of Airport Flight",
      left: "center",
    },
    dataZoom: [
      {
        type: "slider",
        xAxisIndex: 0,
        filterMode: "weakFilter",
        height: 20,
        bottom: 0,
        start: 0,
        end: 26,
        handleIcon:
          "path://M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
        handleSize: "80%",
        showDetail: false,
      },
      {
        type: "inside",
        id: "insideX",
        xAxisIndex: 0,
        filterMode: "weakFilter",
        start: 0,
        end: 26,
        zoomOnMouseWheel: false,
        moveOnMouseMove: true,
      },
      {
        type: "slider",
        yAxisIndex: 0,
        zoomLock: true,
        width: 10,
        right: 10,
        top: 70,
        bottom: 20,
        start: 95,
        end: 100,
        handleSize: 0,
        showDetail: false,
      },
      {
        type: "inside",
        id: "insideY",
        yAxisIndex: 0,
        start: 95,
        end: 100,
        zoomOnMouseWheel: false,
        moveOnMouseMove: true,
        moveOnMouseWheel: true,
      },
    ],
    grid: {
      show: true,
      top: 70,
      bottom: 20,
      left: 100,
      right: 20,
      backgroundColor: "#fff",
      borderWidth: 0,
    },
    xAxis: {
      type: "category",
      position: "top",
      splitLine: {
        lineStyle: {
          color: ["#E9EDFF"],
        },
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        lineStyle: {
          color: "#929ABA",
        },
      },
      axisLabel: {
        color: "#929ABA",
        inside: false,
        align: "center",
      },
    },
    yAxis: {
      axisTick: { show: false },
      splitLine: { show: false },
      axisLine: { show: false },
      axisLabel: { show: false },
      min: 0,
      max: _rawData.parkingApron.data.length,
    },
    series: [
      {
        id: "flightData",
        type: "custom",
        renderItem: renderGanttItem,
        dimensions: _rawData.flight.dimensions,
        encode: {
          x: [DIM_TIME_ARRIVAL, DIM_TIME_DEPARTURE],
          y: DIM_CATEGORY_INDEX,
          tooltip: [DIM_CATEGORY_INDEX, DIM_TIME_ARRIVAL, DIM_TIME_DEPARTURE],
        },
        data: _rawData.flight.data,
      },
      {
        type: "custom",
        renderItem: renderAxisLabelItem,
        dimensions: _rawData.parkingApron.dimensions,
        encode: {
          x: -1, // Then this series will not controlled by x.
          y: 0,
        },
        data: _rawData.parkingApron.data.map(function (item, index) {
          return [index].concat(item);
        }),
      },
    ],
  };
};

export const getHeatmapOption = (xAxisData, yAxisData, tooltip, visualMap, data) => {
  const option = {
    animation: false,
    grid: {
      left: 100,
      top: '5%',
      right: 0,
      bottom: '15%'
    },
    tooltip,
    visualMap,
    xAxis: {
      type: 'category',
      data: xAxisData,
      axisLine: {
        show: false
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#94a6be',
          width: 2
        }
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: '#6b788d'
      },
      zlevel: 1,
      offset: 15
    },
    yAxis: {
      type: 'category',
      data: yAxisData,
      splitLine: {
        show: true,
        lineStyle: {
          color: '#94a6be',
          width: 2
        }
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#6b788d'
      },
      zlevel: 1,
      offset: 18
    },
    series: {
      type: 'heatmap',
      data: data
      // label: {
      //   show: true,
      //   color: 'white'
      // },
      // emphasis: {
      //   itemStyle: {
      //     shadowBlur: 10,
      //     shadowColor: 'white'
      //   }
      // }
    }
  }
  return option
}
