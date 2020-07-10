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
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
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
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
