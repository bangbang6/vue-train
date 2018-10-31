<!--  -->
<template>
  <div class='pageCity'>
     <div class="wraper">
      <div class='cityHead'>
          <div class="back" @click='back'>返回</div>
          <div class="cityMes">{{name}}</div>
          <div class="confirm" @click='confirm'>确定</div>
      </div>
      <div class="cityRes">{{city}}</div>
  </div>   
      <div class="citys">
          <div class="city" v-for='(city, index) in citys'>
              
              <div class='cityDetail' @click='selectCity(city)'>{{city.key}}</div>
          </div>
      </div>
  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
import {getCitys} from '../api/city.js'
import { normalize } from 'path';
export default {
  data () {
    return { 
        name:'',
        citys:[],
        city:'',
        selectedCity:{}
    };
  },

  components: {},

  computed: {
      ...mapGetters(['beginCity','endCity']),
     
  },

  mounted: function(){
      this.init()
      this.getCity()
  },

  methods: {
      init(){
          let name = this.$route.query.name
          this.name = name
          if(this.name == '出发站'){
              this.city =  this.beginCity.key?  this.beginCity.key: this.beginCity
          }else{
              this.city = this.endCity.key?  this.endCity.key: this.endCity
          }
      },
      back(){
          this.$router.back()
      },
      confirm(){
         this.$router.back()
         let newS = JSON.stringify(this.selectedCity)=='{}'?'请选择':this.selectedCity
         if(this.name == '出发站'){
          
            this.setBeginCity(newS)
           }else{
               this.setEndCity(newS)
           }
      },
      getCity(){
        getCitys().then(res=>{
            console.log(res)
            this.citys = this.normalize(res)
        })
        
      },
      normalize(str){
          let dict = {}
            let nstr  = str.replace('var station_names =','')
            let arr = nstr.split("@")
     
            arr.forEach(item => {
                let newArr = item.split("|")
                if(newArr.length == 6){
                    dict[newArr[1]] = newArr[2]
                }
            });

            console.log(dict)
            let city = []
            for(var key in dict){
                city.push({key,jiancheng:dict[key]})
            }
            console.log(city)
            return city
      },
      selectCity(city){
          this.city = city.key
          this.selectedCity = city
          
      },
      ...mapMutations({
          setBeginCity:"SETBEGINCITY",
          setEndCity:"SETENDCITY"
      })
  }
}

</script>
<style lang='stylus' scoped>
.pageCity
 .wraper
  width:100%
  height 80px
  background-color :blue
  .cityHead
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
  .cityRes
        width:80%
        margin-left:10%
        height 30px
        line-height:30px 
        color:blue
        background-color :white
        border-radius:3px  
        padding: 0 5px
 .citys
   width:100%
   .city
     width:100%
     .title
       height 15px
       line-height:10px 
       background-color gray 
     .cityDetail
        height 30px
        line-height:30px 
        letter-spacing :2px
        font-size 13px
        border-bottom:1px solid #cccccc                  
</style>