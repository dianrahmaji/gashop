import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: ''
  },
  mutations: {
    setID: (state, payload) => {
      state.id = payload;
    }
  },
  actions: {

  }
})
