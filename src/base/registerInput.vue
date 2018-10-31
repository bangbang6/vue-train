<!--  -->
<template>
  <div v-show='flag' class='register'>
    <div class='shuoming'>{{shuoming}}</div>  
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
          <input type="button" value="去登陆" class='loginB' @click="login">
          <input type="button" value="注册" class='registerB' @click='register'>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
        flag:false,
        password:'',
        username:'',
        shuoming:'注册'
    };
  },

  components: {},

  computed: {},

  mounted: function(){},

  methods: {
    hide(){
        this.flag = false
    },
    show() {
        this.flag = true
    },
    login(){
       this.$emit('toLogin')
    },
    register(){
        //连接数据库
        if(this.username && this.password){
          axios.post('/users/register',{username:this.username,password:this.password}).then(res=>{
              console.log(res)
          })
        }
    }
  }
}

</script>
<style lang='stylus' scoped> 
.register
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