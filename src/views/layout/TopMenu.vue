<script>
import { onMounted, ref, reactive, defineComponent } from 'vue'
import ResumeTemplateDraw from '@/components/ResumeTemplateDraw'
import { useWindowSize } from '@vueuse/core'
import PickColor from 'vue-pick-colors'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { normalTemplate } from '@/templates/resumeTemplate'
import { Loading } from '@/templates/loading'
import ResumeLogo from '@/assets/images/resume.svg'
export default defineComponent({
  components: { ResumeTemplateDraw, PickColor },
  setup () {
    // 变量
    const { width } = useWindowSize()
    let menus = reactive([])
    let filterMenu = ref([])
    let templates = ref([])
    const selectedKeys = ref(['2'])
    const activeKey = ref('markdown')
    const resumeLogo = ref(ResumeLogo)
    const routers = useRouter()
    const store = useStore()
    const colorVal = ref('#1930a1')
    // methods
    onMounted(() => {
      menus = routers.getRoutes()
      filterMenu.value = menus.filter(menu => menu.children.length === 0)
      let template = []
      template.push(normalTemplate)
      template.push(Loading)
      templates.value = template
      console.log(filterMenu, 'routers')
    })
    // 切换tab标签页 --Deprecated
    const handleChange = (tab) => {
      activeKey.value = tab
      store.commit('CHANGE_MODE', tab)
    }
    // 修改简历主题色
    const changeTheme = (color) => {
      store.commit('CHANGE_RESUME_THEME', color)
    }
    // 切换菜单 --Deprecated
    const menuClick = (path) => {
      routers.push({
        path: path.key
      })
    }
    // 切换简历模板
    const changeTemplate = () => {
      store.commit('CHANGE_TEMPLATE_STATUS')
    }
    return {
      width,
      colorVal,
      selectedKeys,
      resumeLogo,
      filterMenu,
      menuClick,
      handleChange,
      changeTheme,
      changeTemplate,
      activeKey,
      templates
    }
  }
})
</script>

<template>
  <div>
    <a-layout-header>
      <div style="display: flex;align-items: center">
        <div class="menu-style">
          <div class="header">
            <img :src="resumeLogo" alt="">
            <span class="web-title">艺简</span>
          </div>
<!--          <a-menu-->
<!--            v-if="width > 1000"-->
<!--            :selectedKeys="[$route.path]"-->
<!--            :default-selected-keys="['1']"-->
<!--            theme="light"-->
<!--            @click="menuClick"-->
<!--            mode="horizontal"-->
<!--            :style="{ lineHeight: '64px' }"-->
<!--          >-->
<!--            <a-menu-item v-for="menu in filterMenu" :key="menu.path">-->
<!--              &lt;!&ndash; .vue &ndash;&gt;-->
<!--              <component :is="$icons[menu.meta.icon]" />-->
<!--              {{ menu.meta.title }}-->
<!--            </a-menu-item>-->
<!--          </a-menu>-->
        </div>
      </div>
      <div class="display-flex">
        <div class="operate-left">
          <div style="display:flex">
            <div class="color-picker">
              <a-button>
                <PickColor v-model:value="colorVal" show-alpha @change="changeTheme"/>
                主题选择
              </a-button>
            </div>
            <a-tooltip placement="top">
              <template #title>
                <span>切换模板</span>
              </template>
              <a-button v-if="width > 1000" @click="changeTemplate()" shape="circle">
                <template #icon>
                  <switcher-outlined />
                </template>
              </a-button>
            </a-tooltip>
            <a-tooltip placement="top">
              <template #title>
                <span>预览</span>
              </template>
              <a-button v-if="activeKey === 'online'" shape="circle">
                <template #icon>
                  <eye-outlined />
                </template>
              </a-button>
            </a-tooltip>
            <a-tooltip placement="top">
              <template #title>
                <span>导出</span>
              </template>
              <a-button shape="circle">
                <template #icon>
                  <cloud-upload-outlined />
                </template>
              </a-button>
            </a-tooltip>
            <a-tooltip placement="top">
              <template #title>
                <span>重置</span>
              </template>
              <a-button shape="circle">
                <template #icon>
                  <undo-outlined />
                </template>
              </a-button>
            </a-tooltip>
          </div>
        </div>
      </div>
    </a-layout-header>
    <ResumeTemplateDraw :templates="templates" />
  </div>
</template>

<style scoped lang="less">
.menu-style {
  display: flex;
  .header {
    display: flex;
    align-items: center;
    margin-right: 25px;
    img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
    .web-title {
      font-family: 'hanyitaozaizijian';
      font-size: 30px;
      font-weight: 400;
      color: rgb(45 106 234);
    }
  }
}
.operate-left {
  display: flex;
  align-items: center;
  .color-picker {
    ::v-deep .ant-btn {
      display: flex;
      align-items: center;
      padding-left: 0px;
    }
  }
}
::v-deep .ant-btn {
  margin-right: 10px!important;
}
</style>
