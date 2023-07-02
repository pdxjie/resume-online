import { createStore } from 'vuex'
import { normalTemplate } from '@/templates/resumeTemplate'

export default createStore({
  state: {
    mode: 'markdown',
    resumeTemplateDrawVisible: false,
    selectedResumeTemplate: normalTemplate
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
