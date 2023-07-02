<script>
import { defineComponent } from 'vue'
import MarkdownEditor from "./MarkdownEditor"
import PreviewSync from "./PreviewSync"
export default defineComponent({
  components: { MarkdownEditor, PreviewSync },
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
  <div class="markdown-mode">
    <a-row :gutter="10">
      <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <MarkdownEditor :resumeTemplate="resumeTemplate"/>
      </a-col>
      <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <PreviewSync />
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>
.markdown-mode {
  width: 100%;
  padding: 0 10px;
  position: absolute;
  top: 60px;
}
</style>
