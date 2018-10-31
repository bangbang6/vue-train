import axios from 'axios'
export function getCitys(){
    let url = '/api/getCitys'
   return  axios.get(url).then(res=>{
       console.log(res.data)
       let res1 = res.data
       if(res1.status == '0'){
           console.log(1)
        return Promise.resolve(res1.result)
       }
       console.log(1)
      return Promise.resolve('')
    })
}