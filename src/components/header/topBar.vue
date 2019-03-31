<template>
    <el-row class="m-header-topbar m-header">
        <el-col :span="10">
            <geo />
        </el-col>
        <el-col :span="14">
            <m-nav />
        </el-col>
    </el-row>
</template>

<script>
//在这个组建里面又引入了 子组件
import geo from '@/components/header/geo'
import MNav from '@/components/header/nav'
export default {
    components:{
        geo,
        MNav
    }
}
</script>

<style lang='scss'>
    @import '@/assets/css/public/header/topbar.scss';
</style>