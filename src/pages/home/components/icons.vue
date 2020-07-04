<template>
 <div class="iconsdiv">
   <div class="icon">
     <div class="divimg">
       <img class="imgcontent" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"/><!--因为之前的测试适应的是50X50像素的图片所以超过此像素的图片会显示异常（UI中会很大）所以此时在img标签设置长宽就可以了-->
     </div>
     <p class="content">
       景点门票
     </p>
   </div>
   <div class="icon">
     <div class="divimg">
       <img class="imgcontent" src="http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png"/>
     </div>
     <p class="content">
       一日游
     </p>
  </div>
  <div class="icon">
     <div class="divimg">
       <img class="imgcontent" src="http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png"/>
     </div>
     <p class="content">
       踏青赏花
     </p>
  </div>
  <div class="icon">
     <div class="divimg">
       <img class="imgcontent" src="http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png"/>
     </div>
     <p class="content">
       郑州方特
     </p>
  </div>
  <div class="icon">
     <div class="divimg">
       <img class="imgcontent" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e98eea7ed037b04a5af0250ca8a1abd7.png"/>
     </div>
     <p class="content">
       少林寺
     </p>
  </div>
  <div class="icon">
     <div class="divimg">
       <img class="imgcontent" src="http://img1.qunarzz.com/piao/fusion/1803/8c/47630407f70e8302.png"/>
     </div>
     <p class="content">
       电影小镇
     </p>
  </div>
  <div class="icon">
     <div class="divimg">
       <img class="imgcontent" src="http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png"/>
     </div>
     <p class="content">
       亲子乐园
     </p>
  </div>
  <div class="icon">
     <div class="divimg">
       <img class="imgcontent" src="http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png"/>
     </div>
     <p class="content">
       海洋游乐园
     </p>
  </div>
 </div>
</template>
<script>
export default{
  name: 'homeicons'
}
</script>
<style lang="stylus" scoped>
.iconsdiv
  height:0;
  width:100%;
  padding-bottom:10rem;/*见下*/
  overflow:hidden;
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
