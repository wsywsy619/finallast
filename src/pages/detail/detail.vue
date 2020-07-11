<template>
<div>
<detailbanner>
</detailbanner>
<detailheader>
</detailheader>
<div class="content">
</div>
</div>
</template>
<script>
import detailbanner from './components/banner'
import detailheader from './components/header'
export default {
  name: 'detail',
  components: {
    detailbanner,
    detailheader
  }
}
</script>
<style lang="stylus" scoped>
.content
  height: 50rem
</style>
