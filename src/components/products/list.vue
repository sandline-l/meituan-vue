<template>
  <div class="m-products-list">
    <ul>
      <li
        v-for="(item,index) in nav"
        :key="item.key+index"
        :class="{'s-nav-active':item.active}"
      >{{item.name}}</li>
    </ul>
    <el-row>
      <item :list="item" v-for="(item,index) in goodList" :key="index"/>
    </el-row>
  </div>
</template>

<script>
import api from "@/api/index.js";
import item from "@/components/products/item.vue";
export default {
  components: {
    item
  },
  data() {
    return {
      nav: [
        {
          key: "s-zhinen",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格排序",
          active: false
        },
        {
          key: "s-people",
          name: "人气最高",
          active: false
        },
        {
          key: "s-score",
          name: "评价最高",
          active: false
        }
      ],
      goodList: []
    };
  },
  created() {
    api.getGoodList().then(res => {
      console.log(res.data.data);
      this.goodList = res.data.data;
    });
  }
};
</script>

<style scoped>
</style>