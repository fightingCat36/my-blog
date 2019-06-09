<template>
  <div id="app">
    <Common />
  </div>
</template>

<script>
import Common from './layout/Common.vue'

export default {
  name: 'app',
  components: {
    Common
  }
}
</script>

<style>
@import './assets/css/admin.css';
/* @import './assets/css/amazeui.css';
@import './assets/css/amazeui.flat.css'; */
@import './assets/css/amazeui.min.css';
@import './assets/css/app.css';
@import './assets/css/lw-admin.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
