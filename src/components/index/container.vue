<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{nav.title}}</dt>
      <dd
        v-for="(item,index) in nav.list"
        :class="{active: flag == item.tab}"
        :data-type="item.tab"
        :key="index"
      >{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in listobj[flag]" :key="index">
        <el-card :body-style="{ padding: '0px' }" class="el-card-body" shadow="never">
          <img :src="item.image" class="image">
          <div class="cbody">
            <div class="title">{{item.title}}</div>
            <div class="sub-title">{{item.subtitle}}</div>
            <div class="price-info" >
              <span class="price-symbol">$</span>
              <span class="current-price">{{item.price}}</span>
              <!-- <span
                class="old-price"
                v-if="item.price_info.old_price"
              >门市价${{item.price_info.old_price}}</span> -->
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
            <!-- <div class="price-info" v-else-if="item.price_info.avg_price">
              <span class="price-symbol">$</span>
              <span
                class="current-price"
              >{{item.price_info.avg_price}}</span>
              <span class="units">/人均</span>
            </div> -->
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
import api from '@/api/index.js';
export default {
  data() {
    return {
      flag: "all",
      listobj:{},
      // list: [
      //   {
      //     image:
      //       "//p1.meituan.net/mogu/4aa363a920b92b922cfaa0298bcfbb65101055.jpg@460w_260h_1e_1c",
      //     title: "北京国际饭店.霄云厅",
      //     sub_title: "生日免单自助晚餐",
      //     price_info: {
      //       current_price: 198,
      //       old_price: 297,
      //     },
      //     address: "建国门/北京站"
      //   },
      //   {
      //     image:
      //       "//p1.meituan.net/mogu/345642ad7dd8842b64686bd1d8866eec303549.jpg@460w_260h_1e_1c",
      //     title: "川娇海鲜自助(建国门店)",
      //     sub_title: "海鲜自助午餐",
      //     price_info: {
      //       current_price: 188,
      //       old_price: 228
      //     },
      //     address: "建国门/北京站"
      //   },
      //   {
      //     image:'//p0.meituan.net/poi/c2b482474377fc31a8311f46055f40b0442616.png@460w_260h_1e_1c',
      //     title: "金泉港国际影城",
      //     sub_title: "儿童票",
      //     price_info: {
      //       current_price: null,
      //       avg_price:41
      //     },
      //     address: "昌平镇"
      //   },
      //   {
      //     image:
      //       "//p0.meituan.net/msmerchant/f0f72ccd78773cc5a0156b1c00d588c0961404.jpg@460w_260h_1e_1c",
      //     title: "大董（王府井店）",
      //     sub_title: "海参午市专享套餐,建议6人食用",
      //     price_info: {
      //       current_price: 3960,
      //       old_price: 4517.6
      //     },
      //     address: "王府井/东单"
      //   },
      //   {
      //     image:
      //       "//p1.meituan.net/deal/46d9aae57e2a58019d73a1e7624ce86983140.jpg@460w_260h_1e_1c",
      //     title: "首都电影院(中华店)",
      //     sub_title: "资费购买,中国巨幕厅,杜比全景声厅,60帧厅",
      //     price_info: {
      //       current_price: null,
      //       avg_price:18
      //     },
      //     address: "王府井/东单"
      //   },
      //   {
      //     image:
      //       "//p1.meituan.net/deal/__29661209__6853522.jpg@460w_260h_1e_1c",
      //     title: "中影国际影城(丰台千禧街店)",
      //     sub_title: "免押金",
      //     price_info: {
      //       current_price: null,
      //       avg_price:20
      //     },
      //     address: "王府井/东单"
      //   }
      // ]
    };
  },
  props: ["nav"],
  created(){
    api.getList().then((res)=>{
      // console.log(res)
      this.listobj = res.data.data;
    })
  },
  methods: {
    over(e) {
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if (tagName != "dd") {
        return false;
      }
      this.flag = dom.getAttribute("data-type");
      //动态获取数据, ajax请求
    }
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/index/artistic.scss";
</style>