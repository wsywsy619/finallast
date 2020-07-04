<template>
 <div>
  <Homeheader></Homeheader>
  <homeswiper></homeswiper>
  <homeicons></homeicons>
  </div>
</template>

<script>
import Homeheader from './components/header'
import homeswiper from './components/swiper'
import homeicons from './components/icons'
export default {
  name: 'Home',
  components: {
    homeswiper,
    Homeheader,
    homeicons
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
