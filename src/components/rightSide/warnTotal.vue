<template>
  <div class="warnTotal">
    <ul>
      <li class="col-lg-6 col-md-6 col-xs-6 col-sm-6">
        <span>终端总数/异常数</span>
        <h3>5980/280</h3>
      </li>
      <li class="col-lg-6 col-md-6 col-xs-6 col-sm-6">
        <span>总健康度</span>
        <h3>95.32%</h3>
      </li>
    </ul>
    <p>采集时间 <a>2017-5-18 15:27:14</a></p>
  </div>
</template>

<script>
  export default{
    name: 'warnTotal',
    data () {
      return {
        message: 'Hello warnTotal'
      }
    }
  }
</script>

<style lang="less" scoped>
  @borderColor: #78a1d9;
  .warnTotal{
    border: none;
    border-bottom: 1px solid @borderColor;
    padding-bottom:20px;
    height:90px;
    h3{
      margin-top: 5px;
    }
    span{
      color:#e4e8f4;
    }
    li{
      margin:10px 0;
    }
    p{
      color: @borderColor;
    }
  }
</style>
