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
  <div class="resume-content position-relative">
    <!-- top -->
    <div class="operate-left position-absolute" style="right: 20px;top:10px;display: flex">
      <div style="margin-right:10px">
        <span style="margin-right: 10px">制作模式</span>
          <a-select
          ref="select"
          v-model:value="activeKey"
          style="width: 150px"
          @focus="focus"
          @change="handleChange"
        >
          <a-select-option value="markdown">MarkDown模式</a-select-option>
          <a-select-option value="online">在线模板模式</a-select-option>
        </a-select>
      </div>
      <div style="display:flex">
        <a-button style="margin-right: 10px">在线预览</a-button>
        <a-button type="primary">PDF打印</a-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
::v-deep .ant-tabs-nav-wrap {
  border: 1px solid #FFF!important;
}
</style>
