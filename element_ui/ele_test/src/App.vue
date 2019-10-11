<template>     
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>   
  </div>
</template>  //组件模板，app为根组件
/*显示的是当前路由地址所对应的内容*/     
<script>
export default {
  name: 'App'
}
</script> //组件逻辑

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>//组件样式
