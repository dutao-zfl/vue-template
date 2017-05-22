export default {
  color: ['#77b9d7'],
  title : {
    text: '各地市告警分布',
    textStyle: {
      fontSize: 10,
      color: '#000'
    },
    padding: [0,10]
  },
  tooltip: {
    trigger: 'axis',
    formatter: '{b}<br/>告警分布：{c}个', //提示标签格式
    axisPointer: {
      type : 'shadow'
    }
  },
  grid: {
    top: '20%',
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
    borderColor:'#dbdbdc'
  },
  xAxis : {
    type: 'category',
    boundaryGap: true,
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
  yAxis : {
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
    splitNumber: 3
  },
  series : [
    {
      name: '告警分布',
      type: 'bar',
      barWidth: '30%',
      data: []
    }
  ]
}
