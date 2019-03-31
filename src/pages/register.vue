<template>
  <div class="page-register">
    <div class="header">
      <header>
        <a href="#" class="site-logo"></a>
        <div class="login">
          <span>已有美团账号？</span>
          <router-link :to="{name:'login'}">登录</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form
        :model="registerForm"
        status-icon
        :rules="rules"
        ref="registerForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input type="text" v-model="registerForm.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="创建密码" prop="password">
          <el-input @input="input" type="password" v-model="registerForm.password" autocomplete="off"></el-input>
          <div class="pw-strengths">
            <div :class="['bar',strengthClass]"></div>
            <div class="letter">
              <span>弱</span>
              <span>中</span>
              <span>强</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input type="password" v-model="registerForm.rePassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('registerForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <footer>
      <span>©meituan.com 京ICP证070791号 京公网安备11010502025545号</span>
    </footer>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if(value.length<4 || value.length >16){
        callback(new Error("用户名必须为6-16位的字母数字下划线组成"));
      }else {
        // if (this.registerForm.userName !== "") {
        //   this.$refs.registerForm.validateField("userName");
        // }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }else if(value.length<4 || value.length >16){
        callback(new Error("密码必须为6-16位的字母数字下划线组成"));
      }else {
        // if (this.registerForm.password !== "") {
        //   this.$refs.registerForm.validateField("password");
        // }
        callback();
      }
    };
    var validatePass3 = (rule, value, callback) => {
        console.log(value, this.registerForm.password, this.registerForm.rePassword)
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        userName: "",
        password: "",
        rePassword: ""
      },
      strengthClass: "",
      rules: {
        userName: [{ validator: validatePass, trigger: "blur" }],
        password: [{ validator: validatePass2, trigger: "blur" }],
        rePassword: [{ validator: validatePass3, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
        // console.log(this.password , this.rePassword)
        //这里是提交验证, 当验证全部通过了,valid 就为true , 然后就可以请求数据,注册成功就跳转到登录页
         this.$refs[formName].validate((valid) => {
          if (valid) {
            api.getRegister({
                params:this.registerForm
            }).then((res)=>{
                if(res.data.status == "success"){
                    this.$router.push({name:'login'})
                }
            })
          } else {
              alert(res.data.msg)
            // return false;
          }
        });
    },
    input(){
        if(this.registerForm.password.length>12){
            this.strengthClass = 'strong'
        }else if(this.registerForm.password.length>8){
            this.strengthClass = 'normal'
        }else{ 
            this.strengthClass = 'week'
        }
    }
  }
};
</script>

<style lang=scss>
@import "@/assets/css/register/index.scss";
</style>