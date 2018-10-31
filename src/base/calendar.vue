<!--  -->
<template>
 <transition name='slide'>
  <div class='calendar' v-show='calendarShow'>
      <input type="text" class='inputMes' placeholder="请输入日期 xx月xx日" v-model="date">
      <input type="button"  class='inputButton' value="确定" @click='confirm'>
  </div>
 </transition>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  data () {
    return {
        date:"",
        calendarShow:false
    };
  },

  components: {},

  computed: {},

  mounted: function(){},

  methods: {
      confirm(){
       this.setDate(this.date)
       this.calendarShow = false
      },
      show(){
       this.calendarShow = true
      },
      hide(){
       this.calendarShow = false
      },
      ...mapMutations({
          setDate:'SETDATE'
      })
  }
}

</script>
<style lang='stylus' scoped>
.calendar
  width:80%
  left:10%
  height:100px
  position :fixed
  top:calc(50% - 50px)
  background-color :#ccc
  &.slide-enter-active,&.slider-leave-active
    transition :all 0.4s
  &.slide-enter,&.slider-leave-to 
    opacity 0
    
    transfrom:translate3d(0 ,-100px, 0)  
  .inputMes
    width:60%
    height 20px
    top:40px
    position absolute
    left:10%
    padding:0 10px 
  .inputButton
    width:15%
    position absolute
    top:40px
    height 24px
    background-color blue
    right:2%
</style>