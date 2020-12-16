import request from '@/utils/api.request'

/*
* 获取用户信息
* */
export function getUserInfo(data) {
  return request({
    url: '/activity-api/pmd/userInfo',
    method: 'get',
    data
  })
}

/*
* 检测用户关注与填写信息
* */
export function getConfig(data) {
  return request({
    url: '/activity-api/pmd/checkActivityConfig',
    method: 'get',
    data
  })
}

/*
* 获取活动关注二维码
* */
export function getFollowQRcode(data) {
  return request({
    url: '/activity-api/pmd/getFollowQRcode',
    method: 'get',
    data
  })
}
