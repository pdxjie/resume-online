import { createStore } from 'vuex'

export default createStore({
  state: {
    mode: 'online'
  },
  mutations: {
    CHANGE_MODE (state, mode) {
      state.mode = mode
    }
  },
  actions: {
  },
  modules: {
  }
})
