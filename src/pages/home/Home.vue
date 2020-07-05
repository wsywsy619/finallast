<template>
 <div>
  <Homeheader></Homeheader>
  <homeswiper></homeswiper>
  <homeicons></homeicons>
  <homerecommend></homerecommend>
  <homeweekend></homeweekend>
 </div>
</template>

<script>
import Homeheader from './components/header'
import homeswiper from './components/swiper'
import homeicons from './components/icons'
import homerecommend from './components/recommend'
import homeweekend from './components/weekend'
export default {
  name: 'Home',
  components: {
    homeswiper,
    Homeheader,
    homeicons,
    homerecommend,
    homeweekend
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
