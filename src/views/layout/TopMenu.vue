<script>
import { onMounted, ref, reactive, defineComponent, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import ResumeLogo from '@/assets/images/resume.svg'
// eslint-disable-next-line no-unused-vars
export default defineComponent({
  setup () {
    const selectedKeys = ref(['2'])
    const resumeLogo = ref(ResumeLogo)
    let menus = reactive([])
    let filterMenu = ref([])
    const { proxy } = getCurrentInstance()
    const routers = useRouter()
    onMounted(() => {
      menus = routers.getRoutes()
      filterMenu.value = menus.filter(menu => menu.children.length === 0)
      console.log(filterMenu, 'routers')
    })
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
      proxy
    }
  }
})
</script>

<template>
  <a-layout-header>
    <div class="menu-style">
      <div class="header">
        <img :src="resumeLogo" alt="">
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
  </a-layout-header>
</template>

<style scoped lang="less">
.menu-style {
  display: flex;
  .header {
    img {
      width: 35px;
      height: 35px;
      margin-right: 20px;
    }
  }
}
</style>
