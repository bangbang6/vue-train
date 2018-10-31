<!--  -->
<template>
  <div class='tab'>
     
     <router-link tag='div' class="tabItem"  to='/shouye'>首页</router-link>
     <router-link tag='div' class="tabItem"   to='/login'>我的</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    };
  },

  components: {},

  computed: {},

  mounted: function(){},

  methods: {

  }
}

</script>
<style lang='stylus' scoped>
.tab
  width:100%
  height: 40px
  display:flex
  .tabItem
    text-align :center
    height 40px
    flex:1
    margin:0 auto 
    line-height :40px
    font-size :14px
    
    background-color :blue
    
     
  .tabItem
    
    background-color :blue
    text-align :center
    height 40px
    flex:1
    margin:0 auto 
    line-height :40px
    font-size :14px
    &.router-link-active
        color:orange
</style>