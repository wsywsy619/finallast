<template>
<div>
<cityheader>
</cityheader>
<citysearch>
</citysearch>
<citylist>
</citylist>
<cityzimu>
</cityzimu>
</div>
</template>

<script>
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
  }
}
</script>

<style lang="stylus" scoped>

</style>
