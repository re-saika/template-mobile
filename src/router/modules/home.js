export default [
  {
    path: '/',
    name: '_home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      hideInMenu: true,
      title: '主页'
    }
  }
]
