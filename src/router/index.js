import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import detail from '@/pages/detail/detail.vue'
import city from '@/pages/city/city.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }
  , {
    path: '/city',
    name: 'city',
    component: city
  }
  , {
    path: '/detail/:id',
    name: 'detail',
    component: detail
  }
  ],
  scrollBehavior (to, from, savedPositon) { // 用于解决路由切换时候停留问题（每次切换到不同的detail页面时候滚动条保持着上一层的页面）
    return {
      x: 0,
      y: 0
    }
  }
})
