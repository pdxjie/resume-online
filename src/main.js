import { createApp } from 'vue'
import { nextTick } from '@vue/runtime-core'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import '@/styles/common.less'
import * as Icons from '@ant-design/icons-vue'
import '@/assets/css/font.css'
import '@/assets/css/markdown.min.css'
import './styles/reset.css'
import '@/styles/theme-v1.less'
import hevueImgPreview from 'hevue-img-preview'
const app = createApp(App)

app.use(Antd)
  .use(router)
  .use(hevueImgPreview)
  .use(store)
  .mount('#app')

nextTick(() => {
  // 配置全局对象
  app.config.globalProperties.$icons = Icons
  // Antd 注入全部图标（这样注入之后，就可以全局直接使用 icon 组件，不需要每个页面去引入了）
  for (const key in Icons) { app.component(key, Icons[key]) }
})
