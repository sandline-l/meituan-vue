<template>
  <div :class='["choose-wrap",disabled?"disabled":""]' @click="changeshow" v-document-click="changehide">
    <!-- 这里使用了自定义指令 v-document-click -->
    <div class="choose">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content':true,'active':showflag}">
        <h2>{{title}}</h2>
        <div class="wrapper">
          <div class="col" v-for="(listData,index) in renderList" :key="index">
            <!-- <span :class="{'mt-item':true , 'active': item == value}" v-for="(item,index) in list" :key="index" @click="changeValue(item)">{{item.name}}</span> -->
            <span
              :class="{'mt-item':true , 'active': item.name == value}"
              v-for="(item,index) in listData"
              :key="index"
              @click="changeValue(item)"
            >{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["list", "value", "title", "showflag","disabled"],
  computed:{
        renderList(){
            //对数据分列, 每一列12个数据, 这样的话,省份名单就可以从左向右一列一列的排列了,而不是只排一列
            let col = Math.ceil(this.list.length / 12);
            let listData=[];
            //从list里面截取,每12个为一组,放到数组中
            for(let i = 0;i<col ;i++){
                let data = this.list.slice(i*12, i*12 +12);
                listData.push(data);
            }
            return listData;
        }
  },
  methods: {
    changeshow(e) {
      //取消事件冒泡
      e.stopPropagation();
      //触发父组件里的自定义事件
      //当disabled是false的时候, 才可以点击城市列表
      if(!this.disabled){
        this.$emit("change_active", true);
      }
    },
    changehide() {
      this.$emit("change_active", false);
    },
    changeValue(item) {
      // 点击触发该函数, 该函数里面触发父级的自定义事件, 并将值传递过去
      //为什么要这样做呢,因为要更改该子组件里的value值, 而这个值是父组件传递过来的,所以去父组件里更改传递过来的值
      //并且该子组件在父组件里面复用了
      this.$emit("change", item);

      //点击选择省份之后, 使得省份展示框隐藏 , 好像不行
    //   this.$emit('change_active',false);
    }
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/changecity/select.scss";
</style>