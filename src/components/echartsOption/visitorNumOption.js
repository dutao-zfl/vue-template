export default {
  title: {
    text: '页平均响应时间/小时',
    textStyle: {
      fontSize: 12,
      color: '#000'
    },
    padding: [0,10]
  },
  tooltip: {
    trigger: 'axis',
    formatter: '{b}时：{c}s', //提示标签格式
    axisPointer: {
      lineStyle: {
        color: 'transparent'
      }
    }
  },
  grid: {
    top: '20%',
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
    borderColor: '#dbdbdc'
  },
  xAxis:  {
    type: 'category',
    boundaryGap: false,
    axisTick: {
      show: false
    },
    nameTextStyle: {
      color: '#898989'
    },
    axisLine: {
      lineStyle: {
        color: '#898989'
      }
    },
    data: []
  },
  yAxis: {
    type: 'value',
    axisTick: {
      show: false
    },
    axisLabel: {
      margin: 10,
      textStyle: {
        fontSize: 12
      },
      formatter: '{value}'
    },
    axisLine: {
      lineStyle: {
        color: '#898989'
      }
    },
    splitLine: {
      lineStyle: {
        color: '#dbdbdc',
        type:'dotted'
      }
    },
    //splitNumber:4
  },
  series: [
    {
      name: '响应率',
      type: 'line',
      itemStyle: {
        normal: {
          color: '#77b9d7'
        }
      },
      areaStyle: {normal: {
        color:"#ddf1fa"
      }},
      smooth: true,
      symbol: 'circle',
      symbolSize: 5,
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 1
        }
      },
      data: []
    }
  ]
}
