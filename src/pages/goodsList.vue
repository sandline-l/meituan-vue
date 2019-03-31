<template>
    <div class="page-product">
        <el-row class="m-crumbs">
            <my-crumb />
        </el-row>
        <el-row>
            <el-col :span="19">
                <el-row>
                    <categroy />
                </el-row>
                <el-row>
                    <my-list />
                </el-row>
            </el-col>
            <el-col :span="5">
                <my-like />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import myLike from '@/components/products/like.vue'
import myCrumb from '@/components/products/crumb.vue'
import categroy from '@/components/products/categroy.vue'
import myList from '@/components/products/list.vue'

export default {
    components:{
        myLike,
        myCrumb,
        categroy,
        myList
    }
}
</script>

<style lang='scss'>
    @import '@/assets/css/products/index.scss';
</style>