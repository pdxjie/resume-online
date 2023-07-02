<script>
import { defineComponent } from 'vue'
import { v4 as uuid4 } from 'uuid'
import BasicInfoCollapse from '@/components/BasicInfoCollapse'
import OtherInfoCollapse from '@/components/OtherInfoCollapse'
export default defineComponent({
  components: { OtherInfoCollapse, BasicInfoCollapse },
  props: {
    resumeTemplate: {
      type: Object
    }
  },
  setup () {
    return {
      uuid4
    }
  }
})

</script>

<template>
  <div class="markdown-editor">
    <BasicInfoCollapse />
    <OtherInfoCollapse :id="uuid4()"/>
    <OtherInfoCollapse :id="uuid4()"/>
    <OtherInfoCollapse :id="uuid4()"/>
    <OtherInfoCollapse :id="uuid4()"/>
  </div>
</template>

<style scoped lang="less">
.markdown-editor {
  width: 100%;
  height: calc(100vh - 120px);
  overflow: auto;
  background-color: #FFF;
  border-radius: 8px;
  margin-top: 10px;
  border: 2px dotted #eee;
}
</style>
