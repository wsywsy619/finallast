import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home.vue'
import detail from '@/pages/detail/detail.vue'
import city from '@/pages/city/city.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'city',
    component: city
  }, {
    path: '/detail/:id',
    name: 'detail',
    component: detail
  }]
})
