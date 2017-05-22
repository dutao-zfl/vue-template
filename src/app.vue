<template>
  <div class="container-fluid rueiScreen" v-bind:style="{height:screenHeight + 'px'}">
    <leftSide class="col-lg-2 col-md-2 col-xs-2 col-sm-2 classHeight"></leftSide>
    <middleContent class="col-lg-7 col-md-8 col-xs-8 col-sm-8 classHeight"></middleContent>
    <rightSide class="col-lg-3 col-md-4 col-xs-4 col-sm-4 classHeight"></rightSide>
  </div>
</template>

<script>
  import '../static/less/again.less'
  import leftSide from './components/leftSide/healthCity.vue'
  import middleContent from './components/middleContent/hunanMap.vue'
  import rightSide from './components/rightSide/index.vue'

  export default {
    name: `app`,
    components: {leftSide, middleContent, rightSide},
    data () {
      return {
        screenHeight: 768
      }
    },
    mounted () {
      this.screenHeight = document.body.clientHeight - 150
    }
  }
</script>

<style lang="less" scoped>
  .classHeight {
    height: 100%;
  }
</style>
