import Vue from "vue"
import Vuex from 'vuex'
import state from './state'
import * as getters from './getters'
import mutations from './mutation'
import createLogger from 'vuex/dist/logger'
const debug = process.env.NODE_ENV!=='production'
Vue.use(Vuex)
let store = new Vuex.Store({
    state,
    getters,
    mutations:mutations,
    strict:debug,
    plugins:debug?[createLogger()]:[]
})

export default store