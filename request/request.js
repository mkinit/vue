import axios from 'axios'

const env = process.env.NODE_ENV
const dev = env !== 'production'
axios.defaults.baseURL = dev ? '' : 'https://js2api.com/js2-json/v1/'

/*
 * 跨域代理
 * vue.config.js 
 module.exports = {
	devServer: {
		proxy: 'https://tp6.com/api.blog/'//生产环境api地址，开启代理时，axios.defaults.baseURL必须为空
	}
 }
 */

//请求拦截
axios.interceptors.request.use(request => {
	request.headers = {
		...request.headers
	}
	if (localStorage.getItem('token') || sessionStorage.getItem('token')) {
		request.headers.token = localStorage.getItem('token') || sessionStorage.getItem('token')
	}
	return request
}, error => {
	return new Promise.reject(error)
})

//响应拦截
axios.interceptors.response.use(res => {
	//成功，HTTP状态：200
	return Promise.resolve(res)
}, err => {
	//失败，HTTP状态：200以外的
	console.log('状态码：', err.response.data.code)
	console.log('自定义错误信息：', err.response.data.msg)
	return Promise.reject(err)
})

export default axios
