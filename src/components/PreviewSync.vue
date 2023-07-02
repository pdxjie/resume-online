<script>
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  setup () {
    const store = useStore()
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
  <div class="preview-async">
    {{ resumeTemplate }}
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
