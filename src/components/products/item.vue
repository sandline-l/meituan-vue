<template>
  <dl class="s-item">
    <dt>
      <img :src="list.image" alt="图片">
    </dt>
    <dd>
      <h3>{{list.title}}</h3>
      <p>
        <span>
          <el-rate
            v-model="list.score"
            disabled
            text-color="#ff9900"
          ></el-rate>
        </span>
        <span v-if="list.score > 4.5">很好</span>
        <span v-else-if="list.score > 4">好</span>
        <span v-else-if="list.score > 3.5">不错</span>
        <span v-else-if="list.score > 3">一般</span>
        <span v-else>一般</span>
        <span>{{list.score}}分</span>
        <span class="s-item-comment-total">{{list.commentNum}}评论</span>
      </p>
      <p>
          <span class="s-item-tab">
              <span v-for="(v,i) in list.tab" :key="i">{{v + ( list.tab.length>i ? '' : '|' )}}</span>
          </span>
          <span class="s-item-addr">{{list.address}}</span>
          <span>
              <a href="#">
                  <i class="el-icon-location"></i>
                  查看地图
              </a>
          </span>
        </p>
      <p class="s-item-price">￥{{list.avgPrice}}</p>
      <ul class="deal-items">
        <li class="items" v-for="(item,index) in list.dealItems.slice(0,2)" :key="index">
              <p class="deal-title">{{item.title}}</p>
              <p>
                  <span class="deal-price">￥{{item.price}}</span>
                  <span class="deal-old-price">门市价￥{{item.counterPrice}}</span>
                  <span class="deal-sales">已售{{item.saleNum}}</span>
              </p>
        </li>
      </ul>
    </dd>
  </dl>
</template>

<script>
export default {
  created() {
    console.log(this.list);
  },
  props: ["list"]
};
</script>

<style scoped>
</style>