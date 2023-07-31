<template>
  <div id="app">
    <tselect-radio></tselect-radio>
  </div>
</template>

<script>
import TselectRadio from './tselectTableDemo/tselectRadio.vue'

export default {
  name: 'app',
  components: {
    TselectRadio
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
