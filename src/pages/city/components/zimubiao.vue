<template>
<div class="header">
<ul>
<li v-for="(item,key) of cities" :key="key">{{key}}</li>
</ul>
</div>
</template>

<script>
export default {
  name: 'cityzimu',
  props: ['cities']
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
