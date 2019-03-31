<template>
  <div class="my-like">
    <img src="#" alt="我是地图" class="my-img">
    <div class="my-like-content">
      <h2>猜你喜欢</h2>
      <div v-for="(item,index) in list" :key="index" class="content-list">
        <img src="http://p0.meituan.net/msmerchant/b34690f52ebdda221e4153c35878de8c2243192.jpg@275w_156h_1e_1c" alt="">
        <p>{{item.title}}</p>
        <p>
          <el-rate v-model="item.score" disabled text-color="#ff9900"  score-template="{item.score}"></el-rate>
          <span class="comment-total">{{item.commentNum}}评价</span>
        </p>
        <p class="areaName">{{item.areaName}}</p>
        <p class="avgPrice">￥<span>{{item.avgPrice}}</span> 起</p>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
    data(){
        return {
            list:[],
            value:null
        }
    },
//   props: ["list"],
  created(){
      api.getLikeList().then((res)=>{
          this.list = res.data.data;
          //因为数据里面的score 是字符串类型的值，在这里将它转化为数字类型
          //数据里面的imgUrl  链接失效了，改用其他的链接代替
           this.list.forEach((item,index)=>{
              item.score = Number(item.score)
            })
      })
  }
};
</script>

<style lang='scss'>
  @import '@/assets/css/products/like.scss';
</style>