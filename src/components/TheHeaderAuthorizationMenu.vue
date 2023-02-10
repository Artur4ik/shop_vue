<template>
  <div class="authorization-menu">
    <RouterLink to="/sign_in"><TheHeaderButton title="Sign in"></TheHeaderButton></RouterLink>
    <div class="sign-up-btn">
      Sign up
    </div>
  </div>
</template>

<script>
import TheHeaderButton from './TheHeaderButton.vue';
export default {
  name: 'TheHeaderAuthorizationMenu',
  components: {
    TheHeaderButton
  }
}
</script>

<style scoped>
.authorization-menu {
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 100%;
}

.sign-up-btn {
  background-color: green;
  padding: 0 20px;
  text-align: center;
  line-height: 60px;
  color: white;
  text-shadow: 1px 1px 1px black;
  transition: 300ms;
  cursor: pointer;
}
.sign-up-btn:hover {
  transition: 300ms;
  background-color: rgb(0, 168, 0);
}
</style>
