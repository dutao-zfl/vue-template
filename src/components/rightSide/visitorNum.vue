<template>
  <div class="visitorNum">

  </div>
</template>

<script>
  import echarts from 'echarts'
  import defaultOption from '../echartsOption/defaultOption'
  export default{
    name: 'visitorNum',
    data () {
      return {
        message: 'Hello visitorNum'
      }
    },
    mounted () {
      let visitorNum = echarts.init(document.querySelector('.visitorNum'))
      visitorNum.setOption(defaultOption)
    }
  }
</script>

<style lang="less" scoped>
  .visitorNum{
    width:100%;
    height:27%;
  }
</style>
