<template>
<div>
<cityheader>
</cityheader>
<citysearch :cities="cities">
</citysearch>
<citylist :cities="cities" :hot="hotCities" :change="change">
</citylist>
<cityzimu :cities="cities" @change="handlechange">
</cityzimu>
</div>
</template>

<script>
import axios from 'axios'
import cityheader from './components/header'
import citysearch from './components/search.vue'
import citylist from './components/list.vue'
import cityzimu from './components/zimubiao.vue'
export default {
  name: 'city',
  components: {
    cityheader,
    citysearch,
    citylist,
    cityzimu
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      change: ''
    }
  },
  methods: {
    handlechange (x) {
      this.change = x
    },
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handelGetCity)
    },
    handelGetCity (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
