<template>
  <div id="app">
  <!-- <router-view></router-view> -->
  <!-- <MyComponenets/> -->
  <HelloWorld/>
  </div>
 
</template>

<script>
// import MyComponenets from './components/MYComponents.vue';
import HelloWorld from './components/HelloWorld.vue';
export default {
  components: {
  // MyComponenets,
  HelloWorld
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
