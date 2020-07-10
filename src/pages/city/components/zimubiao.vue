<template>
<div class="header">
<ul>
<li v-for="item of letters"
    :key="item"
    :ref="item"
    @touchstart="handletouchstart"
    @touchmove="handletouchmove"
    @touchend="handeltouchend"
    @click="handleletter"
>
  {{item}}
</li>
</ul>
</div>
</template>

<script>
export default {
  name: 'cityzimu',
  data () {
    return {
      touchstatus: false,
      x: 0,
      timer: null
    }
  },
  props: ['cities'],
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  updated () {
    const q = this.$refs['A'][0].offsetTop
    this.x = q
  },
  methods: {
    handleletter (e) {
      this.$emit('change', e.target.innerText)
    },
    handletouchstart (e) {
      this.touchstatus = true
    },
    handletouchmove (e) {
      if (this.touchstatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const y = e.touches[0].clientY - 83
          const x = Math.floor((y - this.x) / 20)
          if (x >= 0 && x < this.letters.length) {
            this.$emit('change', this.letters[x])
          }
        }, 8)
      }
    },
    handeltouchend (e) {
      this.touchstatus = false
    }
  }
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
