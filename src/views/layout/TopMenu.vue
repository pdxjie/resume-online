<script>
import { onMounted, ref, reactive, defineComponent } from 'vue'
import ResumeTemplateDraw from '@/components/ResumeTemplateDraw'
import { useWindowSize } from '@vueuse/core'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import ResumeLogo from '@/assets/images/resume.svg'
export default defineComponent({
  components: { ResumeTemplateDraw },
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
    // methods
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
    const changeTemplate = () => {
      store.commit('CHANGE_TEMPLATE_STATUS')
    }
    return {
      width,
      selectedKeys,
      resumeLogo,
      filterMenu,
      menuClick,
      handleChange,
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
      <div>
        <div class="operate-left">
          <div style="display:flex">
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
          <div style="margin-right:10px" v-if="width > 1000">
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
      width: 35px;
      height: 35px;
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
}
::v-deep .ant-btn {
  margin-right: 10px!important;
}
</style>
