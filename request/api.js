import http from '../request.js'
const request = http({
  base_url: 'http://baidu.com/',//生产环境的请求地址
  success: (resolve, reject, res) => {//200的状态
    switch (res.statusCode) {
      case 0:
        resolve(res);
        break
      case 1: //统一处理错误的问题
        reject(res)
        break
      default:
        reject(res)
    }
  },
  error: err => {//200以外的状态
    switch (err.response.status) {
      case 301:
        console.log(301)
        break
      case 401:
        console.log('未授权')
        break
      default:
        console.log('其他错误')
    }
  }
})

export const getInfo = () => {
  return request.get('test', {
    headers: {//额外的头部
      'custom': 'abcdefghijklmnopqrstuvwxyz'
    }
  })
}