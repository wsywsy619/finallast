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
  <span class="iconfont">&#xe658;</span>{{this.$store.state.city}}</div>
  </router-link>
  </div>
</template>

<script>
export default {
  name: 'Homeheader'
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
    width:1.24rem
    float:right
    color: #fff
    text-align: center
    .iconfont
      padding-right:5px
</style>
