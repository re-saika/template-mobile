import 'h5-rem'
import _ from 'lodash'
// import WxShare from '@/utils/wx.share'
import Vant from 'vant'
import 'vant/lib/index.css'

export default (Vue) => {
  Vue.prototype.$_ = _
  Vue.use(Vant)
  // Vue.use(WxShare) // 微信分享
}
