<template>
<div class="search">
<input type="text" placeholder="输入城市名或者拼音"/>
</div>
</template>

<script>
export default {
  name: 'citysearch'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
@import '~styles/mixins.styl'
.search
  background: $bgcolor
  height: .86rem
  display:flex
  min-width: 0
  input
    box-sizing: border-box
    height: .58rem
    display: block
    width: 85%
    border: solid 1px white
    border-radius: 5px
    text-align: center
    margin: 0 auto
    color: #666
    padding: 0 .1rem
    align-self:center/*通过设置父元素为flex子元素align-self:center来设置垂直居中*/
</style>
