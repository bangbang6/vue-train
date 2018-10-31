<!--  -->
<template>
  <div class='buy'>
      <div class='buyHead'>
          <div class="back" @click='back'>返回</div>
          <div class="cityMes">{{cityMes}}</div>
          <div class="confirm" @click='back'>抢票</div>
      </div>
      <div class="details">
          <div class="detail" v-for='(item,index) in tickets' @click='select(item)'>
              <div class="topT">
                <div class="leftT">
                    <div class="beginTime">{{item.sTime}}</div>
                    <div class="beginCity">{{beginCity.key}}</div>
                </div>
                <div class="time">
                    <div class="totalTime">{{item.tTime}}</div>
                    <div class="checi">{{item.tId}}</div>
                </div>
                <div class="rightT">
                    <div class="endTime">{{item.eTime}}</div>
                    <div class="endCity">{{endCity.key}}</div>
                </div>
              </div>
              <div class="bottomT">
                  <div class="Zleft" v-show='item.wuzuo'>无座:{{item.wuzuo}}</div>
                   <div class="Zleft" v-show='item.scSeat'>二等座:{{item.scSeat}}</div>
                  <div class="Zmiddle" v-show='item.yingzuo'>硬座:{{item.yingzuo}}</div>
                  <div class="Zmiddle" v-show='item.fcSeat'>一等座:{{item.fcSeat}}</div>
                  <div class="Zright" v-show='item.yingwo'>硬卧:{{item.yingwo}}</div>
                  <div class="Zright" v-show='item.bcSeat'>商务座:{{item.bcSeat}}</div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {
      ...mapGetters(['tickets','beginCity','endCity','tickets']),
      cityMes(){
          return this.beginCity.key + '->' +this.endCity.key
      }
  },

  mounted: function(){},

  methods: {
      back(){
          this.$router.back()
      },
      select(item){
         this.setMyTicket(item)
         this.$router.push({
             path:'/buy'
         })
      },
      ...mapMutations({
          setMyTicket:'SETMYTICKET'
      })
  }
}

</script>
<style lang='stylus' scoped>
.buy
   .buyHead
        background-color blue
        color:white
        width:100%
        height:40px
        display:flex
        .back
            flex: 0 0 40px
            line-height:40px
            height 40px
            text-align center
            font-size:14px
        .confirm
            flex: 0 0 40px
            line-height 40px
            height 40px
            text-align center
            font-size:14px
        .cityMes
            flex:1
            text-align center
            font-size:16px
            height 40px
            line-height:40px
    .details 
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
        .bottomT
            font-size 12px
            letter-spacing 1px
            display :flex
            position absolute
            bottom:0
            height 40px
            width:100%
            .Zleft
                flex:1
                text-align:center
                height 40px
                line-height 40px
            .Zmiddle
                flex:1
                text-align:center
                height 40px
                line-height 40px
            .Zright      
                flex:1
                text-align:center
                height 40px
                line-height 40px  
</style>