<template>
<!-- 这个组件是根路由匹配的组件,他里面引入了头部和尾部,还有一个主体部分的路由出口 -->
  <div class="layout-default">
    <el-container>
      <el-header height=''>
        <my-header />
      </el-header>
      <el-main>
        <!-- 该默认页面被渲染到app里的路由里了, 然后这里还有一个路由出口, 那么就是将该路由下的子路由匹配
        到的组件渲染到这里
        根路由的出口在app.vue里面,    根路由下的 子路由的出口在这里 ,着也就是路由嵌套
        之后再要想向主体部分加东西(也就是公用头和尾),那么就是将组件写在pages下面, 
        然后将路由配置在根路由下面的子路由中 
        根据不同的子路由,在该路由出口渲染不同的组件-->
        <router-view /> 
      </el-main>
      <el-footer height=''>
        <my-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
//引入头部组件, 在该布局页面 引入子组件,
import MyHeader from '@/components/header/index.vue';
import MyFooter from '@/components/footer/index.vue';

export default {
  components:{
    MyHeader,
    MyFooter
  }
};
</script>

<style lang="scss">
//  引入css样式文件
  @import '@/assets/css/public/layout.scss';
</style>