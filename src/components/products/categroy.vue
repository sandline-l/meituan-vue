<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="(item,index) in selectList" :key="index">
        <my-selecte :name='item.title' :list='item.subList' />
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="(item,index) in zoneList" :key="index">
        <my-selecte :name='item.title' :list='item.subList' />
      </dd>
    </dl>
  </div>
</template>

<script>
import mySelecte from '@/components/products/selecte'
export default {
    data(){
        return {
                selectList:[{
                        "title": "美食",
                        "type": "food",
                        "subList": [{
                            "name": "日本菜",
                            "id": "Japan"
                        }]
                    }, {
                        "title": "酒店住宿",
                        "type": "hotal",
                        "subList": [{
                            "name": "温泉酒店",
                            "id": "hot_spring"
                        }]
                    }],
                zoneList:[{
                        "title": "推荐商圈",
                        "subList": [{
                              "name": "望京",
                                "id": 120000
                            }, {
                                "name": "昌平",
                                "id": 12222
                            }]
                        }]
                }
            },
    components:{
        mySelecte,
    }
}
</script>

<style scoped>
</style>