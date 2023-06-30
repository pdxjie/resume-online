<script>
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import MarkdownMode from '@/components/MarkdownMode'
import OnlineMode from '@/components/OnlineMode'
export default defineComponent({
  components: { MarkdownMode, OnlineMode },
  setup () {
    const store = useStore()
    return {
      store
    }
  }
})

</script>

<template>
  <div class="resume-content">
    <!-- top -->
    <div class="content">
      <MarkdownMode v-if="store.state.mode === 'markdown'" />
      <OnlineMode v-else/>
    </div>
  </div>
</template>

<style scoped>
::v-deep .ant-tabs-nav-wrap {
  border: 1px solid #FFF!important;
}
</style>
