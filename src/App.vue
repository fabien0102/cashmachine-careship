<template>
  <div id="app">
    <img src="./assets/logo.png">
    <CashMachine/>
  </div>
</template>

<script>
import CashMachine from './components/CashMachine'

export default {
  name: 'App',
  components: {
    CashMachine
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
