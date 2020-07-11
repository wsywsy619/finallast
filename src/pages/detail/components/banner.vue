<template>
<div>
<div class='banner' @click="handleclick">
<img class="bannerimage" src="https://imgs.qunarzz.com/sight/p0/1701/88/885ec9c1584a572aa3.img.png_710x360_bf4dab2a.png"/>
<div class="banner-info">
  <div class="banner-titile">开封府（AAAA景区）</div>
  <div class="banner-number"><span class="iconfont">&#xe635;</span>{{this.imgs.length}}</div>
</div>
</div>
<commongallery v-if="show" @change="handlechange" :imgs="imgs"></commongallery>
</div>
</template>
<script>
import commongallery from 'common/gallery/gallery'
export default {
  name: 'detailbanner',
  components: {
    commongallery
  },
  data () {
    return {
      show: false,
      imgs: ['https://imgs.qunarzz.com/sight/p0/1701/88/885ec9c1584a572aa3.img.png_710x360_bf4dab2a.png',
        'https://imgs.qunarzz.com/sight/p0/201403/07/a5232bae168e6120050b0c72b49ed1a9.jpg_710x360_121ff592.jpg', 'https://imgs.qunarzz.com/sight/p0/201403/07/0971f37f898ca09615b4375136c5c381.jpg_710x360_58763fc7.jpg', 'https://imgs.qunarzz.com/sight/p0/201309/16/dd7de3d58f8ac96dc8d65eac.jpg_710x360_8c605ecf.jpg'
      ]
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
