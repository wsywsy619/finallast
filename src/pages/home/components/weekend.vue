<template>
<div>
  <div class="recommend-class">周末去哪</div>
  <ul>
    <li class="item border-bottom" v-for="item of recommendlist" :key="item.id">
      <div class="item-img-wrapper">
        <img class="item-img" :src='item.imgurl'/>
      </div>
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
      </div>
    </li>
  </ul>
</div>
</template>
<script>
export default{
  name: 'homeweekend',
  data () {
    return {
      recommendlist: [{
        id: 1,
        imgurl: 'http://img1.qunarzz.com/sight/source/1505/86/57819390ea997c.jpg_r_640x214_00888590.jpg',
        title: '郑州打卡',
        desc: '日月轮回，孕育出新的美丽'
      },
      {
        id: 2,
        imgurl: 'http://img1.qunarzz.com/sight/source/1811/d2/017059dd59b0ee.jpg_r_640x214_497664a4.jpg',
        title: '城中碧玉万仙山',
        desc: '清幽山乡，人间仙境，世外桃源，雄壮而苍茫的红崖绝壁，妙曼而秀雅的山乡风韵，太行风光的典型代表亲子游乐，享受童年欢乐时光。亲子游乐，享受童年欢乐时光。亲子游乐，享受童年欢乐时光。亲子游乐，享受童年欢乐时光。亲子游乐，享受童年欢乐时光。清幽山乡，人间仙境，世外桃源，雄壮而苍茫的红崖绝壁，妙曼而秀雅的山乡风韵，太行风光的典型代表亲子游乐，享受童年欢乐时光。亲子游乐，享受童年欢乐时光。亲子游乐，享受童年欢乐时光。亲子游乐，享受童年欢乐时光。亲子游乐，享受童年欢乐时光。'
      },
      {
        id: 3,
        imgurl: 'http://img1.qunarzz.com/sight/source/1505/84/2967ce31459e0a.jpg_r_640x214_8fc5fe97.jpg',
        title: '快乐童年',
        desc: '亲子游乐，享受童年欢乐时光。'
      },
      {
        id: 4,
        imgurl: 'http://img1.qunarzz.com/sight/source/1603/89/a64d5966351b04.jpg_r_640x214_45776b4c.jpg',
        title: '叫做打卡',
        desc: '山水焦作，太极故里'
      }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.recommend-class
  margin-top: .2rem
  line-height: .8rem
  background: #eee
  text-indent: .2rem
.item
  overflow: hidden
  .item-img-wrapper
    width: 100%
    height: 0
    padding-bottom: 37.44%
    .item-img
      width:100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
    .item-desc
      line-height: .4rem
      height: .4rem
      color: #ccc
      ellipsis()

</style>
