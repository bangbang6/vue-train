<!--  -->
<template>
  <div class='myticket' v-show='flag'> 
     <div class="detail" v-for='(item,index) in tickets' >
              <div class="topT">
                <div class="leftT">
                    <div class="beginTime">{{item.sTime}}</div>
                    <div class="beginCity">{{item.beginCity.key}}</div>
                </div>
                <div class="time">
                    <div class="totalTime">{{item.tTime}}</div>
                    <div class="checi">{{item.tId}}</div>
                </div>
                <div class="rightT">
                    <div class="endTime">{{item.eTime}}</div>
                    <div class="endCity">{{item.endCity.key}}</div>
                </div>
                <div class="button" @click='reserve(item)'>
                  <div class="reserve">退票</div>
                  <div class="seat">{{item.seat}}</div>
              </div>
              </div>
              
          </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapGetters,mapMutations} from 'vuex'
export default {
  data () {
    return {
      tickets : [],
      flag:false
    };
  },

  components: {},

  computed: {
    ...mapGetters(['username'])
  },

  mounted: function(){
    this.getTickets()
  },

  methods: {
   getTickets(){
          if(this.username){
          console.log(12)
        axios.get('/users/allTickets',{params:{username:this.username}}).then(res=>{
          console.log(res)
        if(res.data.status  =='0') {this.tickets = res.data.result;console.log(res) }

        
      })
    }
   },
    reserve(item){
      let data = {
        username:this.username,
        ticket:item
      }
        axios.post('/tickets/reserve',data).then(res=>{
          console.log(res)
        })
         if(this.username){
          console.log(1)
        axios.get('/users/allTickets',{params:{username:this.username}}).then(res=>{
          console.log(res)
        if(res.data.status  =='0') {this.tickets = res.data.result;console.log(res) }

        
      })
    }
    },
    hide(){
      this.flag = false
    },
    show(){
      this.flag = true
    },
    
  },
  watch:{
    username(newU){
      console.log(newU)
        if(newU){
          console.log(1)
        axios.get('/users/allTickets',{params:{username:newU}}).then(res=>{
          console.log(res)
        if(res.data.status  =='0') {this.tickets = res.data.result;console.log(res) }

        
      })
    }
    }
    
  }
}

</script>
<style lang='stylus' scoped>
.myticket
  width:100%
  .detail
        width:100%
        height 100px
        margin-bottom:5px
        background-color #cccccc
        position relative
        .topT
            position absolute
            top:0
            width:100%
            height 100px
            display flex
            .leftT
                flex:1
                height 100px
                .beginTime
                    width:100%
                    height 50px
                    text-align:center
                    line-height 50px
                .beginCity
                    width:100%
                    height 50px
                    text-align:center
                    line-height 50px   
            .time
                flex:1
                height 100px
                .totalTime
                    width:100%
                    height 50px
                    text-align:center
                    line-height 50px
                .checi
                    width:100%
                    height 50px
                    text-align:center
                    line-height 50px
            .rightT
                flex:1
                height 100px
                .endTime
                    width:100%
                    height 50px
                    text-align:center
                    line-height 50px
                .endCity
                    width:100%
                    height 50px
                    text-align:center
                    line-height 50px 
            .button
                flex:1
                height 100px
                .reserve
                  text-align :center
                  color:blue
                  height:50px
                  line-height 50px     
                .seat
                  text-align :center
                  color:blue
                  height:50px
                  line-height 50px       
</style>