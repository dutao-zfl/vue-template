<template>
  <div id="index">
    <hello></hello>
    <p>id: {{ id }} <br>
       account: {{ account }} <br>
       password: {{ password }}</p>
  </div>
</template>

<script>
  export default {
    name: `index`,
    data () {
      return {
        id: ``,
        account: ``,
        password: ``
      }
    },
    created () {
      console.log(this.$store.getters.getAccountId)
//      fetch(`/api/user`, {
//        method: `GET`,
//        headers: {
//          'Content-Type': `application/json`
//        },
//        body: {
//          id: this.id
//        }
//      }).then(response => {
//        let res = response.json()
//
//        this.password = res.result.password
//      })
    }
  }
</script>
