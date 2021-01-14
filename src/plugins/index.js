import 'h5-rem'
import _ from 'lodash'
// import WxUtils from '@/utils/wx.utils.js'
import Vant from 'vant'
import 'vant/lib/index.css'

export default (Vue) => {
  Vue.prototype.$_ = _
  Vue.use(Vant)
  // Vue.use(WxUtils) // 微信
}
