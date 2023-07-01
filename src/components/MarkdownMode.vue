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
      <a-col :span="12">
        <MarkdownEditor :resumeTemplate="resumeTemplate"/>
      </a-col>
      <a-col :span="12">
        <PreviewSync />
      </a-col>
    </a-row>

  </div>
</template>

<style scoped>
.markdown-mode {
  margin: 0 15px;
  position: absolute;
  top: 60px;
}
</style>
