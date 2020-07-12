<template>
<div>
<detailbanner>
</detailbanner>
<detailheader>
</detailheader>
<detaillist :list="list">
</detaillist>
<div class="content">
</div>
</div>
</template>
<script>
import detailbanner from './components/banner'
import detailheader from './components/header'
import detaillist from './components/list'
export default {
  name: 'detail',
  components: {
    detailbanner,
    detailheader,
    detaillist
  },
  data () {
    return {
      list: [{
        title: '成人票',
        children: [{
          title: '成人三馆联票'
        }, {
          title: '成人四馆联票'
        }, {
          title: '成人五馆联票'
        }]
      }, {
        title: '学生票'
      }, {
        title: '老人票'
      }, {
        title: '特惠票',
        children: [{
          title: '成人三馆联票',
          children: [{
            title: '成人三馆联票'
          }, {
            title: '成人四馆联票'
          }, {
            title: '成人五馆联票'
          }]
        }, {
          title: '成人四馆联票'
        }, {
          title: '成人五馆联票'
        }]
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
.content
  height: 50rem
</style>
