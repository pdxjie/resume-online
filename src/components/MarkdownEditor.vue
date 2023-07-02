<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import BasicInfoCollapse from '@/components/BasicInfoCollapse'
import OtherInfoCollapse from '@/components/OtherInfoCollapse'
export default defineComponent({
  components: { OtherInfoCollapse, BasicInfoCollapse },
  setup () {
    const store = useStore()
    const defaultTemplate = computed(() => {
      return store.state.selectedResumeTemplate
    })
    const handleChangeBasicInfo = (n) => {
      console.log('我接收到了传的值', n)
      store.commit('CHANGE_RESUME_TEMPLATE', n)
    }
    return {
      defaultTemplate,
      handleChangeBasicInfo
    }
  }
})

</script>

<template>
  <div class="markdown-editor">
    <BasicInfoCollapse :basicInfo="defaultTemplate.basicInfo" @change-value="handleChangeBasicInfo"/>
    <OtherInfoCollapse v-for="otherInfo in defaultTemplate.otherInfos" :key="otherInfo.id" :id="otherInfo.id" :otherInfo="otherInfo"/>
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
