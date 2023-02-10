<template>
  <div class="navigation-menu">
    <img class="logo" src="../assets/logo.png" alt="">
    <RouterLink to="/"><TheHeaderButton title="Home"/></RouterLink>
    <RouterLink to="/about"><TheHeaderButton title="About"/></RouterLink>
  </div>
</template>

<script>
import TheHeaderButton from './TheHeaderButton.vue';
export default {
  name: 'TheHeaderNavigationMenu',
  components: {
    TheHeaderButton
  }
}
</script>

<style scoped>
.logo {
  display: block;
  padding: 10px;
  height: 40px;
}
.navigation-menu {
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 100%;
}
</style>
