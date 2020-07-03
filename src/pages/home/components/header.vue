<template>
  <div class="header">
  <div class="header-left">返回</div>
  <div class="header-input">输入城市/景点/游玩主题</div>
  <div class="header-right">城市</div>
  </div>
</template>

<script>
export default {
  name: 'Homeheader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .header
    display:flex
    line-height:.86rem
    background:#00bcd4
    color:#fff
  .header-left
    width:.64rem
    float:left
  .header-input
    flex:1
    color: #ccc
    height:.62rem
    margin-top:.12rem
    line-height:.62rem
    margin-left:.2rem
    background:#fff
    border-radius: .1rem
  .header-right
    width:1.24rem
    float:right
    text-align: center
</style>
