<template>
  <div>按省份选择:
    <m-select
      :list="provinceList"
      title="省份"
      :value="province"
      :showflag="provinceflag"
      @change_active="changeprovinceflag"
      @change ="changeProvince"
    />
    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      :showflag="cityflag"
      @change_active="changecityflag"
      @change ="changeCity"
      :disabled='citydisabled'
    />
    <span>直接搜索:</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import MSelect from "./select.vue";
import api from '@/api/index.js';
export default {
  data() {
    return {
      provinceList: [],
      province: "省份",
      city: "城市",
      cityList: [],
      //父组件传值给子组件,控制子组件的class
      provinceflag: false,
      cityflag: false,
      searchList:["罗田", "武汉", "九江", "内江", "潜江", "仙桃"],
      searchWord:'',
      loading:false,
      citydisabled:true,
    };
  },
  created(){
    //获取城市信息
    // api.getCityList().then((res)=>{
    //   this.cityList = res.data.data;
    // })
    //获取省份信息
    api.getProvince().then((res)=>{
      //这里对数据进行处理,使得该数据里面的name 等于 provinceName 的值,
      this.provinceList = res.data.data.map((item)=>{
          item.name = item.provinceName;
          return item;
        })
    })
  },
  methods: {
    //点击了哪一个子组件, 就将触发哪一个上面的自定义事件,
    // (而并不是同时触发两个自定义事件,,虽然这个自定义事件是同名的)
    //通过其他绑定的数据,也可以看出来,虽然是一个组件使用了两遍, 但是他们是相互独立的,给他们传递的值也是不同的
    changeprovinceflag(flag) {
      this.provinceflag = flag;
      if (flag) {
        this.cityflag = false;
      }
    },
    changecityflag(flag) {
      this.cityflag = flag;
      if (flag) {
        this.provinceflag = false;
      }
    },
    remoteMethod(val){
        //请求后端接口, 这个的val 就是你搜索时输入的值
        // console.log(val)
    },
    changeProvince(item){
      this.province = item.name;
      this.cityList = item.cityInfoList;
      this.citydisabled = false;
    },
    changeCity(item){
      this.city = item.name;
      this.$store.dispatch('setPosition',item);
      //点击选择一个城市之后, 跳转到首页
      this.$router.push({name:"default"});
      
    }
  },
  components: {
    MSelect
  }
};
</script>

<style scoped>
</style>