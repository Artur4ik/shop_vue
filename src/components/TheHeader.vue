<template>
  <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink class="nav-link active" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link active" to="/">Products</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link active" to="/">About</RouterLink>
        </li>
      </ul>
    </div>
  <div class="container-fluid d-flex justify-content-center">
    <img class="logotype" src="../assets/logo.png" alt="">
  </div>
  <TheHeaderUserMenu v-if="this.auth.isAuthentificated"/>
  <TheHeaderAuthorizationMenu v-else/>
</nav>
</template>

<script>
import { useAuthStore } from '../logic/stores/auth'
import TheHeaderAuthorizationMenu from './TheHeaderAuthorizationMenu.vue';
import TheHeaderUserMenu from './TheHeaderUserMenu.vue';
export default {
  setup () {
    const auth = useAuthStore()

    return {
      auth,
    }
  },
  name: 'TheHeader',
  components: {
    TheHeaderAuthorizationMenu,
    TheHeaderUserMenu,
  }
}
</script>

<style scoped>
.navbar {
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.329);
}
.logotype {
  filter: drop-shadow(0 0 2px rgb(23, 136, 0));
  max-height: 50px;
}
</style>
