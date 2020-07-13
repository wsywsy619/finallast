<template>
<div>
<router-link v-show="show" to="/" tag="div" class="headerabs" :style="showlink"><div class="iconfont">&#xe61c;</div></router-link> <!--如果要用iconfont 则他的class必须是iconfont -->
<div class="headerfixed"  v-show="!show || showfixed" :style="stylefixed">
<div class="header-left">
  <router-link to="/">
    <div class="iconfont back-icon">&#xe61c;</div>
  </router-link>
</div>
<span>城市选择</span>
</div>
</div>
</template>
<script>
export default {
  name: 'detailheader',
  data () {
    return {
      show: true,
      showfixed: false,
      stylefixed: {
        opacity: 1
      },
      showlink: {
        opacity: 1
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      if (top <= 10) {
        this.show = true
        this.showfixed = false
        this.showlink.opacity = 1
        this.stylefixed.opacity = 0
      } else if (!(top > 50) && top > 10) {
        this.show = true
        this.showfixed = true
        this.stylefixed.opacity = (top - 10) / 40
        this.showlink.opacity = 1 - (top - 10) / 40
      } else {
        this.show = false
        this.stylefixed.opacity = 1
        this.showlink.opacity = 0
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroied () {
    window.removeEventListener('scroll', this.handleScroll) // window事件的解绑否则在home组件中上面绑定的函数也会执行
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl'
@import '~styles/mixins.styl'
.headerfixed
  z-index: 2
  position: fixed
  width: 100%
  left: 0
  top: 0
  background: $bgcolor
  height: .86rem
  overflow: hidden
  line-height: .86rem
  text-align: center
  color: #fff
  font-size: .45rem
  ellipsis()
  .header-left
    width: .64rem
    float: left
    .back-icon
      color: #fff
      text-align: center
      font-size: .4rem
.headerabs
  position: absolute
  left: .2rem
  top: .2rem
  width: .8rem
  height: .8rem
  border-radius: .8rem
  background: rgba(0,0,0,.8)
  display: flex
  color: #fff
  justify-content: center
  align-items:center
  .iconfont
    font-size: 23px
</style>
