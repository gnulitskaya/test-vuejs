<template>
  <div class="container">
    <the-range></the-range>
    <router-view></router-view>
  </div>
</template>

<script>

import List from './components/List'
import User from './components/User'
import Range from './components/Range'

export default {
  components: {
    'the-range': Range
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
