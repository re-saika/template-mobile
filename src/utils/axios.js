import axios from 'axios'
import { Toast } from 'vant'
import build from '@/config'
// import store from '@/project/common/store'

/*
* 使用CancelToken处理一个请求失效取消后面所有请求的操作
* http://www.axios-js.com/zh-cn/docs/#%E5%8F%96%E6%B6%88
* */
// const CancelToken = axios.CancelToken
// const source = CancelToken.source()

const instance = axios.create({
  timeout: 10000,
  baseURL: build.apiBaseURL,
  withCredentials: true,
  crossDomain: true
})

instance.interceptors.request.use((config) => {
  // if (store.state.app.uniqid) {
  //   config.headers.uniqid = store.state.app.uniqid
  // }
  // 测试用户
  if (build.isDev) {
    // config.headers.authority = '1234567890'
    config.headers.authority = '123456789'
  }
  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use(({ data }) => {
  if (data.status === 200) {
    return data.data
  } else if (data.status === 401) {
    // 上线后调用,因为微信可以获取授权
    if (!build.isDev) {
      Toast('登录失效')
      setTimeout(() => {
        // store.dispatch('app/reload')
      }, 1000)
    }
  } else if (data.status === 403) { // 403是微信接口报错所用的一个特定code，接受catch时与400，401，402不一样，403返回的是一个对象
    return Promise.reject(data)
  } else {
    return Promise.reject(data.msg)
  }
}, (error) => {
  if (axios.isCancel(error)) { // 取消请求的情况下，终端Promise调用链
    return new Promise(() => {})
  } else {
    return Promise.reject(error)
  }
})

export default instance
