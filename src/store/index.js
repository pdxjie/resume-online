import { createStore } from 'vuex'

export default createStore({
  state: {
    mode: 'markdown'
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
