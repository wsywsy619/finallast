<template>
<div>
  <div class="recommend-class">热销推荐</div>
  <ul>
    <li class="item border-bottom" v-for="item of recommendlist" :key="item.id">
      <div class="item-img-wrapper">
        <img class="item-img" :src='item.imgurl'/>
      </div>
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
        <button class="item-button">查看详情</button>
      </div>
    </li>
  </ul>
</div>
</template>
<script>
export default{
  name: 'homerecomsmend',
  data () {
    return {
      recommendlist: [{
        id: 1,
        imgurl: 'http://img1.qunarzz.com/sight/p0/1909/5b/5b96def9b5592837a3.img.jpg_250x250_b6cb7378.jpg',
        title: '建业•华谊兄弟电影小镇',
        desc: '极具风格小资的异域小镇'
      },
      {id: 2,
        imgurl: 'http://img1.qunarzz.com/sight/p0/1804/ad/ad51f742c4e58127a3.img.jpg_200x200_d3bbac0a.jpg',
        title: '郑州方特梦幻王国',
        desc: '给你带来足够的欢乐'
      },
      {id: 3,
        imgurl: 'http://img1.qunarzz.com/sight/p0/1909/5b/5b96def9b5592837a3.img.jpg_250x250_b6cb7378.jpg',
        title: '禅宗少林音乐大典',
        desc: '冥冥之音视听享受'
      },
      {id: 4,
        imgurl: 'http://img1.qunarzz.com/sight/p0/1903/fd/fde2db370b42593ea3.img.jpg_200x200_88130ac8.jpg',
        title: '银基冰雪世界',
        desc: '冰雪风情，夏天也能玩雪'
      },
      {id: 5,
        imgurl: 'http://img1.qunarzz.com/sight/p0/1605/97/970d5ffe183b4f2190.img.jpg_200x200_ca53c65b.jpg',
        title: '郑州方特水上乐园',
        desc: '你玩水水玩你！'
      }
      ]
    }
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
