import Wx from './wx'
import { wechatConfig } from '@/api/modules/app'
const wx = Wx.getInstance()

function config() {
  return new Promise((resolve, reject) => {
    if (!wx.isNeedConfig()) {
      resolve()
    } else {
      wechatConfig({
        url: window.location.href
      }).then((res) => {
        // 这个要跟据后端返回的格式（有的大小写返回的不一样
        const { appid, signature, timestamp, noncestr } = res.data
        const jsApiList = [
          'onMenuShareWeibo',
          'onMenuShareQZone',
          'startRecord',
          'stopRecord',
          'onVoiceRecordEnd',
          'playVoice',
          'pauseVoice',
          'stopVoice',
          'onVoicePlayEnd',
          'uploadVoice',
          'downloadVoice',
          'chooseImage',
          'previewImage',
          'uploadImage',
          'downloadImage',
          'translateVoice',
          'getNetworkType',
          'openLocation',
          'getLocation',
          'hideOptionMenu',
          'showOptionMenu',
          'hideMenuItems',
          'showMenuItems',
          'hideAllNonBaseMenuItem',
          'showAllNonBaseMenuItem',
          'closeWindow',
          'scanQRCode',
          'chooseWXPay',
          'openProductSpecificView',
          'addCard',
          'chooseCard',
          'openCard',
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'onMenuShareQQ'
        ]
        return wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: appid, // 必填，公众号的唯一标识
          timestamp: timestamp, // 必填，生成签名的时间戳
          nonceStr: noncestr, // 必填，生成签名的随机串
          signature: signature, // 必填，签名
          jsApiList: jsApiList // 必填，需要使用的JS接口列表
        })
      }).then(() => {
        resolve()
      }).catch((err) => {
        // reject(err)
        console.log(err)
      })
    }
  })
}

/*
* title = '', // 分享标题
* desc = '', // 分享描述
* link = '', // 分享链接
* imgUrl = '' // 分享图标
* */
export function share(options) {
  config().then(() => {
    // console.log('wx-utils', options)
    wx.share(options)
  })
}

/**
 * 隐藏右上角的菜单栏目
 * @param menuList 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见sdk附录3
 */
export function hideMenuItems(menuList) {
  config().then(() => {
    // console.log('wx-utils', menuList)
    wx.hideMenuItems(menuList)
  })
}

const install = (Vue) => {
  Vue.prototype.$wx = {
    share, hideMenuItems
  }
}

export default {
  install
}
