<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import MarkdownMode from '@/components/MarkdownMode'
import OnlineMode from '@/components/OnlineMode'
export default defineComponent({
  components: { MarkdownMode, OnlineMode },
  setup () {
    const store = useStore()
    const resumeTemplate = computed(() => {
      return store.state.selectedResumeTemplate
    })
    return {
      store,
      resumeTemplate
    }
  }
})

</script>

<template>
  <div class="resume-content">
    <!-- top -->
    <div class="content">
      <MarkdownMode :resumeTemplate="resumeTemplate" v-if="store.state.mode === 'markdown'" />
      <OnlineMode v-else/>
    </div>
  </div>
</template>

<style scoped>
::v-deep .ant-tabs-nav-wrap {
  border: 1px solid #FFF!important;
}
</style>
