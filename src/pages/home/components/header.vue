<template>
  <div class="header">
  <div class="header-left">
  <div class="iconfont back-icon">&#xe61c;</div>
  </div>
  <div class="header-input">
  <span class="iconfont">&#xe68f;</span>
  输入城市/景点/游玩主题</div>
  <router-link to='/city'>
  <div class="header-right">
  <span class="iconfont">&#xe658;</span>{{this.city}}</div>
  </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Homeheader',
  computed: {
    ...mapState(['city']) // 'city'要与index.js中state对象中city一直（名字一致）
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header
    display:flex
    line-height:.86rem
    background:$bgcolor
    color:#fff
  .header-left
    width:.64rem
    float:left
    .back-icon
      text-align: center
      font-size:.4rem
  .header-input
    padding-left:.2rem
    flex:1
    color: #ccc
    height:.62rem
    margin-top:.12rem
    line-height:.62rem
    margin-left:.2rem
    background:white
    border-radius: .1rem
  .header-right
    min-width:1.04rem/*当内容的实际宽度大于min-width的值时候元素的最后实际宽度等于内容的实际宽度，当内容的实际宽度小于min-width的值时候元素的最后实际宽度等于min-width宽度*/
    padding: 0 .1rem
    float:right
    color: #fff
    text-align: center
    .iconfont
      padding-right:5px
</style>
