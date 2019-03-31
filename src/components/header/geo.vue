<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location"/>
      {{$store.state.position.name}}
      <!-- 这里是头部组件的子组件,这里有一个路由跳转,跳转到changecity页面,也就是将主体部分的路由出口渲染成别的组件 -->
      <router-link class="changeCity" :to="{name:'changeCity'}">切换城市</router-link>[
      <a href="#" v-for="(item,index) in nearCity" :key="index">{{item.name}}</a>
      ]
    </div>
    <div class="m-user" v-if="!$store.state.userName">
      <router-link class="login" :to="{name:'login'}">立即登陆</router-link>
      <router-link class="register" :to="{name:'register'}">注册</router-link>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      nearCity: []
    };
  },
  watch:{
      //监听已有属性的变化,
      '$store.state.position': function (){
          this.nearCity = this.$store.state.position.nearCity;
      }
  },
  created() {
    api.getPosition().then(res => {
      this.$store.dispatch("setPosition", res.data.data);
      this.nearCity = res.data.data.nearCity;
    });
  }
};
</script>



