<template>
<div>
<div class='banner' @click="handleclick">
<img class="bannerimage" :src="bannerImg"/>
<div class="banner-info">
  <div class="banner-titile">{{sightName}}</div>
  <div class="banner-number"><span class="iconfont">&#xe635;</span>{{this.gallaryImgs.length}}</div>
</div>
</div>
<fade>
<commongallery v-if="show" @change="handlechange" :imgs="gallaryImgs"></commongallery>
</fade>
</div>
</template>
<script>
import commongallery from 'common/gallery/gallery'
import fade from 'common/fade/fade'
export default {
  name: 'detailbanner',
  components: {
    fade,
    commongallery
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    handleclick () {
      this.show = true
    },
    handlechange () {
      this.show = false
    }
  }
}
</script>
<style lang="stylus" scoped>
.banner
  position: relative
  overflow: hidden
  height: 0
  padding-bottom: 50.70%
  .bannerimage
    width: 100%
  .banner-info
    position: absolute
    display: flex
    left: 0
    right: 0
    bottom: 0
    line-height: .6rem
    color: #fff
    font-size: 25px
    background-image: linear-gradient(to top, rgba(0,0,0,.8),rgba(0,0,0,0)) /*rgba(0,0,0)是黑色但是如果设置第四个参数（透明度）为0则会变成白色;设置为1为原来默认*/
    .banner-titile
      flex:1
      padding: .2rem .2rem
    .banner-number
      height: .4rem
      padding: .2rem .2rem
      align-items :center
      .iconfont
        display: inline-block
        margin: 0 .1rem
        font-size: 25px
</style>
