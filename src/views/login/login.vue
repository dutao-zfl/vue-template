<template>
  <div id="login">
    <input type="text" v-model="account">
    <input type="password" v-model="password">
    <button @click="login">登陆</button>
  </div>
</template>

<script>
  export default {
    name: `login`,
    data () {
      return {
        account: ``,
        password: ``
      }
    },
    created () {
//      this.$store.dispatch('setAccount', 2)
//
//      console.log(this.$store)

//      console.log(this.$store.getters.getAccountId)
    },
    methods: {
      login () {
        fetch(`/api/login`, {
          method: `POST`,
          headers: {
            'Content-Type': `application/json`
          },
          body: JSON.stringify({
            account: this.account,
            password: this.password
          })
        }).then(response => {
          let res = response.json()
          console.log(response)
          console.log(res)
//          if (response.status === `resolved`) {
//            this.$router.replace('/index')
//          }
        }).catch(err => console.log(err))
      }
    }
  }
</script>
