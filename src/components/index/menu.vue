<template>
    <div class="m-menu" @mouseleave="menuLeave">
        <dl class="nav" >
            <dt>全部分类</dt>
            <dd v-for="(item,index) in menuList" :key="index" @mouseenter="menuEnter(item)" >
                <i :class="item.type"></i>
                {{item.name}}
                <span class="arrow"></span>
            </dd>
        </dl>
        <div class="detail" v-if="curDetail">
            <template v-for="(item,index) in curDetail.items">
                <h2 :key="index">{{item.title}}</h2>
                <span v-for='(v,i) in item.items' :key="i+'_'+v">{{v}}</span>
            </template>
        </div>
    </div>

</template>

<script>
import api from '@/api/index.js';
export default {
    data(){
        return {
            curDetail:null,
            menuList:null,
        }
    },
    created(){
        api.getMenuList().then((res)=>{
            this.menuList = res.data.data;
            // console.log(res.data.data)
        })
    },
    methods:{
        menuEnter(item){
            this.curDetail = item;
        },
        menuLeave(item){
            this.curDetail = null
        }
    }
}
</script>

<style lang='scss'>
    
</style>