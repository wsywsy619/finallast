<template>
<div class="gallery">
<div class="wrapper" @click="handleclick">
<swiper :options="swiperoptions">
    <swiper-slide v-for="(item, index) in imgs" :key="index">
    <img class="swiper-image" :src="item"/>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
</swiper>
</div>
</div>
</template>
<script>
export default{
  name: 'commongallery',
  props: {
    imgs: {
      type: Array
    }
  },
  data () {
    return {
      swiperoptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        loop: true
      }
    }
  },
  methods: {
    handleclick () {
      this.$emit('change')
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper>>>.swiper-container
  overflow: inherit
.gallery
  display: flex
  flex-direction: column
  justify-content: center
  z-index: 99
  position: fixed
  top: 0
  right: 0
  left: 0
  bottom: 0
  background: #000
  .wrapper
    width: 100%;
    height: 0
    padding-bottom: 100%
    .swiper-pagination
      color: white
      font-size: 25px
      bottom: -1rem
    .swiper-image
      width: 100%;
</style>
