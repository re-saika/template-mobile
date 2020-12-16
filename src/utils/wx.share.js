import Wx from './wx'
import api from '@/api'
const wx = Wx.getInstance()

/*
* title = '', // 分享标题
* desc = '', // 分享描述
* link = '', // 分享链接
* imgUrl = '' // 分享图标
* */
function share(options) {
  api.main.wechatConfig({
    url: window.location.href
  }).then((res) => {
    const { appid, signature, timestamp, noncestr } = res
    return wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: appid, // 必填，公众号的唯一标识
      timestamp: timestamp, // 必填，生成签名的时间戳
      nonceStr: noncestr, // 必填，生成签名的随机串
      signature: signature, // 必填，签名
      jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone'] // 必填，需要使用的JS接口列表
    })
  }).then(() => {
    // console.log(options)
    wx.share(options)
  }).catch((err) => {
    console.log(err)
  })
}

const install = (Vue) => {
  Vue.prototype.$wxShare = share
}

export default {
  install
}
