<template>
  <div id="app">
 <keep-alive exclude="detail"> <!--exclude用于排除每次切换detail页面mounted钩子不执行的问题这样的话定义在detail组件中的mounted钩子就会在来回切换的时候执行了-->
    <router-view/>
</keep-alive>
  </div>
</template>
