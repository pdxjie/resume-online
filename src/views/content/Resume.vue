<script>
import { ref, defineComponent } from 'vue'
export default defineComponent({
  setup () {
    const activeKey = ref('1')
    return {
      activeKey
    }
  }
})

</script>

<template>
  <div class="resume-content">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="MarkDown模式">Content of Tab Pane 1</a-tab-pane>
      <a-tab-pane key="2" tab="修改" force-render>Content of Tab Pane 2</a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>
    </a-tabs>
  </div>
</template>

<style scoped>
::v-deep .ant-tabs-nav-wrap {
  border: 1px solid #FFF!important;
}
</style>
