<script>
import { computed, defineComponent, onMounted, createApp } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  setup () {
    const store = useStore()
    onMounted(() => {
      let str = '<div style="color: red"> 你好啊</div>'
      var Profile = defineComponent({
        template: str,
        setup () {
          const resumeData = store.state.selectedResumeTemplate
          return {
            resumeData
          }
        }
      })
      const app = createApp(Profile)
      app.mount('#preview-async')
    })
    const resumeTemplate = computed(() => {
      return store.state.selectedResumeTemplate
    })
    return {
      resumeTemplate
    }
  }
})

</script>

<template>
  <div id="preview-async">
  </div>
</template>

<style scoped lang="less">
.preview-async {
  width: 100%;
  height: calc(100vh - 120px);
  overflow: auto;
  border-radius: 8px;
  margin-top: 10px;
  padding: 10px;
}
</style>
