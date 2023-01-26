<template>
  <div class="container-fluid flex-row-reverse">
    <div class="d-flex justify-content-between">
      <RouterLink class="btn btn-outline-primary me-1" to="/sign_in">Sign in</RouterLink>
      <RouterLink class="btn btn-outline-success" to="/">Sign up</RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeaderAuthorizationMenu',
  components: {

  }
}
</script>

<style scoped>
</style>
