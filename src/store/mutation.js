import * as types from './mutation-types'

let mutation = {
    [types.SETBEGINCITY](state,city){
        state.beginCity = city
    },
    [types.SETENDCITY](state,city){
        state.endCity = city
    },
    [types.SETDATE](state,date){
        state.date = date
    },
    [types.SETTICKETS](state,tickets){
        state.tickets = tickets
    },
    [types.SETMYTICKET](state,ticket){
        state.myticket  = ticket
    },
    [types.SETUSERNAME](state,username){
        state.username = username
    }
}
export default mutation