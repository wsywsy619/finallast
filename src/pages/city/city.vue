<template>
<div>
<cityheader>
</cityheader>
<citysearch>
</citysearch>
</div>
</template>

<script>
import cityheader from './components/header'
import citysearch from './components/search.vue'
export default {
  name: 'city',
  components: {
    cityheader,
    citysearch
  }
}
</script>

<style lang="stylus" scoped>

</style>
