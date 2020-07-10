import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '武汉'
  },
  actions: {
    changecity (ctx, city) {
      ctx.commit('changecity', city)
    }
  },
  mutations: {
    changecity (state, x) {
      state.city = x
    }
  }
})
