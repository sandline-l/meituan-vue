
// 这里是从axios.js文件 来引入axios的, 也就是说, 这个axios已经是被处理了的,
import axios from '@/axios.js';

let api = {
    search(params){
        return axios.get('/api/meituan/header/searchHotWords.json',params)
    },
    searchList(){
        return axios.get('/api/meituan/header/search.json')
    },
    getMenuList(){
        return axios.get('/api/meituan/index/nav.json')
    },
    getList(){
        return axios.get('/api/meituan/index/resultsByKeywords.json')
    },
    getGoodList(){
        return axios.get('/api/meituan/list/goodsList.json')
    },
    getLikeList(){
        return axios.get('/api/meituan/list/recommend.json')
    },
    getCityList(){
        return axios.get('/api/meituan/city/cityList.json')
    },
    getProvince(){
        return axios.get('/api/meituan/city/province.json')
    },
    getHotCity(){
        return axios.get('/api/meituan/city/hot.json')
    },
    getRecentCity(){
        return axios.get('/api/meituan/city/recents.json')
    },
    getPosition(){
        return axios.get('/api/meituan/city/getPosition.json')
    },
    getLogin(params){
        return axios.get('/api/meituan/login',params)
    },
    getRegister(params){
        return axios.get('/api/meituan/register',params)
    }
   
}

export default api;

