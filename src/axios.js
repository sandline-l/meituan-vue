import axios from 'axios';
// 因为有很多地方有共同的,比如都要给后台传递appkey值,所以在axios中添加一个请求拦截器,使得每一个请求
// 都会给后台发送params参数,包含appkey值
// 添加请求拦截器
axios.defaults.baseURL = 'http://api.duyiedu.com';

axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.params = {
        ...config.params,
        appkey: "sandline_1552875319863"
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });


export default axios;
