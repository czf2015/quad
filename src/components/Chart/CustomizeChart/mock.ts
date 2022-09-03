// prettier-ignore
let dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
// prettier-ignore
let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];

export const option = {
  title: {
    text: "特性示例：渐变色 阴影 点击缩放",
    subtext: "Feature Sample: Gradient Color, Shadow, Click Zoom",
  },
  // tooltip: {
  //   trigger: 'axis',
  //   axisPointer: {
  //     type: 'shadow'
  //   },
  //   formatter: function (params) {
  //     let tar;
  //     if (params[1].value !== '-') {
  //       tar = params[1];
  //     } else {
  //       tar = params[0];
  //     }
  //     return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
  //   }
  // },
  // legend: {
      // show: true,
      // top: 'bottom',
  //   data: ['Expenses', 'Income']
  // },
  // grid: {
  //   left: '3%',
  //   right: '4%',
  //   bottom: '3%',
  //   containLabel: true
  // },
  // xAxis: {
  //   type: 'category',
  //   data: (function () {
  //     let list = [];
  //     for (let i = 1; i <= 11; i++) {
  //       list.push('Nov ' + i);
  //     }
  //     return list;
  //   })()
  // },
  // yAxis: {
  //   type: 'value'
  // },
  // toolbox: {
  //   // y: 'bottom',
  //   feature: {
  //     magicType: {
  //       type: ['stack']
  //     },
  //     dataView: {},
  //     saveAsImage: {
  //       pixelRatio: 2
  //     }
  //   }
  // },
  xAxis: {
    data: dataAxis,
    axisLabel: {
      inside: true,
      color: "#fff",
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    z: 10,
  },
  yAxis: {
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: "#999",
    },
    // type: 'category',
    // inverse: true,
    // data: ['Sunny', 'Cloudy', 'Showers'],
    // axisLabel: {
    //   formatter: function (value) {
    //     return '{' + value + '| }\n{value|' + value + '}';
    //   },
    //   margin: 20,
    //   rich: {
    //     value: {
    //       lineHeight: 30,
    //       align: 'center'
    //     },
    //     Sunny: {
    //       height: 40,
    //       align: 'center',
    //       backgroundColor: {
    //         image: weatherIcons.Sunny
    //       }
    //     },
    //     Cloudy: {
    //       height: 40,
    //       align: 'center',
    //       backgroundColor: {
    //         image: weatherIcons.Cloudy
    //       }
    //     },
    //     Showers: {
    //       height: 40,
    //       align: 'center',
    //       backgroundColor: {
    //         image: weatherIcons.Showers
    //       }
    //     }
    //   }
    // }
  },
  dataZoom: [
    {
      type: "inside",
    },
  ],
  // polar: {
  //   radius: [30, "80%"],
  // },
  // radiusAxis: {
  //   max: 4,
  // },
  // angleAxis: {
  //   type: "category",
  //   data: ["a", "b", "c", "d"],
  //   startAngle: 75,
  // },
  // visualMap: {
  //   orient: 'horizontal',
  //   left: 'center',
  //   min: 10,
  //   max: 100,
  //   text: ['High Score', 'Low Score'],
  //   // Map the score column to color
  //   dimension: 0,
  //   inRange: {
  //     color: ['#65B581', '#FFCE34', '#FD665F']
  //   }
  // },
  series: [
    {
      type: 'bar',
      encode: {
        // Map the "amount" column to X axis.
        x: 'amount',
        // Map the "product" column to Y axis
        y: 'product'
      }
    },
    {
      type: "bar",
      showBackground: true,
      // coordinateSystem: "polar",
      // label: {
      //   show: true,
      //   position: "middle", // inside
      //   formatter: "{b}: {c}",
      // },
      // stack: 'Total',
      // silent: true
      // large: true, 
      // barGap: '-100%',
      // z: 10,
      itemStyle: {
        // borderColor: 'transparent',
        // color: 'transparent'
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "#83bff6" },
          { offset: 0.5, color: "#188df0" },
          { offset: 1, color: "#188df0" },
        ]),
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#2378f7" },
            { offset: 0.7, color: "#2378f7" },
            { offset: 1, color: "#83bff6" },
          ]),
        },
      },
      data: data,
    },
  ],
  animation: false
};
