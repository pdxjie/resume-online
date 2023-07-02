<script>
import { defineComponent } from 'vue'
import BasicInfoCollapse from '@/components/BasicInfoCollapse'
export default defineComponent({
  components: { BasicInfoCollapse },
  props: {
    resumeTemplate: {
      type: Object
    }
  },
  setup () {
  }
})

</script>

<template>
  <div class="markdown-editor">
    <BasicInfoCollapse />
  </div>
</template>

<style scoped lang="less">
.markdown-editor {
  width: 100%;
  height: calc(100vh - 120px);
  overflow: auto;
  background-color: antiquewhite;
  border-radius: 8px;
  margin-top: 10px;
  padding: 10px;
}
</style>
