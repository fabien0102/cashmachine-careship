<template>
  <div id="app">
    <h1>Cash machine</h1>
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
@import url(https://fonts.googleapis.com/css?family=Bangers);
body {
  background-color: #ED6565;
}

#app {
  padding: 0;
  margin: 0 auto;
}

h1 {
  text-align: center;
  font-weight: normal;
  color: #fff;
  text-transform: uppercase;
  font-size: 8em;
  white-space: nowrap;
  font-size: 12vw;
  z-index: 1000;
  font-family: 'Bangers', cursive;
  text-shadow: 5px 5px 0 rgba(0, 0, 0, 0.7);
  -moz-transform: skew(0, -6.7deg);
  -ms-transform: skew(0, -6.7deg);
  -webkit-transform: skew(0, -6.7deg);
  transform: skew(0, -6.7deg);
  -moz-transition-property: font-size;
  -o-transition-property: font-size;
  -webkit-transition-property: font-size;
  transition-property: font-size;
  -moz-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
}

@media screen and (max-width: 50em) {
  h1 {
    font-size: 20vw;
  }
}

</style>
