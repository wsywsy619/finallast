<template>
 <div class="iconsdiv">
   <swiper :options="swiperOptions">
   <swiper-slide v-for="(item1,index) of page" :key="index">
   <div class="icon" v-for="item of item1" :key="item.id">
     <div class="divimg">
       <img class="imgcontent" :src="item.imgUrl"/><!--因为之前的测试适应的是50X50像素的图片所以超过此像素的图片会显示异常（UI中会很大）所以此时在img标签设置长宽就可以了-->
     </div>
     <p class="content">
       {{item.desc}}
     </p>
     </div>
  </swiper-slide>
  </swiper>
 </div>
</template>
<script>
export default{
  name: 'homeicons',
  props: {
    iconlist: Array
  },
  data () {
    return {
      swiperOptions: {
        autoplay: false
      }
    }
  },
  computed: {
    page () {
      const pages = []
      this.iconlist.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
          pages[page].push(item)
        } else {
          pages[page].push(item)
        }
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
.iconsdiv >>> .swiper-container
  height:0;
  padding-bottom:4rem;/*见下*/
  .icon
    padding-top:.2rem;
    float:left;
    width:25%;
    height:0;
    padding-bottom:2rem;/*因为padding-bottom是定死的所以横向缩放的时候上下不变，之前横向缩放上下会变是因为paddingbottom设置为百分比的变量他根据父元素的width确定icon元素的padding-bottom所以父元素width变化(横向缩放)时候icon会出现竖直上的缩放，而当设置为固定值的时候不变*/
    .imgcontent
      display:block;
      margin:0 auto;
      width:50px;
      height:50px;
    .content/*p元素紧跟图标缩放的时候两者不会分离*/
      width:100%;
      margin-top:.2rem;
      line-height:20%
      text-align:center;
      /*做CSS时候考虑考虑横向上的变化即可似乎竖直方向不用考虑？*/
</style>
