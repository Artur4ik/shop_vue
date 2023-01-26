<template>
  <div class="profile-menu">
    <RouterLink to="/"><TheHeaderButton title="Profile"/></RouterLink>
    <TheHeaderButton @click="logOut" title="Log out"/>
  </div>
</template>

<script>
import TheHeaderButton from './TheHeaderButton.vue';
import { useAuthStore } from '../logic/stores/auth'
export default {
  setup () {
    const auth = useAuthStore()

    return {
      auth,
    }
  },
  name: 'TheHeaderProfileMenu',
  components: {
    TheHeaderButton
  },
  methods: {
    logOut() {
      this.auth.removeToken()
      this.$router.push('/')
    }
  },
}
</script>

<style scoped>
.profile-menu {
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 100%;
}
</style>
