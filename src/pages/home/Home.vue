<template>
 <div>
  <Homeheader></Homeheader>
  <homeswiper :list="swiperList"></homeswiper>
  <homeicons :iconlist="iconList"></homeicons>
  <homerecommend :recommendlist="recommendList"></homerecommend>
  <homeweekend :weekendlist="weekendList"></homeweekend>
 </div>
</template>

<script>
import Homeheader from './components/header'
import homeswiper from './components/swiper'
import homeicons from './components/icons'
import homerecommend from './components/recommend'
import homeweekend from './components/weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    homeswiper,
    Homeheader,
    homeicons,
    homerecommend,
    homeweekend
  },
  data () {
    return {
      lastcity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.swiperList = res.data.swiperList
        this.iconList = res.data.iconList
        this.recommendList = res.data.recommendList
        this.weekendList = res.data.weekendList
      }
    }
  },
  mounted () { // 当页面渲染时候执行mounted，如果没有keepalive标记每次页面切换都会重新渲染页面所以里面的函数会执行来获取ajax
    this.getHomeInfo()
  },
  activated () { // 当页面重新被显示时候执行activated挂载函数
    if (this.city !== this.lastcity) {
      this.getHomeInfo()
      this.lastcity = this.city
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
