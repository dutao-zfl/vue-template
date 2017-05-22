<template>
  <div class="responseTime">

  </div>
</template>

<script>
  import echarts from 'echarts'
  import defaultOption from '../echartsOption/defaultOption'
  export default{
    name: 'responseTime',
    data () {
      return {
        message: 'Hello responsive'
      }
    },
    mounted () {
      let responseTime = echarts.init(document.querySelector('.responseTime'))
      responseTime.setOption(defaultOption)
    }
  }
</script>

<style lang="less" scoped>
  .responseTime{
    width:100%;
    height:27%;
  }
</style>
