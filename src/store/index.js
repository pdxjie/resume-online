import { createStore } from 'vuex'

export default createStore({
  state: {
    mode: 'markdown',
    resumeTemplateDrawVisible: false
  },
  mutations: {
    CHANGE_MODE (state, mode) {
      state.mode = mode
    },
    CHANGE_TEMPLATE_STATUS (state) {
      state.resumeTemplateDrawVisible = !state.resumeTemplateDrawVisible
    }
  },
  actions: {
  },
  modules: {
  }
})
