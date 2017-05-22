<template>
  <div>
    <div class="healthCity" v-for="(item,index) in healthArr" v-bind:style="{top:cotainerTop + 'px'}">
      <s></s>
      <h5 class="cityTitle">{{item.name}}</h5>
      <transition name="fade" mode="out-in" appear>
        <ul class="cityProperty" v-show="index<3" v-bind:style="{height: index<3 ? 'auto': 0}">
          <li>
            <p>平均响应时间(s) <a>{{item.response_time}}</a></p>
            <span class="process"><s></s></span>
          </li>
          <li>
            <p>营业厅健康度 <a>{{item.bussiness_degree}}</a></p>
            <span class="process">
            <s v-bind:style="{width:item.bussiness_degree + '%'}"
               v-bind:class= "[item.priority === 5 ? 'warnLevel_4' :
                item.priority === 4 ? 'warnLevel_3':
                item.priority === 3 ? 'warnLevel_2':
                'warnLevel_0']"></s>
          </span>
          </li>
          <li>
            <p>代办点健康度 <a>{{item.commission_degree}}</a></p>
            <span class="process">
            <s v-bind:style="{width:item.bussiness_degree + '%'}"
               v-bind:class= "[item.priority === 5 ? 'warnLevel_4' :
                item.priority === 4 ? 'warnLevel_3':
                item.priority === 3 ? 'warnLevel_2':
                'warnLevel_0']"></s>
          </span>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
  import '../../../static/less/warnList.less'
  export default{
    name: 'leftSide',
    data () {
      return {
        cotainerTop: 0,
        healthArr: [
          {'code': '0731',
            'commission_degree': 95.94,
            'name': '长沙',
            'response_time': 1.77,
            'priority': 5,
            'bussiness_degree': 96.38
          }, {
            'code': '0730',
            'commission_degree': 97.05,
            'name': '岳阳',
            'response_time': 1.85,
            'priority': 5,
            'bussiness_degree': 98.50
          }, {
            'code': '0733',
            'commission_degree': 95.80,
            'name': '株洲',
            'response_time': 1.81,
            'priority': 1,
            'bussiness_degree': 100.00
          }, {
            'code': '0732',
            'commission_degree': 99.05,
            'name': '湘潭',
            'response_time': 1.86,
            'priority': 1,
            'bussiness_degree': 98.47
          }
        ]
      }
    },
    beforeCreate () {
//      fetch('/src/dataJson/healthCity.json', {
//        method: 'POST',
//        headers: {
//          'Content-type': 'application/json'
//        },
//        body: JSON.stringify({
//          startTime: new Date().getTime() - 24 * 60 * 3600,
//          endTime: new Date().getTime()
//        })
//      }).then(response => {
//        console.log(response)
//      }).catch(result => {
//        console.log(result)
//      })
    },
    mounted () {
      setInterval(() => {
        this.cotainerTop--
        if (this.cotainerTop === -170) {
          /*
          clearInterval(timer)
          timer = null
          */
          this.cotainerTop = 0
          let firstCity = this.healthArr.splice(0, 1)
          this.healthArr = this.healthArr.concat(firstCity)
        }
      }, 50)
    },
    methods: {

    }
  }
</script>

<style lang="less" scoped>
  @borderColor: #00d3c0;
  .healthCity {
    border: none;
    border-left: 1px solid @borderColor;
    border-bottom: 1px solid #21345f;
    position:relative;
    padding: 7px 10px;
    color: #0aa2f8;
    margin-bottom: 5px;
    &>s{
      position:absolute;
      left: 0 ;
      top: 0;
      width: 3px;
      height: 22px;
      background-color: @borderColor;
      &:after{
        content: '';
        position:absolute;
        width:0;
        height:0;
        border: 3px solid transparent;
        bottom: -3px;
        border-bottom-color: @borderColor;
        transform: rotateZ(90deg);
        -webkit-transform: rotateZ(90deg);
        -moz-transform: rotateZ(90deg);
      }
    }
    .cityTitle{
      color: @borderColor;
      font-size: 16px;
    }
    .cityProperty{
      font-size: 13px;
      margin-top: 15px;
      height: 0;
      overflow: hidden;
      transition: height 1s;
      &>li{
        margin:10px 0;
        a{
          color: #1bcc7e;
          font-size:14px;
        }
      }
      .process{
        display: inline-block;
        width:98%;
        height:5px;
        border-radius:5px;
        background-color: #283d68;
        position: relative;
        &>s{
          position: absolute;
          width:60%;
          height:5px;
          border-radius:5px;
          /*background-color: @borderColor;*/
        }
      }
    }
  }
</style>
