<script>
import { defineComponent } from "vue"
export default defineComponent({
  setup () {}
})

</script>

<template>
  <div class="preview-async">
    同步预览
  </div>
</template>

<style scoped lang="less">
.preview-async {
  width: 100%;
  height: calc(100vh - 120px);
  overflow: auto;
  background-color: aquamarine;
  border-radius: 8px;
  margin-top: 10px;
  padding: 10px;
}
</style>
