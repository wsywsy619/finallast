<template>
<div class="wraper">
<swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="item of swiperlist" :key="item.id">
    <img class="swiper-image" :src="item.imgurl"/>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
 </swiper>
</div>
</template>
<script>
export default{
  name: 'homeswiper',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperlist: [
        {
          id: 1,
          imgurl: 'https://imgs.qunarzz.com/vs_ceph_vc_ddr_merchant_service/259a631d-1e38-40ba-a034-f9c0cad7a5f0.jpg'
        },
        {
          id: 2,
          imgurl: 'https://imgs.qunarzz.com/vs_ceph_vc_ddr_merchant_service/259a631d-1e38-40ba-a034-f9c0cad7a5f0.jpg'
        },
        {
          id: 3,
          imgurl: 'https://imgs.qunarzz.com/vs_ceph_vc_ddr_merchant_service/0b8b0ccb-aea0-46ac-aa62-adcd141efe10.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.wraper >>> .swiper-pagination-bullet-active
  background: white
.wraper
  overflow:hidden
  width:100%
  height:0
  padding-bottom:68.9%
  .swiper-image
    width:100%
</style>
