<template>
  <div class="menu">
    <div class="left-menu">
      <TheHeaderNavigationMenu/>
    </div>
    <div class="right-menu">
      <div></div>
      <TheHeaderAuthorizationMenu v-if="this.auth.isAuthentificated == false" />
      <TheHeaderProfileMenu v-else />
    </div>
  </div>
</template>

<script>
import TheHeaderProfileMenu from './TheHeaderProfileMenu.vue';
import TheHeaderNavigationMenu from './TheHeaderUserMenu.vue';
import TheHeaderAuthorizationMenu from './TheHeaderAuthorizationMenu.vue'
import { useAuthStore } from '../logic/stores/auth'
export default {
  setup () {
    const auth = useAuthStore()

    return {
      auth,
    }
  },
  name: 'TheHeaderMenu',
  components: {
    TheHeaderAuthorizationMenu,
    TheHeaderNavigationMenu,
    TheHeaderProfileMenu
  }
}
</script>

<style scoped>
.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}
.right-menu {
  height: 100%;
}

.left-menu {
  height: 60px;
}
</style>
