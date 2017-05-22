<template>
  <i :class="classes" :style="styles"></i>
</template>

<script>
  export default {
    name: 'mon-icon',

    props: {
      type: String,

      size: [Number, String],

      color: String,

      status: String
    },

    computed: {
      classes () {
        return `mon-icon mon-icon-${this.type}`
      },

      styles () {
        let style = {}

        if (this.color) {
          style.color = this.color
        }

        if (this.size) {
          style.fontSize = this.size
        }

        return style
      }
    }
  }
</script>
