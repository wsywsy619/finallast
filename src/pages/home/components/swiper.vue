<template>
<div class="wraper">
<swiper ref="mySwiper" :options="swiperOptions" v-if="showswiper()">
    <swiper-slide v-for="item of list" :key="item.id">
    <img class="swiper-image" :src="item.imgUrl"/>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
 </swiper>
</div>
</template>
<script>
export default{
  name: 'homeswiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  methods: {
    showswiper () {
      return this.list.length
    }
  }
}
</script>
<style lang="stylus" scoped>
.wraper >>> .swiper-pagination-bullet-active
  background: white
.wraper
  overflow:hidden
  width:100%
  height:0
  padding-bottom:31.11%
  .swiper-image
    width:100%
</style>
