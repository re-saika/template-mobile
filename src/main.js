import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import components from '@/components'
// import directives from '@/diractives'
import plugins from '@/plugins'
import apis from '@/api'
import '@/styles/index.scss'

// 注册api
Vue.use(apis)
// 注册全局组件
// Vue.use(components)
// 注册指令
// directives(Vue)
// 注册插件
plugins(Vue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
