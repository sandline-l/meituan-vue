<template>
    <div class="page-login">
        <div class="login-header">
            <a class="logo" href="http://www.meituan.com"></a>
        </div>
        <div class="login-panel">
            <div class="banner">
                <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" width="480" height="370" alt="美团网">
            </div>
            <div class="form">  
                <h4 v-if="error" class="tips">
                    <i></i>
                    {{error}}
                </h4>
                <p>
                    <span>账号登录</span>
                </p>
                <el-input :class="{error: error&& !userName }" v-model="userName" placeholder="手机号/用户名/邮箱" prefix-icon="profile"></el-input>
                <el-input :class="{error: error&& !password }" v-model="password" placeholder="密码" show-password prefix-icon="password"></el-input>
                <p class="foot">
                    <a>忘记密码</a>
                </p>
                <el-button class="btn-login" @click="ispass">登录</el-button>

                <p class="reg">还没有账号? 
                    <router-link :to="{name:'register'}">免费注册</router-link>
                </p>
                
                <div class="oauth-wrapper">
                    <h3 class="title-wrapper">
                        <span class="title">用合作网站账号登录</span> 
                    </h3>
                    <div class="oauth">
                        <a href="#" class="oauth__link"></a>
                        <a href="#" class="oauth__link--weibo oauth__link"></a>
                    </div>
                </div>
               
            </div>
        </div>
        <footer>
            <ul>
                <li><a href="#">关于美团</a></li>
                <li><a href="#">加入我们</a></li>
                <li><a href="#">商家入驻</a></li>
                <li><a href="#">帮助中心</a></li>
                <li><a href="#">美团手机版</a></li>
            </ul>
            <p>©2019 <a href="#">美团网团购</a> meituan.com <a href="#">京ICP证070791号</a> 京公网安备11010502025545号</p>
        </footer>
    </div>

</template>

<script>
import api from '@/api/index.js'
export default {
    data(){
        return {
            userName:'',
            password:'',
            passflag:false,
            error:''
        }
    },
    created(){
        // api.getLogin().then((res)=>{
        //     console.log(res)
        // })
    },
    methods:{
        ispass(){
            console.log(this.username +''+this.password);
            // if(!this.password){
            //     this.error = '请输入密码';
            // }
            // if(!this.username){
            //     this.error = '请输入账号';
            //     // return false;
            // }
            // if(!this.password && !this.username){
            //     this.error = '请输入账号和密码';
            // }
            // 登录成功,就将登录数据存下来,在首页的用户信息处展示
            api.getLogin({
                    params:{
                        userName: this.userName,
                        password: this.password
                        }
                    }).then((res)=>{
                        if(res.data.status == "success"){
                            console.log(res.data,this.userName)
                            this.$store.commit('setUserinfo',this.userName);
                            this.$router.push({name:'default'});
                        }else{
                            this.error = res.data.msg
                            console.log(res.data)
                        }
                    })
            }
    }
}
</script>

<style lang="scss">
  @import '@/assets/css/login/index.scss'; 
</style>