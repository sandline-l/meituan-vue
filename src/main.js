// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import router from '@/router/index.js'
import '@/assets/css/main.css'
// 引入饿了吗ui组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
/* eslint-disable no-new */

import store from '@/store.js';



// 注册一个全局自定义指令 `document-click`
Vue.directive('document-click', {
  //在第一次绑定的时候会触发这个函数,所以在这个里面绑定document上的点击事件,
  bind(el,binding,vnode){
      // console.log(el)
      //是自定义指令的绑定值
      // console.log(binding.value)
      document.addEventListener('click',binding.value,false);
  }
})


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  
})



