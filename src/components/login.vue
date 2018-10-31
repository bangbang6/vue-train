<!--  -->
<template>
  <div>
      <theader></theader>
      <tab></tab>
      <login-input ref= 'login' @toRegister='register' @closeLogin='closeLogin'></login-input>
      <register-input ref='register' @toLogin='login'></register-input>
      <my-ticket ref='myticket'></my-ticket>
  </div>
</template>

<script>
import Theader from '../base/header.vue'
import Tab from '../base/tab.vue'
import LoginInput from '../base/loginInput'
import RegisterInput from '../base/registerInput.vue'
import myTicket from '../base/myTicket.vue'
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
       
    };
  },

  components: {
       Theader,
        Tab,
        LoginInput,
        RegisterInput,
        myTicket
  },

  computed: {
    ...mapGetters(['username'])
  },

  mounted: function(){
    this.init()
  },

  methods: {
    init(){
       if(this.username){
         this.$refs.login.hide()
         this.$refs.register.hide()
         this.$refs.myticket.show()
       }
    },
    register(){
        this.$refs.login.hide()
        this.$refs.register.show()
    },
    login(){
        this.$refs.login.show()
        this.$refs.register.hide()
    },
    closeLogin(){
      this.$refs.login.hide()
      this.$refs.myticket.show()
    }
  }
}

</script>
<style lang='stylus' scoped>
</style>