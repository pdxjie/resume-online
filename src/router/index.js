import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/layout/SystemLayout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/resume',
    children: [
      {
        path: '/resume',
        name: 'Resume',
        meta: { title: '简历制作', icon: 'SnippetsOutlined' },
        component: () => import('@/views/content/Resume')
      },
      {
        path: '/about',
        name: 'About',
        meta: { title: '关于站长', icon: 'SoundOutlined' },
        component: () => import('@/views/content/About')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
