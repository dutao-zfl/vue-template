<template>
  <nav class="mon-menu-elastic">
    <a href="" v-for="list">
      <mon-icon type=""></mon-icon>
    </a>
  </nav>
</template>

<script>
  export default {
    name: 'elastic-menu',

    props: {
      /**
       * @description 菜单类型，可选值为 horizontal（水平） 和 vertical（垂直）
       * @type {String} String
       * @default vertical（垂直）
       */
      mode: {
        type: String,
        validator (value) {
          return ['horizontal', 'vertical'].indexOf(value) > -1
        },
        default: 'vertical'
      },

      /**
       * @description 菜单的宽度，只在 mode="vertical" 时有效，如果使用 mode="horizontal" 布局，建议设置为 auto
       * @type {String | Number} String | Number
       * @default 30
       */
      width: {
        type: [String, Number],
        default: 30
      }
    },

    data () {
      return {
        width: 30,
        backgroundColor: ''
      }
    }
  }
</script>

<style lang="less" scoped></style>
