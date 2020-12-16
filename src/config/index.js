import build from '@/../build/index'

export default {
  isDev: build.isDev,

  // 如果接口域名不一样
  apiBaseURL: build.isDev ? process.env.BASE_URL : '/',
  // 打包后访问链接后，后端的tpl需要加的路由
  // 比如 后端tpl路径是 http://www.abc.com/def ，则需要给routerRoot配置/def
  routerRoot: build.isDev ? process.env.BASE_URL : '/azhfArticle'
}
