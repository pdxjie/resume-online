<script setup>
import SystemFooter from '@/views/layout/SystemFooter'
import ContentLayout from '@/views/layout/ContentLayout'
import TopMenu from '@/views/layout/TopMenu'

</script>

<template>
  <a-layout class="layout">
    <TopMenu />
    <a-layout-content>
      <div :style="{ background: '#fff'}" class="content-style">
        <ContentLayout />
      </div>
    </a-layout-content>
    <SystemFooter />
  </a-layout>
</template>

<style scoped>
.content-style {
  height: calc(100vh - 100px);
}
::v-deep .ant-layout-header {
  background: #FFF;
  border-bottom: 1px solid #EEE;
}
</style>
