<template>
  <div class="category">
    <dl class="m-category">
      <dt>按拼音首字母选择:</dt>
      <dd v-for="(item,index) in list" :key="index">
        <!-- 注意这里的a标签里要写 # ,为什么呢? -->
        <a :href="'#city-'+item">{{item}}</a>
      </dd>
    </dl>
    <dl
      class="m-category-section"
      v-for="(item,index) in citygroup"
      :key="index"
      :id="'city-'+index"
    >
      <dt>{{index}}</dt>
      <dd>
        <span @click="changeCity(city)" v-for="city in item" :key="city.id">{{city.name}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      list: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      citygroup: {},
      data: []
    };
  },
  methods:{
      changeCity(city){
        //   console.log(city)
          this.$store.dispatch('setPosition',city)
          this.$router.push({name:'default'})
      }
  },
  created() {
    //数据处理要在 数据请求成功后的函数里面做,
    api.getCityList().then(res => {
      // console.log(res.data.data);
      this.data = res.data.data;
    //   console.log(this.data);
      let obj = {};
      this.data.forEach((item, index) => {
        if (!obj[item.firstChar.toUpperCase()]) {
          obj[item.firstChar.toUpperCase()] = [];
        }
        obj[item.firstChar.toUpperCase()].push(item);
      });
      this.citygroup = obj;
    //   console.log(this.citygroup);
    });
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/changecity/category.scss";
</style>