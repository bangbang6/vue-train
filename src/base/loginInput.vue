<!--  -->
<template>
  <div class='login' v-show='flag'>
    <div class="shuoming">{{shuoming}}</div>
      <div class="username">
            <div class="usermes">昵称:</div>
            <div class="userInput">
              <input type="text" name=""  placeholder="请输入用户名" v-model='username'>
            </div>
      </div>
       <div class="password">
            <div class="passwordmes">密码:</div>
            <div class="passwordInput">
                  <input type="password" name=""  placeholder="请输入密码" v-model="password">
            </div>
            
      </div>
      <div class="button">
          <input type="button" value="登录" class='loginB' @click="login">
          <input type="button" value="注册" class='registerB' @click='toRegister'>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapMutations} from 'vuex'
export default {
  data () {
    return {
      username:'',
      password:'',
      flag:true,
      shuoming:'登录'
    };
  },

  components: {},

  computed: {},

  mounted: function(){},

  methods: {
    hide(){
        this.flag = false
    },
    show(){
        this.flag = true
    },
    login(){
      if(this.username && this.password){
        axios.post('/users/login',{username:this.username,password:this.password}).then(res=>{
            console.log(res)
           if(res.data.status == '0'){
               this.setUsername(res.data.result)
               this.$emit('closeLogin')
           }
        })
      }
    },
    toRegister(){ 
      this.$emit('toRegister')
    },
    ...mapMutations({
        setUsername:'SETUSERNAME'
    })
  }
}

</script>
<style lang='stylus' scoped>
.login
    width:100%
    margin-top:20px
    background-color #ccc
    .shuoming
        width:100%
        color:white
        text-align:center
        height 60px
        line-height 60px
        font size 16px
        letter-spacing :2px
    .username  
        display flex
        height:60px
        width:100%
        
        .usermes
            flex :0,0,60px
            height:60px
            text-align center
            margin-left:40px
        .userInput
            flex:1 
            height 60px
            padding : 0 10px  
            margin-left:10px 
    .password  
        display flex
        height:60px
        width:100%
        .passwordmes
            margin-left:40px   
            flex :0,0,60px
            height:60px
            text-align center
        .passwordInput
            flex:1 
            height 60px
            padding : 0 10px
            margin-left:10px
    .button
        display flex
        width:100%
        height 60px
        justify-content center
    .loginB,.registerB
        flex :0 0 100px
        height 30px
        line-height  30px
        background-color blue
        color:white
        text-align center
        margin : 0 20px
    
            
                       
</style>