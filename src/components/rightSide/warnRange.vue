<template>
  <div class="warnRange">

  </div>
</template>

<script>
  import echarts from 'echarts'
  import defaultOption from '../echartsOption/defaultOption'
  export default{
    name: 'warnRange',
    data () {
      return {
        message: 'Hello warnRange'
      }
    },
    mounted () {
      let warnRange = echarts.init(document.querySelector('.warnRange'))
      warnRange.setOption(defaultOption)
    }
  }
</script>

<style lang="less" scoped>
  .warnRange{
    width: 100%;
    height: 27%;
  }
</style>
