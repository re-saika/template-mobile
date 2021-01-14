import wx from 'weixin-js-sdk'

class Wx {
  static instance
  static getInstance() {
    if (!Wx.instance) {
      Wx.instance = new Wx()
    }
    return Wx.instance
  }

  constructor() {
    this.wx = wx
    this.isConfig = false
    this.configOptions = {
      debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: undefined, // 必填，公众号的唯一标识
      timestamp: undefined, // 必填，生成签名的时间戳
      nonceStr: undefined, // 必填，生成签名的随机串
      signature: undefined, // 必填，签名
      jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone'] // 必填，需要使用的JS接口列表
    }
  }

  isIos() {
    const u = navigator.userAgent
    // const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 //安卓
    return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
  }

  isNeedConfig() {
    return !(this.isIos() && this.isConfig)
  }

  /*
  * debug 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  * appId 必填，公众号的唯一标识
  * timestamp 必填，生成签名的时间戳
  * nonceStr 必填，生成签名的随机串
  * signature 必填，签名
  * jsApiList 必填，需要使用的JS接口列表
  * */
  config(options) {
    return new Promise((resolve, reject) => {
      // ios系统一次会话只需要配置一次
      // console.log('是否ios操作系统', this.isIos())
      // console.log('是否配置', this.isConfig)
      if (!this.isNeedConfig()) {
        resolve()
      } else {
        this.wx.config(options)
        this.wx.ready(() => {
          if (this.isIos()) {
            this.isConfig = true
          }
          resolve()
        })
        this.wx.error((err) => {
          reject(err.errMsg)
        })
      }
    })
  }

  share(options) {
    this.wx.onMenuShareTimeline(options)
    this.wx.onMenuShareAppMessage(options)
    this.wx.onMenuShareQQ(options)
    this.wx.onMenuShareWeibo(options)
  }

  hideMenuItems(menuList) {
    this.wx.hideMenuItems({ menuList })
  }
}

export default Wx
