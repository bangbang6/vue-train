import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/search.vue'
import City from '@/components/city.vue'
import Ticket from '@/components/ticket.vue'
import Buy from '@/components/buy.vue'
import Login from '@/components/login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/shouye'
    },
    {
      path: '/shouye',
      name: 'search',
      component: Search
    },
    {
      path:'/city',
      name:'city',
      component:City
    },
    {
      path:'/tickets',
      name:'ticket',
      component:Ticket
    },
    {
      path:'/buy',
      name:'buy',
      component:Buy
    },
    {
      path:'/login',
      name:'login',
      component:Login
    }
  ]
})
