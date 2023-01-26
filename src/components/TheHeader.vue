<template>
  <div class="header">
    <TheHeaderMenu/>
  </div>
</template>

<script>
import TheHeaderMenu from './TheHeaderMenu.vue'
export default {
  name: 'TheHeader',
  components: {
    TheHeaderMenu
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: black;
}
</style>
