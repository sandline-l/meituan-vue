<template>
<!-- 这个是头部组件, 他里面又引入了一些子组件来构成他自己 -->
    <div class="m-header">
        <!-- 使用饿了吗组件库里的布局方式 -->
        <el-row>
            <top-bar />
        </el-row>
        <el-row>
            <search-bar />
        </el-row>
    </div>
</template>

<script>
//在这个组件里 引入他要用到的子组件,  由子组件构成了他这个组件
import topBar from '@/components/header/topBar.vue'
import searchBar from '@/components/header/searchBar.vue'

export default {
    components:{
        topBar,
        searchBar
    }
}
</script>

<style scoped>

</style>