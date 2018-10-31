<!--  -->
<template>
        <div class="buyDetail">
           <div class='detailHeader'>
             
            <div class="back" @click='back'>返回</div>
            <div class="cityMes">车次详情</div>
            <div class="confirm"></div>
           </div>
           <div class="citys">
                <div class="topT">
                <div class="leftT">
                    <div class="beginTime">{{myticket.sTime}}</div>
                    <div class="beginCity">{{beginCity.key}}</div>
                </div>
                <div class="time">
                    <div class="totalTime">{{myticket.tTime}}</div>
                    <div class="checi">{{myticket.tId}}</div>
                </div>
                <div class="rightT">
                    <div class="endTime">{{myticket.eTime}}</div>
                    <div class="endCity">{{endCity.key}}</div>
                </div>
              </div>
           </div>
           <div class="tickets">
               
                  <div class="Zleft" v-show='myticket.wuzuo'>
                      <div class="name">
                          无座
                      </div>
                      <div class="number">
                        {{myticket.wuzuo}}
                      </div>
                      <div class="button" @click='confirm("无座")'>
                        购买
                      </div>
                   </div>
                   <div class="Zleft" v-show='myticket.scSeat'>
                       <div class="name">
                          二等座
                      </div>
                      <div class="number">
                        {{myticket.scSeat}}
                      </div>
                      <div class="button"  @click='confirm("二等座")'>
                        购买
                      </div>
                   </div>
                  <div class="Zmiddle" v-show='myticket.yingzuo'>
                      <div class="name">
                          硬座
                      </div>
                      <div class="number">
                        {{myticket.yingzuo}}
                      </div>
                      <div class="button"  @click='confirm("硬座")'>
                        购买
                      </div>
                  </div>
                  <div class="Zmiddle" v-show='myticket.fcSeat'>
                      <div class="name">
                          一等座
                      </div>
                      <div class="number">
                        {{myticket.fcSeat}}
                      </div>
                      <div class="button" @click='confirm("一等座")'>
                        购买
                      </div>
                  </div>
                  <div class="Zright" v-show='myticket.yingwo'>
                       <div class="name">
                          硬卧
                      </div>
                      <div class="number">
                        {{myticket.yingwo}}
                      </div>
                      <div class="button" @click='confirm("硬卧")'>
                        购买
                      </div>
                  </div>
                  <div class="Zright" v-show='myticket.bcSeat'>
                       <div class="name">
                          商务座
                      </div>
                      <div class="number">
                        {{myticket.bcSeat}}
                      </div>
                      <div class="button"  @click='confirm("商务座")'>
                        购买
                      </div>
                  </div>
           </div>
        </div>
 
</template>

<script>
import {mapGetters} from 'vuex'
import axios from 'axios'
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {
      ...mapGetters(['myticket','beginCity','endCity','username'])
  },

  mounted: function(){
      
  },

  methods: {
      back(){
          this.$router.back()
      },
      confirm(str){
          //数据库操作
          let ticket={...this.myticket,beginCity:this.beginCity,endCity:this.endCity,seat:str}

          let data = {
            username:this.username,
            ticket:ticket
          }
          axios.post('/tickets/buy',data).then(res=>{
            console.log(res)
          })
          this.$router.push({
              path:'/'
          })
      }
  }
}

</script>
<style lang='stylus' scoped>
.buyDetail
    .detailHeader
        color:white
        width:100%
        height:40px
        display:flex
        background-color blue
        .back
            flex: 0 0 40px
            line-height:40px
            height 40px
            text-align center
            font-size:14px
  
        .cityMes
            flex:1
            text-align center
            font-size:16px
            height 40px
            line-height:40px
        .confirm
            flex: 0 0 40px
            line-height 40px
            height 40px
            text-align center
            font-size:14px    
    .citys
            width:100%
            .topT
                background-color blue
                color:white
                top:0
                width:100%
                height 60px
                display flex
                .leftT
                    flex:1
                    height 60px
                    .beginTime
                        width:100%
                        height 30px
                        text-align:center
                        line-height 30px
                    .beginCity
                        width:100%
                        height 30px
                        text-align:center
                        line-height 30px   
                .time
                    flex:1
                    height 60px
                    .totalTime
                        width:100%
                        height 30px
                        text-align:center
                        line-height 30px
                    .checi
                        width:100%
                        height 30px
                        text-align:center
                        line-height 30px
                .rightT
                    flex:1
                    height 60px
                    .endTime
                        width:100%
                        height 30px
                        text-align:center
                        line-height 30px
                    .endCity
                        width:100%
                        height 30px
                        text-align:center
                        line-height 30px     
    .tickets
        width:100%
        
        .Zleft
            margin-top:20px
            width:100%
            height:60px
            display flex
            .name  
                flex:1
                height 60px
                text-align center
                line-height 60px
            .number    
                flex:1
                height 60px
                text-align center
                line-height 60px  
            .button
                flex:1
                height 60px
                text-align center
                line-height 60px  
                color:white
                background-color blue  
        .Zmiddle
            width:100%
            height:60px
            display flex
            margin-top:20px
            .name  
                flex:1
                height 60px
                text-align center
                line-height 60px
            .number    
                flex:1
                height 60px
                text-align center
                line-height 60px  
            .button
                flex:1
                height 60px
                text-align center
                line-height 60px  
                color:white
                background-color blue     
        .Zright
            width:100%
            height:60px
            display flex
            margin-top:20px
            .name  
                flex:1
                height 60px
                text-align center
                line-height 60px
            .number    
                flex:1
                height 60px
                text-align center
                line-height 60px  
            .button
                flex:1
                height 60px
                text-align center
                line-height 60px  
                color:white
                background-color blue              
</style>