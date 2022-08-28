const extract = (dimensions, layout = 'horizontal') => {
  const { field: category } = dimensions.find(item => layout == 'horizontal' ? item.axis == 'xAxis' : item.axis == 'yAxis')
  const { field: value } = dimensions.find(item => layout == 'horizontal' ? item.axis == 'yAxis' : item.axis == 'xAxis')
  const sorts = dimensions.filter(({ sort }) => sort == 1 || sort == -1)
  return { category, value, sorts }
}

const sort = (list = [], sorts = []) => {
  let result = list
  sorts.forEach(({ field, sort }) => {
    result = result.sort((prev, next) => sort * (prev[field] - next[field]))
  })
  return result
}

const aggregate = (sorted = [], { category, stack, name, value } = {}) => {
  const aggregated = []
  const indexs = {}
  sorted.forEach(record => {
    const key = `${record[category]}-${record[stack]}-${record[name]}`
    if (typeof indexs[key] == 'undefined') {
      aggregated.push(record)
      indexs[key] = aggregated.length - 1
    } else {
      aggregated[indexs[key]][value] += record[value]
    }
  })
  return aggregated
}

const unique = (raws = []) => [...new Set(raws)]

const getSeries = (aggregated = [], { type, name, stack, value, percentage = false } = {}) => {
  const series = []
  const seriesIndexs = {}
  aggregated.forEach(record => {
    const key = `${record[stack]}-${record[name]}`
    if (typeof seriesIndexs[key] == 'undefined') {
      series.push({
        type,
        name: record[name],
        stack: record[stack],
        data: [record[value]]
      })
      seriesIndexs[key] = series.length - 1
    } else {
      series[seriesIndexs[key]].data.push(record[value])
    }
  })
  return percentage ? series.map(serie => {
    const total = serie.data.reduce((prev, cur) => prev + cur, 0)
    serie.data = serie.data.map(num => num / total * 100)
    return serie
  }) : series
}

const getLegend = (series) => {
  const data = series.map(serie => serie.name)
  return {
    orient: "horizontal",
    bottom: 0,
    center: "center",
    itemWidth: 6,
    itemHeight: 6,
    textStyle: {
      color: "#727274",
      fontSize: 8,
    },
    data,
  }
}

const getAxis = ({ type = 'category', data = [] }) => {
  if (type == 'category') {
    return {
      type,
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
      data,
    }
  }

  if (type == 'value') {
    return {
      type,
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
    }
  }
}

const getAxisByLayout = (aggregated, { layout = 'horizontal', category }) => {
  const data = unique(aggregated.map(item => item[category]))

  if (layout == 'horizontal') {
    return {
      xAxis: getAxis({ type: 'category', data }),
      yAxis: getAxis({ type: 'value' })
    }
  }

  if (layout == 'vertical') {
    return {
      xAxis: getAxis({ type: 'value' }),
      yAxis: getAxis({ type: 'category', data }),
    }
  }

  return {

  }
}

const getTooltip = (percentage = false) => {
  return {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "cross", // 默认为直线，可选为：'line' | 'shadow'
    },
    formatter(params) {
      return `<div>${params.map(item => (`<div>${item.marker}<span>${item.name} </span><span>${item.seriesName}: </span><span>${item.data}${percentage ? '%' : ''}</span></div>`)).join('')}</div>`
    }
  }
}

export const getOption = ({ data: { list = [] } = {}, customize: { title, type = 'bar', dimensions = [
  {
    field: 'year',
    sort: 1,
    axis: 'xAxis',
  },
  {
    field: 'country',
    sort: 1
  },
  {
    field: 'type',
    sort: 1
  },
  {
    field: 'area',
    sort: 0,
    axis: 'yAxis'
  },
], stack: name, group: stack, percentage = true, layout, animation, color = ["#BB55DE", "#19E1D3", "#5591F4", "#F2B937", "#763DCB", "#C23D67"], } = {} } = {}) => {
  const tooltip = getTooltip(percentage)

  const { category, value, sorts } = extract(dimensions, layout)

  const sorted = sort(list, sorts)

  const aggregated = aggregate(sorted, { category, name, value, stack })
  
  const axis = getAxisByLayout(aggregated, { layout, category })

  const series = getSeries(aggregated, { type, name, stack, value, percentage })

  const legend = getLegend(series)

  return {
    title,
    grid: {
      top: "6%",
      left: "2%",
      right: "2%",
      bottom: "13%",
      containLabel: true,
    },
    tooltip,
    ...axis,
    series,
    legend,
    animation,
    color,
  }
}
