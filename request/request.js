import axios from 'axios'
export default ({
	base_url = '',
	success,
	error
}) => {
	/*
	 *生产环境的api地址。
	 *vue.config.js 同时设置代理地址
	 module.exports = {
		devServer: {
			proxy: 'https://tp6.com/api.blog/'
		}
	 }
	 */
	if (process.env.NODE_ENV !== 'development') {
		axios.defaults.baseURL = base_url
	}

	//请求拦截
	axios.interceptors.request.use(request => {
		request.headers = {
			token:localStorage.getItem('token'),
			...request.headers
		}
		return request
	}, error => {
		return new Promise.reject(error)
	})

	//响应拦截
	axios.interceptors.response.use(res => {
		//成功，HTTP状态：200
		//必须返回一个新的promise，否则这里走的通道都是then
		return new Promise((resolve, reject) => {
			success(resolve,reject,res)
		})

	}, err => {
		//失败，HTTP状态：200以外的
		error(err)
		//直接return走的是then通道，需要Promise.reject才会走catch通道
		return Promise.reject(err)
	})


	return axios
}