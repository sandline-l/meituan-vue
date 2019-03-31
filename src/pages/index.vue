<template>
<!-- index是首页 ,  头部和尾部是公共部分, 这个组件是首页的内容组件, 不包括头部和尾部,因为他们是公共部分
    在首页组件里, 又使用了其他的子组件 来构成首页组件, 主页面的组件放在pages文件夹下
    主页面组件用到的子组件放在components文件夹下, 起一个相应名字的文件夹存放,便于管理
     公共组件放在了layout文件夹下, 也就是放了头部-->
<div class="page-index">
    <el-row>
        <el-col :span="5">
            <m-menu />
        </el-col>
        <el-col :span="19">
            <m-lift />   
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24">
            <m-container :nav='navList'/>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24">
            <m-container :nav='commont'/>
        </el-col>
    </el-row>
</div>

</template>

<script>
import MMenu from '@/components/index/menu.vue';
import MLift from '@/components/index/lift.vue';
import MContainer from '@/components/index/container.vue';
export default {
    data(){
        return {
            navList:{
                class:'istyle',
                title:'有格调',
                list:[{
                    text:'全部',
                    tab:'all'
                },{
                    text:'约会聚餐',
                    tab:'food'
                },{
                    text:'丽人SPA',
                    tab:'spa'
                },{
                    text:'电影演出',
                    tab:'movie'
                },{
                    text:'品质出游',
                    tab:'travel'
                }]
            },
            commont:{
                class:'movie',
                title:'猫眼电影',
                list:[{
                    text:'正在热映',
                    tab:'all'
                },{
                    text:'即将上映',
                    tab:'waiting'
                }]
            }
        }
    },
    components:{
        MMenu,
        MLift,
        MContainer
    }
}
</script>

<style lang='scss'>
    @import '@/assets/css/index/index.scss';
</style>