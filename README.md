# tmplate-mobile

## 配置
### build
#### 1.配置target，本地代理的接口域名
#### 2.配置publicPath，打包的静态资源路径
----
### public
#### 1.配置浏览器窗口的title，如果是固定的title，就直接再index.html改title标签，再改一下路由的动态配置title
----
### api
#### 1.封装接口，封装好了请求，直接跟着复制粘贴写接口路由就完了
----
### components
#### 1.full-loading，满屏加载动画，如果进入h5需要预加载，可以用这个loading
#### 2.rich-text，富文本封装
----
### config
#### 1.apiBaseURL，打包后，请求路径一般就是域名+接口路由了，但是后端如果想跨域请求其他域名的，就要配置这个
#### 2.routerRoot，打包后访问链接后，后端的tpl需要加的路由，比如 后端tpl路径是 http://www.abc.com/def ，则需要给routerRoot配置/def
----
### mixins
#### 1.page， 混入分页，基于vant的van-list写的，如果需要触底加载，还得另写方法
----
### plugins
#### 1.封装插件的注册
----
### router
#### 1.index，如果固定浏览器窗口title，需要注释动态配置title
#### 2.mmodules/main.js，配置公用路由，第一个配置404比较好
----
### style
#### 1.index，配置主要的全局样式
#### 2.layout，配置常用的样式 
#### 3.transition，配置常用的渐变动画 
----
### utils
#### 1.axios，配置请求相应拦截
##### 请求拦截：config.headers.authority，配置本地调试时的假用户
##### 请求拦截：qs.stringify(config.data)，如果后端POST请求是用表单接收，qs转一下
##### 响应拦截：401，h5活动中用户失去授权，再刷新就可以调微信了，如果不是微信的项目不要这么做
#### 2.wx.js，封装微信sdk授权
#### 3.wx.utils，代理wx.js
##### wechatConfig，需要后端配置jssdk接口，然后在api代理，最后在这调用，名字随便改，不过需要注意接口返回的信息，key值不一定是{ appid, signature, timestamp, noncestr }
----