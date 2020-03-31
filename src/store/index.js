import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: {
      title: '',
      visibility: false,
      color: 'primary'
    }
  },
  mutations: {
    showLoading(state, payload) {
      state.loading.title = payload.title
      state.loading.color = payload.color
      state.loading.visibility = true
    },
    hideLoading(state) {
      state.loading.visibility = false
    }
  },
  actions: {
  },
  modules: {
  }
})
