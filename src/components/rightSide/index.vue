<template>
  <div class="rightSide">
    <warnTotal></warnTotal>
    <visitorNum></visitorNum>
    <responseTime></responseTime>
    <warnRange></warnRange>
  </div>
</template>

<script>
  import responseTime from './responseTime.vue'
  import visitorNum from './visitorNum.vue'
  import warnRange from './warnRange.vue'
  import warnTotal from './warnTotal.vue'

  export default {
    name: 'rightSide',
    components: {
      responseTime, visitorNum, warnRange, warnTotal
    }
  }
</script>

<style lang="less" scoped>
  .rightSide {
    height:100%;
  }
</style>
