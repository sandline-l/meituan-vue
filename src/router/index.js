import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/defaultPage.vue'
import blankPage from '@/layout/blank.vue'
import Index from '@/pages/index.vue'
import goodsList from '@/pages/goodsList.vue'
import changeCity from '@/pages/changeCity.vue'
import login from '@/pages/login.vue'
import register from '@/pages/register.vue'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      //根路由映射的组件  , 当路径 '/' 匹配成功, default组件就会被渲染在app组件的router-view中
      // 这是最顶级的路由,这里的 <router-view> 是最顶层的出口，渲染最高级路由匹配到的组件
      //现在defaultpage组件里面又写了路由,这就是子路由,嵌套路由
      path: '/',
      name: 'default',
      component: defaultPage,
      redirect:'/index',
      children:[
        {
          path:'s/:name',
          name:"goods",
          component:goodsList
        },
        {
          path:'index',
          name:'index',
          component: Index
        },
        {
          path:'/changeCity',
          name:'changeCity',
          component:changeCity
        },
      ]
    },
    {
      path:'/blank',
      name:'blank',
      component: blankPage,
      children:[{
        path:'/login',
        name:'login',
        component:login
      },{
        path:'/register',
        name:'register',
        component:register
      }]
    }
  ]
})
