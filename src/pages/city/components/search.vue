<template>
<div>
<div class="search">
<input v-model="keyword" type="text" placeholder="输入城市名或者拼音"/>
</div>
<div class="searchcontent" v-show="keyword" ref="qw">
<ul>
<li v-for="(item,index) of result" class="item1 border-bottom" :key="index" @click="handleclick(item)">{{item}}</li>
</ul>
</div>
</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'citysearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: null,
      result: []
    }
  },
  methods: {
    handleclick (city) {
      this.$store.commit('changecity', city)
      this.$router.push('/')
    }
  },
  watch: {
    keyword () {
      if (this.keyword !== null) {
        this.result = []
        for (let i in this.cities) {
          this.cities[i].forEach(item => {
            if (item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1) {
              this.result.push(item.name)
            }
          }
          )
        }
        if (this.result.length === 0) {
          this.result.push('没有找到相关内容')
        }
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.qw)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
@import '~styles/mixins.styl'
.searchcontent
  overflow: hidden
  position: absolute
  top: 86px
  bottom: 0
  left: 0
  right: 0
  background: #eee
  z-index: 100
  li
    line-height: 1rem
    height: 1rem
    color: #666
    background:white
    padding: .2rem
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
