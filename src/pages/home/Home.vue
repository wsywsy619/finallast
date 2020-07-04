<template>
 <div>
  <Homeheader></Homeheader>
  <homeswiper></homeswiper>
 </div>
</template>

<script>
import Homeheader from './components/header'
import homeswiper from './components/swiper'
export default {
  name: 'Home',
  components: {
    homeswiper,
    Homeheader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
