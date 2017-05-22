import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  account: {
    id: null
  }
}

const getters = {
  getAccountId ({ account }) {
    return account.id
  }
}

const mutations = {
  setAccount ({ account }, id) {
    account.id = id
  }
}

const actions = {
  setAccount ({ commit }, id) {
    commit('setAccount', id)
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
