<template>
<div class="header">
<ul>
<li>A</li>
<li>B</li>
<li>C</li>
<li>D</li>
<li>E</li>
<li>F</li>
<li>G</li>
<li>H</li>
<li>I</li>
<li>G</li>
<li>K</li>
<li>L</li>
<li>M</li>
<li>N</li>
<li>O</li>
<li>P</li>
<li>Q</li>
<li>R</li>
<li>A</li>
<li>A</li>
<li>A</li>
<li>A</li>
<li>A</li>
<li>A</li>
</ul>
</div>
</template>

<script>
export default {
  name: 'cityzimu'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .header
    position: absolute
    top: 1.73rem
    bottom: 0
    right: 0
    display: flex
    ul
      align-self:center
      li
        line-height: .4rem
</style>
