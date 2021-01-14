import * as app from './modules/app'

const install = (Vue) => {
  Vue.prototype.$api = {
    app
  }
}

export default {
  install
}
