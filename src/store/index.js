import { createStore } from 'vuex'
import itTemplate from '../templates/modules/1_it/index'

export default createStore({
  state: {
    mode: 'markdown',
    resumeTemplateDrawVisible: false,
    selectedResumeTemplate: itTemplate
  },
  mutations: {
    CHANGE_MODE (state, mode) {
      state.mode = mode
    },
    CHANGE_TEMPLATE_STATUS (state) {
      state.resumeTemplateDrawVisible = !state.resumeTemplateDrawVisible
    },
    CHANGE_RESUME_TEMPLATE (state, template) {
      state.selectedResumeTemplate = template
    }
  },
  actions: {
  },
  modules: {
  }
})
