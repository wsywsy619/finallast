<template>
<div class="header">
<div class="header-left">
  <router-link to="/">
    <div class="iconfont back-icon">&#xe61c;</div>
  </router-link>
</div>
<span>城市选择</span></div>
</template>

<script>
export default {
  name: 'cityheader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .header
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
</style>
