<script>
import { onMounted, ref, reactive, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import ResumeLogo from '@/assets/images/resume.svg'
export default defineComponent({
  setup () {
    const selectedKeys = ref(['2'])
    const activeKey = ref('markdown')
    const resumeLogo = ref(ResumeLogo)
    let menus = reactive([])
    let filterMenu = ref([])
    const routers = useRouter()
    const store = useStore()
    onMounted(() => {
      menus = routers.getRoutes()
      filterMenu.value = menus.filter(menu => menu.children.length === 0)
      console.log(filterMenu, 'routers')
    })
    const handleChange = (tab) => {
      activeKey.value = tab
      store.commit('CHANGE_MODE', tab)
    }
    const menuClick = (path) => {
      routers.push({
        path: path.key
      })
    }
    return {
      selectedKeys,
      resumeLogo,
      filterMenu,
      menuClick,
      handleChange,
      activeKey
    }
  }
})
</script>

<template>
  <a-layout-header>
    <div>
      <div class="menu-style">
        <div class="header">
          <img :src="resumeLogo" alt="">
          <span class="web-title">一书简历</span>
        </div>
        <a-menu
          :selectedKeys="[$route.path]"
          :default-selected-keys="['1']"
          theme="light"
          @click="menuClick"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item v-for="menu in filterMenu" :key="menu.path">
            <!-- .vue -->
            <component :is="$icons[menu.meta.icon]" />
            {{ menu.meta.title }}
          </a-menu-item>
        </a-menu>
      </div>
    </div>
    <div>
      <div class="operate-left">
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
          <a-button v-if="activeKey === 'online'">在线预览</a-button>
          <a-button >PDF打印</a-button>
          <a-button>重置内容</a-button>
        </div>
      </div>
    </div>
  </a-layout-header>
</template>

<style scoped lang="less">
.menu-style {
  display: flex;
  .header {
    display: flex;
    align-items: center;
    img {
      width: 35px;
      height: 35px;
      margin-right: 10px;
    }
    .web-title {
      font-size: 20px;
      font-weight: 400;
      color: rgb(45 106 234);
    }
  }
}
.operate-left {
  display: flex;
  align-items: center;
}
::v-deep .ant-btn {
  margin-right: 10px!important;
}
</style>
