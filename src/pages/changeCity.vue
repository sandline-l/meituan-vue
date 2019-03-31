<template>
    <div class="page-changeCity">
        <el-row>
            <province />
        </el-row>
        <el-row>
            <hot :hotlist='hotlist' title='热门城市' />
        </el-row>
        <el-row>
            <hot :hotlist='rencentlist' title='最近访问' />
        </el-row>
        <el-row>
            <categroy />
        </el-row>
    </div>
</template>

<script>
import province from '@/components/changeCity/province.vue';
import hot from '@/components/changeCity/hot.vue';
import categroy from '@/components/changeCity/categroy.vue';
import api from '@/api/index.js';
export default {
    data(){
        return {
            hotlist:[],
            rencentlist:[],
        }
    },
    created(){
        api.getHotCity().then((res)=>{
            this.hotlist = res.data.data.map((item)=>item.name)
        })
        api.getRecentCity().then((res)=>{
            //对数据进行处理, 这样就不用改变结构里面的值了
            this.rencentlist = res.data.data.map((item)=>item.name)
        })
    },
    components:{
        province,
        hot,
        categroy
    }
}
</script>

<style lang='scss'>
    @import '@/assets/css/changecity/iselect.scss';
</style>