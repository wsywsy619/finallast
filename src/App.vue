<template>
  <div id="app">
    <keep-alive>
    <router-view/>
    </keep-alive>  <!--keep-alive用于提升性能，当页面消失时候保存在内存，如果不加keepalive 从home页面到page页面或者从page页面到home页面都会重新发送ajax请求-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
