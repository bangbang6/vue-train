import axios from 'axios'

export function getTrains(date,begin,end,age){
    let data = {
        "leftTicketDTO.train_date":date,
        "leftTicketDTO.from_station":begin,
        "leftTicketDTO.to_station":end,
        "purpose_codes":age
    }
  return  axios.get('/api/getTrains',{params:data}).then(res=>{
        return Promise.resolve(res)
    })
}