import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
// import { getToken, hasPermission } from '@/utils/utils'
import config from '@/config'
// import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: config.routerRoot,
  routes
})

router.beforeEach((to, from, next) => {
  // 如果title是固定的，写在public/index.html的title标签，这里需要注释
  if (to.meta.title) document.title = to.meta.title
  next()
})

export default router
