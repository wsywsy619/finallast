<template>
<div>
  <div class="recommend-class">热销推荐</div>
  <ul>
    <router-link class="item border-bottom" v-for="item of recommendlist" :key="item.id" tag="li" :to="'/detail/'+item.id">
      <div class="item-img-wrapper">
        <img class="item-img" :src='item.imgUrl'/>
      </div>
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
        <button class="item-button">查看详情</button>
      </div>
    </router-link>
  </ul>
</div>
</template>
<script>
export default{
  name: 'homerecomsmend',
  props: {
    recommendlist: Array
  }
}
</script>
<style lang="stylus" scoped>
.recommend-class
  margin-top: .2rem
  line-height: .8rem
  background: #eee
  text-indent: .2rem
.item
  overflow: hidden
  height: 1.9rem
  display: flex
  .item-img
    width: 1.7rem
    height: 1.7rem
    padding: .1rem
  .item-info
    flex: 1
    min-width: 0
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
    .item-desc
      line-height: .4rem
      color: #ccc
    .item-button
      line-height: .44rem
      margin-top: .16rem
      background: #ff9300
      padding: 0 .1rem
      border-radius: .06rem
      color: #fff

</style>
