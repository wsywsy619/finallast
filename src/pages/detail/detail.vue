<template>
<div>
<detailbanner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs">
</detailbanner>
<detailheader>
</detailheader>
<detaillist :list="categoryList">
</detaillist>
<div class="content">
</div>
</div>
</template>
<script>
import detailbanner from './components/banner'
import detailheader from './components/header'
import detaillist from './components/list'
import axios from 'axios'
export default {
  name: 'detail',
  components: {
    detailbanner,
    detailheader,
    detaillist
  },
  data () {
    return {
      categoryList: [],
      gallaryImgs: [],
      sightName: '',
      bannerImg: '',
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
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/detail.json?id=', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleget)
    },
    handleget (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
<style lang="stylus" scoped>
.content
  height: 50rem
</style>
