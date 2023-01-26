<template>
  <div class="sign-in">
    <AppSignInPanel/>
  </div>
</template>

<script>
import AppSignInPanel from '../components/AppSignInPanel.vue'
export default {
  name: 'HomeSignIn',
  components: {
    AppSignInPanel
  }
}
</script>

<style scoped>
.sign-in {
  width: 400px;
  margin: 100px auto;
}
</style>
