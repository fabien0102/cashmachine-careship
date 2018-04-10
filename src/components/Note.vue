<template>
  <div class="note" :style="{backgroundColor}">
    <div class="value">{{value}}</div>
  </div>
</template>

<script>
const COLORS = {
  10: '#e9bcb6',
  20: '#a0bbd6',
  50: '#efb35d',
  100: '#b8d988'
}
export default {
  props: ['value'],

  computed: {
    backgroundColor () {
      return COLORS[this.value] || 'grey'
    }
  }
}
</script>

<style scoped>
.note {
  width: 100px;
  height: 180px;
  margin: 10px;
  position: relative;
  box-shadow: 0 0 5px rgba(0, 0, 0, .3)
}
.value {
  color: white;
  font-size: 50px;
  text-align: right;
  width: 100%;
  transform: rotate(-90deg) translate(30px, -35px);
  transform-origin: 100% 100%;
  position: absolute;
}
</style>
