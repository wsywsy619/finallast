<template>
<div>
<div class="item"
     v-for="(item,index) of list"
     :key="index"
>
<div class="itemtitle border-bottom">
<span @click="handleclick(index)" class="iconfont" v-if="handleshow(index)">&#xe658;</span>
<span @click="handleclick(index)" class="iconfont" v-else-if="item.children">&#xe61c;</span>
{{item.title}}
</div>
<div v-if="item.children" ref="stylechildren" :style="stylechildren">
<detaillist :list="item.children" class="itemchildren" style="padding-left: .2rem">
</detaillist>
</div>
</div>
</div>
</template>
<script>
export default {
  name: 'detaillist',
  data () {
    return {
      stylechildren: {
        display: 'none'
      }
    }
  },
  props: {
    list: Array
  },
  methods: {
    handleclick (x) {
      if (this.list[x].children) {
        this.$forceUpdate() // 使用此函数强制渲染v-for下面的元素否则图标不会变化即使this.showinx变化
        this.showifx[x] = !this.showifx[x]
        const q = this.$refs.stylechildren[this.q[x]].style.display
        this.$refs.stylechildren[this.q[x]].style.display = (q === 'none' ? 'block' : 'none')
      }
    },
    handleshow (x) {
      return this.showifx[x]
    }
  },
  computed: {
    q () {
      var x = 0
      var letter = []
      for (let i = 0; i <= this.list.length - 1; i++) {
        if (this.list[i].children) {
          letter[i] = x
          x++
        } else {
          letter[i] = 0
        }
      }
      return letter
    },
    showifx () {
      var letter = []
      for (let i = 0; i <= this.list.length - 1; i++) {
        if (this.list[i].children) {
          letter[i] = true
        } else {
          letter[i] = false
        }
      }
      return letter
    }
  }
}
</script>
<style lang="stylus" scoped>
.itemtitle
  line-height: .8rem
  font-size: .32rem
  padding: 0 .2rem
  color: green
  span
    position: relative
    left: .06rem
    top: .06rem
    display: inline-block
    width: .36rem
    height: .36rem
</style>
