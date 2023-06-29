<script setup>
import { ref } from 'vue'
import weChatImg from '@/assets/images/wechat.jpg'
import { UserOutlined, AliwangwangOutlined, SecurityScanOutlined, CopyrightCircleOutlined } from '@ant-design/icons-vue'
const connectAuthor = ref(weChatImg)
</script>

<template>
  <div>
    <a-layout-footer style="text-align: center">
      <div>
        <!-- top -->
        <div class="top-selection">
          <a href="https://github.com/pdxjie" target="_blank"><user-outlined /> 派同学</a>
          <a href="https://github.com/pdxjie" target="_blank">
            <a-tooltip placement="top">
              <template #title>
                <img :src='connectAuthor' alt='' class='wechat'>
              </template>
              <aliwangwang-outlined /> 联系作者
            </a-tooltip>
          </a>
          <a href="https://github.com/pdxjie" target="_blank"><security-scan-outlined /> 建设反馈</a>
        </div>
        <!-- bottom -->
        <div class="bottom-selection">
          <copyright-circle-outlined style="color: #888" /><span style="color: #888">2023 在线简历制作</span>
        </div>
      </div>
    </a-layout-footer>
  </div>
</template>

<style scoped lang="less">
.wechat {
  width: 100px;
  height: 100px;
}
.top-selection {
  a {
    color: #888;
    margin: 0 20px;
  }
}

.bottom-selection {
  margin-top: 10px;
}
</style>
