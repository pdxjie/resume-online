<script>
import { ref, defineComponent } from 'vue'
export default defineComponent({
  setup () {
    const activeKey = ref('markdown')

    const changeTab = (tab) => {
      console.log(tab, 'ssss')
    }
    return {
      activeKey,
      changeTab
    }
  }
})

</script>

<template>
  <div class="resume-content">
    <a-tabs v-model:activeKey="activeKey" @change="changeTab">
      <a-tab-pane key="markdown" tab="MarkDown模式">Content of Tab Pane 1</a-tab-pane>
      <a-tab-pane key="online" tab="在线模板模式" force-render>Content of Tab Pane 2</a-tab-pane>
    </a-tabs>
  </div>
</template>

<style scoped>
::v-deep .ant-tabs-nav-wrap {
  border: 1px solid #FFF!important;
}
</style>
