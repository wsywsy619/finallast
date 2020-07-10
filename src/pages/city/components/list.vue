<template>
<div class="list" ref="wrapper">
  <div>
  <div class="area">
    <div class="titile border-topbottom">当前城市</div>
    <div class="button-list">
      <div class="buttonwrapper">
        <div class="button">{{this.current}}</div>
      </div>
    </div>
  </div>
  <div class="area">
    <div class="titile border-topbottom">热门城市</div>
    <div class="button-list">
      <div class="buttonwrapper" v-for="item of hot" :key="item.id" @click="handleclick">
        <div class="button">{{item.name}}</div>
      </div>
    </div>
  </div>
  <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
    <div class="titile border-topbottom">{{key}}</div>
    <div class="item-list">
      <div class="item border-bottom" v-for="item1 of item" @click="handleclick" :key="item1.id">
      {{item1.name}}
      </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import Bscroll from 'better-scroll'
export default {
  name: 'citylist',
  props: {
    cities: Object,
    hot: Array,
    change: String
  },
  computed: { // mapState从vuex中（index.js）映射到当前组件并映射给current然后就i相当于在computed中启用了current(this.current)
    ...mapState({
      current: 'city'
    })
  },
  methods: {
    handleclick (e) {
      this.$store.commit('changecity', e.target.innerText)
      this.$router.push('/')
    }
  },
  watch: {
    change () {
      if (this.change) {
        this.scroll.scrollToElement(this.$refs[this.change][0])
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true
    })
  }
}
</script>

<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    position: absolute
    top: 1.72rem
    width: 100%
    left: 0
    bottom: 0
    overflow: hidden
    .titile
      line-height: .44rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .buttonwrapper
        width: 33.33%
        float: left
        .button
          padding: .1rem 0
          margin: .1rem
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
  .item-list
    .item
      line-height: .76rem
      padding-left: .2rem
</style>
