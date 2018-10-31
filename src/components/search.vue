<!--  -->
<template>
  <div class='search'>
      <theader></theader>
      <tab></tab>
      <div class="citys">
          <div class="leftCity" @click='selectCity("left")'>{{ this.beginCity.key?  this.beginCity.key: this.beginCity}}</div>
          <div class="circle">至</div>
          <div class="rightCity" @click='selectCity("right")'>{{ this.endCity.key?  this.endCity.key: this.endCity}}</div>
      </div>
      <div class="calendar" @click='changeDate'>{{date}}</div>
      <div class="button" @click='search'>查询</div>
      <calendar ref='calendar'></calendar>
  </div>
</template>

<script>
import Theader from '../base/header.vue'
import Tab from '../base/tab.vue'
import {mapGetters,mapMutations} from 'vuex'
import Calendar from '../base/calendar.vue'
import {getTrains} from '../api/train.js'
export default {
  data () {
    return {
        trainDetatilArr:[],
        tickects:[]
    };
  },

  components: {
      Theader,
      Tab,
      Calendar
  },

  computed: {
      ...mapGetters(['date','beginCity','endCity'])
  },

  mounted: function(){},

  methods: {
      selectCity(str){
          let name = ''
        if(str == 'left'){
          name='出发站'
        }else{
           name='到达站'
        }  
          this.$router.push({
              path:'/city',
              query:{
                name
              }
          })
      },
      changeDate(){
          this.$refs.calendar.show()
      },
      search(){
          if(this.beginCity == '请选择' || this.endCity == "请选择") return
          let tickects = []
          if(JSON.stringify(this.beginCity)!="{}" &&JSON.stringify(this.endCity)!="{}" && this.date){
             let date = this.date
             let newD ='2018-'+date.replace('月','-').replace('日','')
             console.log(newD)
             getTrains(newD,this.beginCity.jiancheng,this.endCity.jiancheng,"ADULT").then(res=>{
                 console.log(res)
                    
                    var result = res.data
                    
                    var trainnum = result.length;


                    for(var i=0; i<trainnum; i++) {
                    var tickect = {};
                    var temp = result[i].split("|");


                    tickect.tId = temp[3];// Train ID
                    tickect.sTime = temp[8];// Start Time
                    tickect.eTime = temp[9];// End Time
                    tickect.tTime = temp[10];// Total Time
                    tickect.date = temp[13];
                    tickect.fcSeat = temp[31];// First Class Seat
                    tickect.scSeat = temp[30];// Second Class Seat
                    tickect.bcSeat = temp[32];// Business Class Seat
                    tickect.wuzuo = temp[26];
                    tickect.yingzuo = temp[29]
                    tickect.yingwo = temp[28]
                    tickect.ruanwo = temp[23]
                    console.log(tickect)
                    tickects.push(tickect)
             
          }
          this.tickects = tickects
            this.$router.push({
                path:'/tickets'
            })
            this.setTickets(tickects)
      })
    
    }  
    
  },
  ...mapMutations({
      setTickets:'SETTICKETS'
  })
  }
}

</script>
<style lang='stylus' scoped>
.citys
 width:100%
 height :60px
 display :flex
 border-bottom: 1px solid gray
 .leftCity
    flex:1
    height 60px
    line-height :60px
    text-align :center
    font-size: 18px
    letter-spacing :2px
 .rightCity
    flex:1
    height 60px
    line-height :60px
    text-align :center
    font-size: 18px
    letter-spacing :2px
  .circle
    flex:0 0 40px
    height :40px
    border-radius:50%
    border:1px solid gray 
    line-height :40px
    margin-top:10px
    text-align :center
.calendar
 width:100%
 height :60px
 border-bottom: 1px solid gray
 font-size:18px
 line-height:60px
.button
 background-color :blue
 color:white
 text-align :center
 fonot-size :18px
 line-height:40px
 height:40px 
 letter-spacing :2px
</style>